import { navigate, routes } from '@redwoodjs/router';

import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';

import CategoryNewsTranslationsForm from 'src/components/CategoryNewsTranslations/CategoryNewsTranslationsForm';

export const QUERY = gql`
    query EditCategoryNewsTranslationsById($id: BigInt!) {
        categoryNewsTranslations: categoryNewsTranslations(id: $id) {
            id
            category_news_id
            locale
            name
            description
        }
    }
`;
const UPDATE_CATEGORY_NEWS_TRANSLATIONS_MUTATION = gql`
    mutation UpdateCategoryNewsTranslationsMutation(
        $id: BigInt!
        $input: UpdateCategoryNewsTranslationsInput!
    ) {
        updateCategoryNewsTranslations(id: $id, input: $input) {
            id
            category_news_id
            locale
            name
            description
        }
    }
`;

export const Loading = () => <div>Loading...</div>;

export const Failure = ({ error }) => (
    <div className="rw-cell-error">{error?.message}</div>
);

export const Success = ({ categoryNewsTranslations }) => {
    const [updateCategoryNewsTranslations, { loading, error }] = useMutation(
        UPDATE_CATEGORY_NEWS_TRANSLATIONS_MUTATION,
        {
            onCompleted: () => {
                toast.success('CategoryNewsTranslations updated');
                navigate(routes.categoryNewsTranslationses());
            },
            onError: (error) => {
                toast.error(error.message);
            }
        }
    );

    const onSave = (input, id) => {
        updateCategoryNewsTranslations({ variables: { id, input } });
    };

    return (
        <div className="rw-segment">
            <header className="rw-segment-header">
                <h2 className="rw-heading rw-heading-secondary">
                    Edit CategoryNewsTranslations {categoryNewsTranslations?.id}
                </h2>
            </header>
            <div className="rw-segment-main">
                <CategoryNewsTranslationsForm
                    categoryNewsTranslations={categoryNewsTranslations}
                    onSave={onSave}
                    error={error}
                    loading={loading}
                />
            </div>
        </div>
    );
};
