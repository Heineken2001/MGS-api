import { Link, routes } from '@redwoodjs/router';

import BlockValueses from 'src/components/BlockValues/BlockValueses';

export const QUERY = gql`
    query FindBlockValueses {
        blockValueses {
            id
            code
            block_id
            position
            key
            type
            created_at
            updated_at
        }
    }
`;

export const Loading = () => <div>Loading...</div>;

export const Empty = () => {
    return (
        <div className="rw-text-center">
            {'No blockValueses yet. '}
            <Link to={routes.newBlockValues()} className="rw-link">
                {'Create one?'}
            </Link>
        </div>
    );
};

export const Failure = ({ error }) => (
    <div className="rw-cell-error">{error?.message}</div>
);

export const Success = ({ blockValueses }) => {
    return <BlockValueses blockValueses={blockValueses} />;
};
