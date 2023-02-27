import { navigate, routes } from '@redwoodjs/router';

import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';

import CollectionTranslationsForm from 'src/components/CollectionTranslations/CollectionTranslationsForm';

export const QUERY = gql`
    query EditCollectionTranslationsById($id: BigInt!) {
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
const UPDATE_COLLECTION_TRANSLATIONS_MUTATION = gql`
    mutation UpdateCollectionTranslationsMutation(
        $id: BigInt!
        $input: UpdateCollectionTranslationsInput!
    ) {
        updateCollectionTranslations(id: $id, input: $input) {
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

export const Failure = ({ error }) => (
    <div className="rw-cell-error">{error?.message}</div>
);

export const Success = ({ collectionTranslations }) => {
    const [updateCollectionTranslations, { loading, error }] = useMutation(
        UPDATE_COLLECTION_TRANSLATIONS_MUTATION,
        {
            onCompleted: () => {
                toast.success('CollectionTranslations updated');
                navigate(routes.collectionTranslationses());
            },
            onError: (error) => {
                toast.error(error.message);
            }
        }
    );

    const onSave = (input, id) => {
        updateCollectionTranslations({ variables: { id, input } });
    };

    return (
        <div className="rw-segment">
            <header className="rw-segment-header">
                <h2 className="rw-heading rw-heading-secondary">
                    Edit CollectionTranslations {collectionTranslations?.id}
                </h2>
            </header>
            <div className="rw-segment-main">
                <CollectionTranslationsForm
                    collectionTranslations={collectionTranslations}
                    onSave={onSave}
                    error={error}
                    loading={loading}
                />
            </div>
        </div>
    );
};
