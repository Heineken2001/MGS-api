import { navigate, routes } from '@redwoodjs/router';
import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';

import CollectionsForm from 'src/components/Collections/CollectionsForm';

const CREATE_COLLECTIONS_MUTATION = gql`
    mutation CreateCollectionsMutation($input: CreateCollectionsInput!) {
        createCollections(input: $input) {
            id
        }
    }
`;

const NewCollections = () => {
    const [createCollections, { loading, error }] = useMutation(
        CREATE_COLLECTIONS_MUTATION,
        {
            onCompleted: () => {
                toast.success('Collections created');
                navigate(routes.collectionses());
            },
            onError: (error) => {
                toast.error(error.message);
            }
        }
    );

    const onSave = (input) => {
        createCollections({ variables: { input } });
    };

    return (
        <div className="rw-segment">
            <header className="rw-segment-header">
                <h2 className="rw-heading rw-heading-secondary">
                    New Collections
                </h2>
            </header>
            <div className="rw-segment-main">
                <CollectionsForm
                    onSave={onSave}
                    loading={loading}
                    error={error}
                />
            </div>
        </div>
    );
};

export default NewCollections;
