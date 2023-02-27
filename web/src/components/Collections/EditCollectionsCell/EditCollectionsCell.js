import { navigate, routes } from '@redwoodjs/router';

import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';

import CollectionsForm from 'src/components/Collections/CollectionsForm';

export const QUERY = gql`
    query EditCollectionsById($id: BigInt!) {
        collections: collections(id: $id) {
            id
            target
            conditions
            type
            is_active
            deleted_at
            created_at
            updated_at
            post_type
        }
    }
`;
const UPDATE_COLLECTIONS_MUTATION = gql`
    mutation UpdateCollectionsMutation(
        $id: BigInt!
        $input: UpdateCollectionsInput!
    ) {
        updateCollections(id: $id, input: $input) {
            id
            target
            conditions
            type
            is_active
            deleted_at
            created_at
            updated_at
            post_type
        }
    }
`;

export const Loading = () => <div>Loading...</div>;

export const Failure = ({ error }) => (
    <div className="rw-cell-error">{error?.message}</div>
);

export const Success = ({ collections }) => {
    const [updateCollections, { loading, error }] = useMutation(
        UPDATE_COLLECTIONS_MUTATION,
        {
            onCompleted: () => {
                toast.success('Collections updated');
                navigate(routes.collectionses());
            },
            onError: (error) => {
                toast.error(error.message);
            }
        }
    );

    const onSave = (input, id) => {
        updateCollections({ variables: { id, input } });
    };

    return (
        <div className="rw-segment">
            <header className="rw-segment-header">
                <h2 className="rw-heading rw-heading-secondary">
                    Edit Collections {collections?.id}
                </h2>
            </header>
            <div className="rw-segment-main">
                <CollectionsForm
                    collections={collections}
                    onSave={onSave}
                    error={error}
                    loading={loading}
                />
            </div>
        </div>
    );
};
