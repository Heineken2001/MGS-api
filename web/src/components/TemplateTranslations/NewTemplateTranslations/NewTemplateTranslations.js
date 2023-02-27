import { navigate, routes } from '@redwoodjs/router';
import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';

import TemplateTranslationsForm from 'src/components/TemplateTranslations/TemplateTranslationsForm';

const CREATE_TEMPLATE_TRANSLATIONS_MUTATION = gql`
    mutation CreateTemplateTranslationsMutation(
        $input: CreateTemplateTranslationsInput!
    ) {
        createTemplateTranslations(input: $input) {
            id
        }
    }
`;

const NewTemplateTranslations = () => {
    const [createTemplateTranslations, { loading, error }] = useMutation(
        CREATE_TEMPLATE_TRANSLATIONS_MUTATION,
        {
            onCompleted: () => {
                toast.success('TemplateTranslations created');
                navigate(routes.templateTranslationses());
            },
            onError: (error) => {
                toast.error(error.message);
            }
        }
    );

    const onSave = (input) => {
        createTemplateTranslations({ variables: { input } });
    };

    return (
        <div className="rw-segment">
            <header className="rw-segment-header">
                <h2 className="rw-heading rw-heading-secondary">
                    New TemplateTranslations
                </h2>
            </header>
            <div className="rw-segment-main">
                <TemplateTranslationsForm
                    onSave={onSave}
                    loading={loading}
                    error={error}
                />
            </div>
        </div>
    );
};

export default NewTemplateTranslations;
