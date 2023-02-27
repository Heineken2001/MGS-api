import { navigate, routes } from '@redwoodjs/router';

import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';

import BuilderTranslationsForm from 'src/components/BuilderTranslations/BuilderTranslationsForm';

export const QUERY = gql`
    query EditBuilderTranslationsById($id: BigInt!) {
        builderTranslations: builderTranslations(id: $id) {
            id
            builder_id
            locale
            name
            body
            embedded
            jsonschemaform
        }
    }
`;
const UPDATE_BUILDER_TRANSLATIONS_MUTATION = gql`
    mutation UpdateBuilderTranslationsMutation(
        $id: BigInt!
        $input: UpdateBuilderTranslationsInput!
    ) {
        updateBuilderTranslations(id: $id, input: $input) {
            id
            builder_id
            locale
            name
            body
            embedded
            jsonschemaform
        }
    }
`;

export const Loading = () => <div>Loading...</div>;

export const Failure = ({ error }) => (
    <div className="rw-cell-error">{error?.message}</div>
);

export const Success = ({ builderTranslations }) => {
    const [updateBuilderTranslations, { loading, error }] = useMutation(
        UPDATE_BUILDER_TRANSLATIONS_MUTATION,
        {
            onCompleted: () => {
                toast.success('BuilderTranslations updated');
                navigate(routes.builderTranslationses());
            },
            onError: (error) => {
                toast.error(error.message);
            }
        }
    );

    const onSave = (input, id) => {
        updateBuilderTranslations({ variables: { id, input } });
    };

    return (
        <div className="rw-segment">
            <header className="rw-segment-header">
                <h2 className="rw-heading rw-heading-secondary">
                    Edit BuilderTranslations {builderTranslations?.id}
                </h2>
            </header>
            <div className="rw-segment-main">
                <BuilderTranslationsForm
                    builderTranslations={builderTranslations}
                    onSave={onSave}
                    error={error}
                    loading={loading}
                />
            </div>
        </div>
    );
};
