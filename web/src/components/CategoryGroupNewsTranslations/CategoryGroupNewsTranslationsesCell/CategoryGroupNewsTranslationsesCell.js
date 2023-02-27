import { Link, routes } from '@redwoodjs/router';

import CategoryGroupNewsTranslationses from 'src/components/CategoryGroupNewsTranslations/CategoryGroupNewsTranslationses';

export const QUERY = gql`
    query FindCategoryGroupNewsTranslationses {
        categoryGroupNewsTranslationses {
            id
            category_group_news_id
            locale
            name
            description
            title_2
        }
    }
`;

export const Loading = () => <div>Loading...</div>;

export const Empty = () => {
    return (
        <div className="rw-text-center">
            {'No categoryGroupNewsTranslationses yet. '}
            <Link
                to={routes.newCategoryGroupNewsTranslations()}
                className="rw-link"
            >
                {'Create one?'}
            </Link>
        </div>
    );
};

export const Failure = ({ error }) => (
    <div className="rw-cell-error">{error?.message}</div>
);

export const Success = ({ categoryGroupNewsTranslationses }) => {
    return (
        <CategoryGroupNewsTranslationses
            categoryGroupNewsTranslationses={categoryGroupNewsTranslationses}
        />
    );
};
