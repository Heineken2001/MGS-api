import { navigate, routes } from '@redwoodjs/router';

import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';

import CategoryTranslationsForm from 'src/components/CategoryTranslations/CategoryTranslationsForm';

export const QUERY = gql`
    query EditCategoryTranslationsById($id: BigInt!) {
        categoryTranslations: categoryTranslations(id: $id) {
            id
            category_id
            locale
            name
            content
            description
            slug
            title
            short_description
            long_description
            featured_image
            formdata
            jsonschema
            uischema
        }
    }
`;
const UPDATE_CATEGORY_TRANSLATIONS_MUTATION = gql`
    mutation UpdateCategoryTranslationsMutation(
        $id: BigInt!
        $input: UpdateCategoryTranslationsInput!
    ) {
        updateCategoryTranslations(id: $id, input: $input) {
            id
            category_id
            locale
            name
            content
            description
            slug
            title
            short_description
            long_description
            featured_image
            formdata
            jsonschema
            uischema
        }
    }
`;

export const Loading = () => <div>Loading...</div>;

export const Failure = ({ error }) => (
    <div className="rw-cell-error">{error?.message}</div>
);

export const Success = ({ categoryTranslations }) => {
    const [updateCategoryTranslations, { loading, error }] = useMutation(
        UPDATE_CATEGORY_TRANSLATIONS_MUTATION,
        {
            onCompleted: () => {
                toast.success('CategoryTranslations updated');
                navigate(routes.categoryTranslationses());
            },
            onError: (error) => {
                toast.error(error.message);
            }
        }
    );

    const onSave = (input, id) => {
        updateCategoryTranslations({ variables: { id, input } });
    };

    return (
        <div className="rw-segment">
            <header className="rw-segment-header">
                <h2 className="rw-heading rw-heading-secondary">
                    Edit CategoryTranslations {categoryTranslations?.id}
                </h2>
            </header>
            <div className="rw-segment-main">
                <CategoryTranslationsForm
                    categoryTranslations={categoryTranslations}
                    onSave={onSave}
                    error={error}
                    loading={loading}
                />
            </div>
        </div>
    );
};
