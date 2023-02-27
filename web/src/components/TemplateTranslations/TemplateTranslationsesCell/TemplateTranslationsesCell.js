import { Link, routes } from '@redwoodjs/router';

import TemplateTranslationses from 'src/components/TemplateTranslations/TemplateTranslationses';

export const QUERY = gql`
    query FindTemplateTranslationses {
        templateTranslationses {
            id
            template_id
            slug
            title
            locale
        }
    }
`;

export const Loading = () => <div>Loading...</div>;

export const Empty = () => {
    return (
        <div className="rw-text-center">
            {'No templateTranslationses yet. '}
            <Link to={routes.newTemplateTranslations()} className="rw-link">
                {'Create one?'}
            </Link>
        </div>
    );
};

export const Failure = ({ error }) => (
    <div className="rw-cell-error">{error?.message}</div>
);

export const Success = ({ templateTranslationses }) => {
    return (
        <TemplateTranslationses
            templateTranslationses={templateTranslationses}
        />
    );
};
