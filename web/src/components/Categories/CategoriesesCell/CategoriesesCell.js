import { Link, routes } from '@redwoodjs/router';

import Categorieses from 'src/components/Categories/Categorieses';

export const QUERY = gql`
    query FindCategorieses {
        categorieses {
            id
            parent_id
            position
            is_searchable
            is_active
            created_at
            updated_at
            type
        }
    }
`;

export const Loading = () => <div>Loading...</div>;

export const Empty = () => {
    return (
        <div className="rw-text-center">
            {'No categorieses yet. '}
            <Link to={routes.newCategories()} className="rw-link">
                {'Create one?'}
            </Link>
        </div>
    );
};

export const Failure = ({ error }) => (
    <div className="rw-cell-error">{error?.message}</div>
);

export const Success = ({ categorieses }) => {
    return <Categorieses categorieses={categorieses} />;
};
