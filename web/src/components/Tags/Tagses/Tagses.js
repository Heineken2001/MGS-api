import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Tags/TagsesCell'
import { timeTag, truncate } from 'src/lib/formatters'

const DELETE_TAGS_MUTATION = gql`
  mutation DeleteTagsMutation($id: BigInt!) {
    deleteTags(id: $id) {
      id
    }
  }
`

const TagsesList = ({ tagses }) => {
  const [deleteTags] = useMutation(DELETE_TAGS_MUTATION, {
    onCompleted: () => {
      toast.success('Tags deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete tags ' + id + '?')) {
      deleteTags({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Type</th>
            <th>Created at</th>
            <th>Updated at</th>
            <th>Tag group</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {tagses.map((tags) => (
            <tr key={tags.id}>
              <td>{truncate(tags.id)}</td>
              <td>{truncate(tags.type)}</td>
              <td>{timeTag(tags.created_at)}</td>
              <td>{timeTag(tags.updated_at)}</td>
              <td>{truncate(tags.tag_group)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.tags({ id: tags.id })}
                    title={'Show tags ' + tags.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editTags({ id: tags.id })}
                    title={'Edit tags ' + tags.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete tags ' + tags.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(tags.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default TagsesList
