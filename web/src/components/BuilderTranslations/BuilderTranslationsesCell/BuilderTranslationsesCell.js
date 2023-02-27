import { Link, routes } from '@redwoodjs/router';

import BuilderTranslationses from 'src/components/BuilderTranslations/BuilderTranslationses';

export const QUERY = gql`
    query FindBuilderTranslationses {
        builderTranslationses {
            id
            builder_id
            locale
            name
            body
            embedded
            jsonschemaform
        }
    }
`;

export const Loading = () => <div>Loading...</div>;

export const Empty = () => {
    return (
        <div className="rw-text-center">
            {'No builderTranslationses yet. '}
            <Link to={routes.newBuilderTranslations()} className="rw-link">
                {'Create one?'}
            </Link>
        </div>
    );
};

export const Failure = ({ error }) => (
    <div className="rw-cell-error">{error?.message}</div>
);

export const Success = ({ builderTranslationses }) => {
    return (
        <BuilderTranslationses builderTranslationses={builderTranslationses} />
    );
};
