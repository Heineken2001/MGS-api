import { Link, routes } from '@redwoodjs/router';

import Collectionses from 'src/components/Collections/Collectionses';

export const QUERY = gql`
    query FindCollectionses {
        collectionses {
            id
            target
            conditions
            type
            is_active
            deleted_at
            created_at
            updated_at
            post_type
        }
    }
`;

export const Loading = () => <div>Loading...</div>;

export const Empty = () => {
    return (
        <div className="rw-text-center">
            {'No collectionses yet. '}
            <Link to={routes.newCollections()} className="rw-link">
                {'Create one?'}
            </Link>
        </div>
    );
};

export const Failure = ({ error }) => (
    <div className="rw-cell-error">{error?.message}</div>
);

export const Success = ({ collectionses }) => {
    return <Collectionses collectionses={collectionses} />;
};
