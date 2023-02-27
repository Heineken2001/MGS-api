import { Link, routes } from '@redwoodjs/router';

import CategoryNewsTranslationses from 'src/components/CategoryNewsTranslations/CategoryNewsTranslationses';

export const QUERY = gql`
    query FindCategoryNewsTranslationses {
        categoryNewsTranslationses {
            id
            category_news_id
            locale
            name
            description
        }
    }
`;

export const Loading = () => <div>Loading...</div>;

export const Empty = () => {
    return (
        <div className="rw-text-center">
            {'No categoryNewsTranslationses yet. '}
            <Link to={routes.newCategoryNewsTranslations()} className="rw-link">
                {'Create one?'}
            </Link>
        </div>
    );
};

export const Failure = ({ error }) => (
    <div className="rw-cell-error">{error?.message}</div>
);

export const Success = ({ categoryNewsTranslationses }) => {
    return (
        <CategoryNewsTranslationses
            categoryNewsTranslationses={categoryNewsTranslationses}
        />
    );
};
