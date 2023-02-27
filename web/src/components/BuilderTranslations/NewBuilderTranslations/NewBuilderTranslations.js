import { navigate, routes } from '@redwoodjs/router';
import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';

import BuilderTranslationsForm from 'src/components/BuilderTranslations/BuilderTranslationsForm';

const CREATE_BUILDER_TRANSLATIONS_MUTATION = gql`
    mutation CreateBuilderTranslationsMutation(
        $input: CreateBuilderTranslationsInput!
    ) {
        createBuilderTranslations(input: $input) {
            id
        }
    }
`;

const NewBuilderTranslations = () => {
    const [createBuilderTranslations, { loading, error }] = useMutation(
        CREATE_BUILDER_TRANSLATIONS_MUTATION,
        {
            onCompleted: () => {
                toast.success('BuilderTranslations created');
                navigate(routes.builderTranslationses());
            },
            onError: (error) => {
                toast.error(error.message);
            }
        }
    );

    const onSave = (input) => {
        createBuilderTranslations({ variables: { input } });
    };

    return (
        <div className="rw-segment">
            <header className="rw-segment-header">
                <h2 className="rw-heading rw-heading-secondary">
                    New BuilderTranslations
                </h2>
            </header>
            <div className="rw-segment-main">
                <BuilderTranslationsForm
                    onSave={onSave}
                    loading={loading}
                    error={error}
                />
            </div>
        </div>
    );
};

export default NewBuilderTranslations;
