import { navigate, routes } from '@redwoodjs/router';
import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';

import BlocksForm from 'src/components/Blocks/BlocksForm';

const CREATE_BLOCKS_MUTATION = gql`
    mutation CreateBlocksMutation($input: CreateBlocksInput!) {
        createBlocks(input: $input) {
            id
        }
    }
`;

const NewBlocks = () => {
    const [createBlocks, { loading, error }] = useMutation(
        CREATE_BLOCKS_MUTATION,
        {
            onCompleted: () => {
                toast.success('Blocks created');
                navigate(routes.blockses());
            },
            onError: (error) => {
                toast.error(error.message);
            }
        }
    );

    const onSave = (input) => {
        createBlocks({ variables: { input } });
    };

    return (
        <div className="rw-segment">
            <header className="rw-segment-header">
                <h2 className="rw-heading rw-heading-secondary">New Blocks</h2>
            </header>
            <div className="rw-segment-main">
                <BlocksForm onSave={onSave} loading={loading} error={error} />
            </div>
        </div>
    );
};

export default NewBlocks;
