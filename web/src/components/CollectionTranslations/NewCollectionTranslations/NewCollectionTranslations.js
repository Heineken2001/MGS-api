import { navigate, routes } from '@redwoodjs/router';
import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';

import CollectionTranslationsForm from 'src/components/CollectionTranslations/CollectionTranslationsForm';

const CREATE_COLLECTION_TRANSLATIONS_MUTATION = gql`
    mutation CreateCollectionTranslationsMutation(
        $input: CreateCollectionTranslationsInput!
    ) {
        createCollectionTranslations(input: $input) {
            id
        }
    }
`;

const NewCollectionTranslations = () => {
    const [createCollectionTranslations, { loading, error }] = useMutation(
        CREATE_COLLECTION_TRANSLATIONS_MUTATION,
        {
            onCompleted: () => {
                toast.success('CollectionTranslations created');
                navigate(routes.collectionTranslationses());
            },
            onError: (error) => {
                toast.error(error.message);
            }
        }
    );

    const onSave = (input) => {
        createCollectionTranslations({ variables: { input } });
    };

    return (
        <div className="rw-segment">
            <header className="rw-segment-header">
                <h2 className="rw-heading rw-heading-secondary">
                    New CollectionTranslations
                </h2>
            </header>
            <div className="rw-segment-main">
                <CollectionTranslationsForm
                    onSave={onSave}
                    loading={loading}
                    error={error}
                />
            </div>
        </div>
    );
};

export default NewCollectionTranslations;
