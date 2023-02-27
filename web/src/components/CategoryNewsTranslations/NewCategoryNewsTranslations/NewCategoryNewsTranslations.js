import { navigate, routes } from '@redwoodjs/router';
import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';

import CategoryNewsTranslationsForm from 'src/components/CategoryNewsTranslations/CategoryNewsTranslationsForm';

const CREATE_CATEGORY_NEWS_TRANSLATIONS_MUTATION = gql`
    mutation CreateCategoryNewsTranslationsMutation(
        $input: CreateCategoryNewsTranslationsInput!
    ) {
        createCategoryNewsTranslations(input: $input) {
            id
        }
    }
`;

const NewCategoryNewsTranslations = () => {
    const [createCategoryNewsTranslations, { loading, error }] = useMutation(
        CREATE_CATEGORY_NEWS_TRANSLATIONS_MUTATION,
        {
            onCompleted: () => {
                toast.success('CategoryNewsTranslations created');
                navigate(routes.categoryNewsTranslationses());
            },
            onError: (error) => {
                toast.error(error.message);
            }
        }
    );

    const onSave = (input) => {
        createCategoryNewsTranslations({ variables: { input } });
    };

    return (
        <div className="rw-segment">
            <header className="rw-segment-header">
                <h2 className="rw-heading rw-heading-secondary">
                    New CategoryNewsTranslations
                </h2>
            </header>
            <div className="rw-segment-main">
                <CategoryNewsTranslationsForm
                    onSave={onSave}
                    loading={loading}
                    error={error}
                />
            </div>
        </div>
    );
};

export default NewCategoryNewsTranslations;
