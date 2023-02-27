import { navigate, routes } from '@redwoodjs/router';

import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';

import TemplatesForm from 'src/components/Templates/TemplatesForm';

export const QUERY = gql`
    query EditTemplatesById($id: BigInt!) {
        templates: templates(id: $id) {
            id
            is_active
            deleted_at
            created_at
            updated_at
        }
    }
`;
const UPDATE_TEMPLATES_MUTATION = gql`
    mutation UpdateTemplatesMutation(
        $id: BigInt!
        $input: UpdateTemplatesInput!
    ) {
        updateTemplates(id: $id, input: $input) {
            id
            is_active
            deleted_at
            created_at
            updated_at
        }
    }
`;

export const Loading = () => <div>Loading...</div>;

export const Failure = ({ error }) => (
    <div className="rw-cell-error">{error?.message}</div>
);

export const Success = ({ templates }) => {
    const [updateTemplates, { loading, error }] = useMutation(
        UPDATE_TEMPLATES_MUTATION,
        {
            onCompleted: () => {
                toast.success('Templates updated');
                navigate(routes.templateses());
            },
            onError: (error) => {
                toast.error(error.message);
            }
        }
    );

    const onSave = (input, id) => {
        updateTemplates({ variables: { id, input } });
    };

    return (
        <div className="rw-segment">
            <header className="rw-segment-header">
                <h2 className="rw-heading rw-heading-secondary">
                    Edit Templates {templates?.id}
                </h2>
            </header>
            <div className="rw-segment-main">
                <TemplatesForm
                    templates={templates}
                    onSave={onSave}
                    error={error}
                    loading={loading}
                />
            </div>
        </div>
    );
};
