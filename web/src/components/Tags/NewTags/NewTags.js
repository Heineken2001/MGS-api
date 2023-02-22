import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import TagsForm from 'src/components/Tags/TagsForm'

const CREATE_TAGS_MUTATION = gql`
  mutation CreateTagsMutation($input: CreateTagsInput!) {
    createTags(input: $input) {
      id
    }
  }
`

const NewTags = () => {
  const [createTags, { loading, error }] = useMutation(CREATE_TAGS_MUTATION, {
    onCompleted: () => {
      toast.success('Tags created')
      navigate(routes.tagses())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input) => {
    createTags({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Tags</h2>
      </header>
      <div className="rw-segment-main">
        <TagsForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewTags
