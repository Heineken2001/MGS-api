import { navigate, routes } from '@redwoodjs/router';
import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';

import CategoriesForm from 'src/components/Categories/CategoriesForm';

const CREATE_CATEGORIES_MUTATION = gql`
    mutation CreateCategoriesMutation($input: CreateCategoriesInput!) {
        createCategories(input: $input) {
            id
        }
    }
`;

const NewCategories = () => {
    const [createCategories, { loading, error }] = useMutation(
        CREATE_CATEGORIES_MUTATION,
        {
            onCompleted: () => {
                toast.success('Categories created');
                navigate(routes.categorieses());
            },
            onError: (error) => {
                toast.error(error.message);
            }
        }
    );

    const onSave = (input) => {
        createCategories({ variables: { input } });
    };

    return (
        <div className="rw-segment">
            <header className="rw-segment-header">
                <h2 className="rw-heading rw-heading-secondary">
                    New Categories
                </h2>
            </header>
            <div className="rw-segment-main">
                <CategoriesForm
                    onSave={onSave}
                    loading={loading}
                    error={error}
                />
            </div>
        </div>
    );
};

export default NewCategories;
