import { navigate, routes } from '@redwoodjs/router';

import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';

import CategoryGroupNewsTranslationsForm from 'src/components/CategoryGroupNewsTranslations/CategoryGroupNewsTranslationsForm';

export const QUERY = gql`
    query EditCategoryGroupNewsTranslationsById($id: BigInt!) {
        categoryGroupNewsTranslations: categoryGroupNewsTranslations(id: $id) {
            id
            category_group_news_id
            locale
            name
            description
            title_2
        }
    }
`;
const UPDATE_CATEGORY_GROUP_NEWS_TRANSLATIONS_MUTATION = gql`
    mutation UpdateCategoryGroupNewsTranslationsMutation(
        $id: BigInt!
        $input: UpdateCategoryGroupNewsTranslationsInput!
    ) {
        updateCategoryGroupNewsTranslations(id: $id, input: $input) {
            id
            category_group_news_id
            locale
            name
            description
            title_2
        }
    }
`;

export const Loading = () => <div>Loading...</div>;

export const Failure = ({ error }) => (
    <div className="rw-cell-error">{error?.message}</div>
);

export const Success = ({ categoryGroupNewsTranslations }) => {
    const [updateCategoryGroupNewsTranslations, { loading, error }] =
        useMutation(UPDATE_CATEGORY_GROUP_NEWS_TRANSLATIONS_MUTATION, {
            onCompleted: () => {
                toast.success('CategoryGroupNewsTranslations updated');
                navigate(routes.categoryGroupNewsTranslationses());
            },
            onError: (error) => {
                toast.error(error.message);
            }
        });

    const onSave = (input, id) => {
        updateCategoryGroupNewsTranslations({ variables: { id, input } });
    };

    return (
        <div className="rw-segment">
            <header className="rw-segment-header">
                <h2 className="rw-heading rw-heading-secondary">
                    Edit CategoryGroupNewsTranslations{' '}
                    {categoryGroupNewsTranslations?.id}
                </h2>
            </header>
            <div className="rw-segment-main">
                <CategoryGroupNewsTranslationsForm
                    categoryGroupNewsTranslations={
                        categoryGroupNewsTranslations
                    }
                    onSave={onSave}
                    error={error}
                    loading={loading}
                />
            </div>
        </div>
    );
};
