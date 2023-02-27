import { navigate, routes } from '@redwoodjs/router';
import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';

import BlockValuesForm from 'src/components/BlockValues/BlockValuesForm';

const CREATE_BLOCK_VALUES_MUTATION = gql`
    mutation CreateBlockValuesMutation($input: CreateBlockValuesInput!) {
        createBlockValues(input: $input) {
            id
        }
    }
`;

const NewBlockValues = () => {
    const [createBlockValues, { loading, error }] = useMutation(
        CREATE_BLOCK_VALUES_MUTATION,
        {
            onCompleted: () => {
                toast.success('BlockValues created');
                navigate(routes.blockValueses());
            },
            onError: (error) => {
                toast.error(error.message);
            }
        }
    );

    const onSave = (input) => {
        createBlockValues({ variables: { input } });
    };

    return (
        <div className="rw-segment">
            <header className="rw-segment-header">
                <h2 className="rw-heading rw-heading-secondary">
                    New BlockValues
                </h2>
            </header>
            <div className="rw-segment-main">
                <BlockValuesForm
                    onSave={onSave}
                    loading={loading}
                    error={error}
                />
            </div>
        </div>
    );
};

export default NewBlockValues;
