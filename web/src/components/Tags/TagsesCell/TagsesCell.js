import { Link, routes } from '@redwoodjs/router'

import Tagses from 'src/components/Tags/Tagses'

export const QUERY = gql`
    query FindTagses {
        tagses(page: 1, limit: 10) {
            id
            type
            created_at
            updated_at
            tag_group
            tag_translations {
                id
            }
        }
    }
`;

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No tagses yet. '}
      <Link to={routes.newTags()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ tagses }) => {
  return <Tagses tagses={tagses} />
}
