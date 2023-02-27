import { navigate, routes } from '@redwoodjs/router';
import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';

import TemplatesForm from 'src/components/Templates/TemplatesForm';

const CREATE_TEMPLATES_MUTATION = gql`
    mutation CreateTemplatesMutation($input: CreateTemplatesInput!) {
        createTemplates(input: $input) {
            id
        }
    }
`;

const NewTemplates = () => {
    const [createTemplates, { loading, error }] = useMutation(
        CREATE_TEMPLATES_MUTATION,
        {
            onCompleted: () => {
                toast.success('Templates created');
                navigate(routes.templateses());
            },
            onError: (error) => {
                toast.error(error.message);
            }
        }
    );

    const onSave = (input) => {
        createTemplates({ variables: { input } });
    };

    return (
        <div className="rw-segment">
            <header className="rw-segment-header">
                <h2 className="rw-heading rw-heading-secondary">
                    New Templates
                </h2>
            </header>
            <div className="rw-segment-main">
                <TemplatesForm
                    onSave={onSave}
                    loading={loading}
                    error={error}
                />
            </div>
        </div>
    );
};

export default NewTemplates;
