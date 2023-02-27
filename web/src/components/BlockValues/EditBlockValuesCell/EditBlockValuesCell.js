import { navigate, routes } from '@redwoodjs/router';

import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';

import BlockValuesForm from 'src/components/BlockValues/BlockValuesForm';

export const QUERY = gql`
    query EditBlockValuesById($id: BigInt!) {
        blockValues: blockValues(id: $id) {
            id
            code
            block_id
            position
            key
            type
            created_at
            updated_at
        }
    }
`;
const UPDATE_BLOCK_VALUES_MUTATION = gql`
    mutation UpdateBlockValuesMutation(
        $id: BigInt!
        $input: UpdateBlockValuesInput!
    ) {
        updateBlockValues(id: $id, input: $input) {
            id
            code
            block_id
            position
            key
            type
            created_at
            updated_at
        }
    }
`;

export const Loading = () => <div>Loading...</div>;

export const Failure = ({ error }) => (
    <div className="rw-cell-error">{error?.message}</div>
);

export const Success = ({ blockValues }) => {
    const [updateBlockValues, { loading, error }] = useMutation(
        UPDATE_BLOCK_VALUES_MUTATION,
        {
            onCompleted: () => {
                toast.success('BlockValues updated');
                navigate(routes.blockValueses());
            },
            onError: (error) => {
                toast.error(error.message);
            }
        }
    );

    const onSave = (input, id) => {
        updateBlockValues({ variables: { id, input } });
    };

    return (
        <div className="rw-segment">
            <header className="rw-segment-header">
                <h2 className="rw-heading rw-heading-secondary">
                    Edit BlockValues {blockValues?.id}
                </h2>
            </header>
            <div className="rw-segment-main">
                <BlockValuesForm
                    blockValues={blockValues}
                    onSave={onSave}
                    error={error}
                    loading={loading}
                />
            </div>
        </div>
    );
};
