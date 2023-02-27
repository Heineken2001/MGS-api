import { Link, routes } from '@redwoodjs/router';

import CategoryTranslationses from 'src/components/CategoryTranslations/CategoryTranslationses';

export const QUERY = gql`
    query FindCategoryTranslationses {
        categoryTranslationses {
            id
            category_id
            locale
            name
            content
            description
            slug
            title
            short_description
            long_description
            featured_image
            formdata
            jsonschema
            uischema
        }
    }
`;

export const Loading = () => <div>Loading...</div>;

export const Empty = () => {
    return (
        <div className="rw-text-center">
            {'No categoryTranslationses yet. '}
            <Link to={routes.newCategoryTranslations()} className="rw-link">
                {'Create one?'}
            </Link>
        </div>
    );
};

export const Failure = ({ error }) => (
    <div className="rw-cell-error">{error?.message}</div>
);

export const Success = ({ categoryTranslationses }) => {
    return (
        <CategoryTranslationses
            categoryTranslationses={categoryTranslationses}
        />
    );
};
