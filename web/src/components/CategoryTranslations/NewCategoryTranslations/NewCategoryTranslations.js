import { navigate, routes } from '@redwoodjs/router';
import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';

import CategoryTranslationsForm from 'src/components/CategoryTranslations/CategoryTranslationsForm';

const CREATE_CATEGORY_TRANSLATIONS_MUTATION = gql`
    mutation CreateCategoryTranslationsMutation(
        $input: CreateCategoryTranslationsInput!
    ) {
        createCategoryTranslations(input: $input) {
            id
        }
    }
`;

const NewCategoryTranslations = () => {
    const [createCategoryTranslations, { loading, error }] = useMutation(
        CREATE_CATEGORY_TRANSLATIONS_MUTATION,
        {
            onCompleted: () => {
                toast.success('CategoryTranslations created');
                navigate(routes.categoryTranslationses());
            },
            onError: (error) => {
                toast.error(error.message);
            }
        }
    );

    const onSave = (input) => {
        createCategoryTranslations({ variables: { input } });
    };

    return (
        <div className="rw-segment">
            <header className="rw-segment-header">
                <h2 className="rw-heading rw-heading-secondary">
                    New CategoryTranslations
                </h2>
            </header>
            <div className="rw-segment-main">
                <CategoryTranslationsForm
                    onSave={onSave}
                    loading={loading}
                    error={error}
                />
            </div>
        </div>
    );
};

export default NewCategoryTranslations;
