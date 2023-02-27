import { navigate, routes } from '@redwoodjs/router';
import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';

import CategoryGroupNewsTranslationsForm from 'src/components/CategoryGroupNewsTranslations/CategoryGroupNewsTranslationsForm';

const CREATE_CATEGORY_GROUP_NEWS_TRANSLATIONS_MUTATION = gql`
    mutation CreateCategoryGroupNewsTranslationsMutation(
        $input: CreateCategoryGroupNewsTranslationsInput!
    ) {
        createCategoryGroupNewsTranslations(input: $input) {
            id
        }
    }
`;

const NewCategoryGroupNewsTranslations = () => {
    const [createCategoryGroupNewsTranslations, { loading, error }] =
        useMutation(CREATE_CATEGORY_GROUP_NEWS_TRANSLATIONS_MUTATION, {
            onCompleted: () => {
                toast.success('CategoryGroupNewsTranslations created');
                navigate(routes.categoryGroupNewsTranslationses());
            },
            onError: (error) => {
                toast.error(error.message);
            }
        });

    const onSave = (input) => {
        createCategoryGroupNewsTranslations({ variables: { input } });
    };

    return (
        <div className="rw-segment">
            <header className="rw-segment-header">
                <h2 className="rw-heading rw-heading-secondary">
                    New CategoryGroupNewsTranslations
                </h2>
            </header>
            <div className="rw-segment-main">
                <CategoryGroupNewsTranslationsForm
                    onSave={onSave}
                    loading={loading}
                    error={error}
                />
            </div>
        </div>
    );
};

export default NewCategoryGroupNewsTranslations;
