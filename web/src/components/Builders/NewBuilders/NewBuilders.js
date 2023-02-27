import { navigate, routes } from '@redwoodjs/router';
import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';

import BuildersForm from 'src/components/Builders/BuildersForm';

const CREATE_BUILDERS_MUTATION = gql`
    mutation CreateBuildersMutation($input: CreateBuildersInput!) {
        createBuilders(input: $input) {
            id
        }
    }
`;

const NewBuilders = () => {
    const [createBuilders, { loading, error }] = useMutation(
        CREATE_BUILDERS_MUTATION,
        {
            onCompleted: () => {
                toast.success('Builders created');
                navigate(routes.builderses());
            },
            onError: (error) => {
                toast.error(error.message);
            }
        }
    );

    const onSave = (input) => {
        createBuilders({ variables: { input } });
    };

    return (
        <div className="rw-segment">
            <header className="rw-segment-header">
                <h2 className="rw-heading rw-heading-secondary">
                    New Builders
                </h2>
            </header>
            <div className="rw-segment-main">
                <BuildersForm onSave={onSave} loading={loading} error={error} />
            </div>
        </div>
    );
};

export default NewBuilders;
