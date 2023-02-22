import { navigate, routes } from '@redwoodjs/router'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import TagsForm from 'src/components/Tags/TagsForm'

export const QUERY = gql`
  query EditTagsById($id: BigInt!) {
    tags: tags(id: $id) {
      id
      type
      created_at
      updated_at
      tag_group
    }
  }
`
const UPDATE_TAGS_MUTATION = gql`
  mutation UpdateTagsMutation($id: BigInt!, $input: UpdateTagsInput!) {
    updateTags(id: $id, input: $input) {
      id
      type
      created_at
      updated_at
      tag_group
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ tags }) => {
  const [updateTags, { loading, error }] = useMutation(UPDATE_TAGS_MUTATION, {
    onCompleted: () => {
      toast.success('Tags updated')
      navigate(routes.tagses())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input, id) => {
    updateTags({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Tags {tags?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <TagsForm tags={tags} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
