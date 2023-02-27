import { navigate, routes } from '@redwoodjs/router';

import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';

import TemplateTranslationsForm from 'src/components/TemplateTranslations/TemplateTranslationsForm';

export const QUERY = gql`
    query EditTemplateTranslationsById($id: BigInt!) {
        templateTranslations: templateTranslations(id: $id) {
            id
            template_id
            slug
            title
            locale
        }
    }
`;
const UPDATE_TEMPLATE_TRANSLATIONS_MUTATION = gql`
    mutation UpdateTemplateTranslationsMutation(
        $id: BigInt!
        $input: UpdateTemplateTranslationsInput!
    ) {
        updateTemplateTranslations(id: $id, input: $input) {
            id
            template_id
            slug
            title
            locale
        }
    }
`;

export const Loading = () => <div>Loading...</div>;

export const Failure = ({ error }) => (
    <div className="rw-cell-error">{error?.message}</div>
);

export const Success = ({ templateTranslations }) => {
    const [updateTemplateTranslations, { loading, error }] = useMutation(
        UPDATE_TEMPLATE_TRANSLATIONS_MUTATION,
        {
            onCompleted: () => {
                toast.success('TemplateTranslations updated');
                navigate(routes.templateTranslationses());
            },
            onError: (error) => {
                toast.error(error.message);
            }
        }
    );

    const onSave = (input, id) => {
        updateTemplateTranslations({ variables: { id, input } });
    };

    return (
        <div className="rw-segment">
            <header className="rw-segment-header">
                <h2 className="rw-heading rw-heading-secondary">
                    Edit TemplateTranslations {templateTranslations?.id}
                </h2>
            </header>
            <div className="rw-segment-main">
                <TemplateTranslationsForm
                    templateTranslations={templateTranslations}
                    onSave={onSave}
                    error={error}
                    loading={loading}
                />
            </div>
        </div>
    );
};
