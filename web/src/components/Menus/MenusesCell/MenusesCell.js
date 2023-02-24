import { Link, routes } from '@redwoodjs/router';

import Menuses from 'src/components/Menus/Menuses';

export const QUERY = gql`
    query FindMenuses {
        menuses {
            id
            is_active
            created_at
            updated_at
            position
        }
    }
`;

export const Loading = () => <div>Loading...</div>;

export const Empty = () => {
    return (
        <div className="rw-text-center">
            {'No menuses yet. '}
            <Link to={routes.newMenus()} className="rw-link">
                {'Create one?'}
            </Link>
        </div>
    );
};

export const Failure = ({ error }) => (
    <div className="rw-cell-error">{error?.message}</div>
);

export const Success = ({ menuses }) => {
    return <Menuses menuses={menuses} />;
};
