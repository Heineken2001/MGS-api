import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { timeTag } from 'src/lib/formatters'

const DELETE_TAGS_MUTATION = gql`
  mutation DeleteTagsMutation($id: BigInt!) {
    deleteTags(id: $id) {
      id
    }
  }
`

const Tags = ({ tags }) => {
  const [deleteTags] = useMutation(DELETE_TAGS_MUTATION, {
    onCompleted: () => {
      toast.success('Tags deleted')
      navigate(routes.tagses())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete tags ' + id + '?')) {
      deleteTags({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Tags {tags.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{tags.id}</td>
            </tr>
            <tr>
              <th>Type</th>
              <td>{tags.type}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(tags.created_at)}</td>
            </tr>
            <tr>
              <th>Updated at</th>
              <td>{timeTag(tags.updated_at)}</td>
            </tr>
            <tr>
              <th>Tag group</th>
              <td>{tags.tag_group}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editTags({ id: tags.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(tags.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Tags
