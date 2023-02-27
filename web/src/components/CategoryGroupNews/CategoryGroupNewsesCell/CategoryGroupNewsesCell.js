import { Link, routes } from '@redwoodjs/router';

import CategoryGroupNewses from 'src/components/CategoryGroupNews/CategoryGroupNewses';

export const QUERY = gql`
    query FindCategoryGroupNewses {
        categoryGroupNewses {
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
            {'No categoryGroupNewses yet. '}
            <Link to={routes.newCategoryGroupNews()} className="rw-link">
                {'Create one?'}
            </Link>
        </div>
    );
};

export const Failure = ({ error }) => (
    <div className="rw-cell-error">{error?.message}</div>
);

export const Success = ({ categoryGroupNewses }) => {
    return <CategoryGroupNewses categoryGroupNewses={categoryGroupNewses} />;
};
