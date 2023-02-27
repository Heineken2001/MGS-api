import { navigate, routes } from '@redwoodjs/router';

import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';

import BlocksForm from 'src/components/Blocks/BlocksForm';

export const QUERY = gql`
    query EditBlocksById($id: BigInt!) {
        blocks: blocks(id: $id) {
            id
            is_active
            html
            scss
            image_feature
            mobile
            amp
            created_at
            updated_at
            deleted_at
        }
    }
`;
const UPDATE_BLOCKS_MUTATION = gql`
    mutation UpdateBlocksMutation($id: BigInt!, $input: UpdateBlocksInput!) {
        updateBlocks(id: $id, input: $input) {
            id
            is_active
            html
            scss
            image_feature
            mobile
            amp
            created_at
            updated_at
            deleted_at
        }
    }
`;

export const Loading = () => <div>Loading...</div>;

export const Failure = ({ error }) => (
    <div className="rw-cell-error">{error?.message}</div>
);

export const Success = ({ blocks }) => {
    const [updateBlocks, { loading, error }] = useMutation(
        UPDATE_BLOCKS_MUTATION,
        {
            onCompleted: () => {
                toast.success('Blocks updated');
                navigate(routes.blockses());
            },
            onError: (error) => {
                toast.error(error.message);
            }
        }
    );

    const onSave = (input, id) => {
        updateBlocks({ variables: { id, input } });
    };

    return (
        <div className="rw-segment">
            <header className="rw-segment-header">
                <h2 className="rw-heading rw-heading-secondary">
                    Edit Blocks {blocks?.id}
                </h2>
            </header>
            <div className="rw-segment-main">
                <BlocksForm
                    blocks={blocks}
                    onSave={onSave}
                    error={error}
                    loading={loading}
                />
            </div>
        </div>
    );
};
