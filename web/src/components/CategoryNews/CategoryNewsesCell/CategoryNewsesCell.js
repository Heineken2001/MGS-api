import { Link, routes } from '@redwoodjs/router';

import CategoryNewses from 'src/components/CategoryNews/CategoryNewses';

export const QUERY = gql`
    query FindCategoryNewses {
        categoryNewses {
            id
            parent_id
            slug
            position
            is_searchable
            is_active
            created_at
            updated_at
        }
    }
`;

export const Loading = () => <div>Loading...</div>;

export const Empty = () => {
    return (
        <div className="rw-text-center">
            {'No categoryNewses yet. '}
            <Link to={routes.newCategoryNews()} className="rw-link">
                {'Create one?'}
            </Link>
        </div>
    );
};

export const Failure = ({ error }) => (
    <div className="rw-cell-error">{error?.message}</div>
);

export const Success = ({ categoryNewses }) => {
    return <CategoryNewses categoryNewses={categoryNewses} />;
};
