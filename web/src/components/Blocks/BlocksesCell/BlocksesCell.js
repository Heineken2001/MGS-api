import { Link, routes } from '@redwoodjs/router';

import Blockses from 'src/components/Blocks/Blockses';

export const QUERY = gql`
    query FindBlockses {
        blockses {
            id
            is_active
            html
            scss
            image_feature
            mobile
            amp
            created_at
            updated_at
            deleted_at
        }
    }
`;

export const Loading = () => <div>Loading...</div>;

export const Empty = () => {
    return (
        <div className="rw-text-center">
            {'No blockses yet. '}
            <Link to={routes.newBlocks()} className="rw-link">
                {'Create one?'}
            </Link>
        </div>
    );
};

export const Failure = ({ error }) => (
    <div className="rw-cell-error">{error?.message}</div>
);

export const Success = ({ blockses }) => {
    return <Blockses blockses={blockses} />;
};
