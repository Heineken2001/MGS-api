import { Link, routes } from '@redwoodjs/router';

import CollectionTranslationses from 'src/components/CollectionTranslations/CollectionTranslationses';

export const QUERY = gql`
    query FindCollectionTranslationses {
        collectionTranslationses {
            id
            collection_id
            locale
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
            {'No collectionTranslationses yet. '}
            <Link to={routes.newCollectionTranslations()} className="rw-link">
                {'Create one?'}
            </Link>
        </div>
    );
};

export const Failure = ({ error }) => (
    <div className="rw-cell-error">{error?.message}</div>
);

export const Success = ({ collectionTranslationses }) => {
    return (
        <CollectionTranslationses
            collectionTranslationses={collectionTranslationses}
        />
    );
};
