import CollectionTranslations from 'src/components/CollectionTranslations/CollectionTranslations';

export const QUERY = gql`
    query FindCollectionTranslationsById($id: BigInt!) {
        collectionTranslations: collectionTranslations(id: $id) {
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

export const Empty = () => <div>CollectionTranslations not found</div>;

export const Failure = ({ error }) => (
    <div className="rw-cell-error">{error?.message}</div>
);

export const Success = ({ collectionTranslations }) => {
    return (
        <CollectionTranslations
            collectionTranslations={collectionTranslations}
        />
    );
};
