import Tags from 'src/components/Tags/Tags'

export const QUERY = gql`
  query FindTagsById($id: BigInt!) {
    tags: tags(id: $id) {
      id
      type
      created_at
      updated_at
      tag_group
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Tags not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ tags }) => {
  return <Tags tags={tags} />
}
