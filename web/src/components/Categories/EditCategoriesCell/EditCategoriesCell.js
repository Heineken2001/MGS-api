import { navigate, routes } from '@redwoodjs/router';

import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';

import CategoriesForm from 'src/components/Categories/CategoriesForm';

export const QUERY = gql`
    query EditCategoriesById($id: BigInt!) {
        categories: categories(id: $id) {
            id
            parent_id
            position
            is_searchable
            is_active
            created_at
            updated_at
            type
        }
    }
`;
const UPDATE_CATEGORIES_MUTATION = gql`
    mutation UpdateCategoriesMutation(
        $id: BigInt!
        $input: UpdateCategoriesInput!
    ) {
        updateCategories(id: $id, input: $input) {
            id
            parent_id
            position
            is_searchable
            is_active
            created_at
            updated_at
            type
        }
    }
`;

export const Loading = () => <div>Loading...</div>;

export const Failure = ({ error }) => (
    <div className="rw-cell-error">{error?.message}</div>
);

export const Success = ({ categories }) => {
    const [updateCategories, { loading, error }] = useMutation(
        UPDATE_CATEGORIES_MUTATION,
        {
            onCompleted: () => {
                toast.success('Categories updated');
                navigate(routes.categorieses());
            },
            onError: (error) => {
                toast.error(error.message);
            }
        }
    );

    const onSave = (input, id) => {
        updateCategories({ variables: { id, input } });
    };

    return (
        <div className="rw-segment">
            <header className="rw-segment-header">
                <h2 className="rw-heading rw-heading-secondary">
                    Edit Categories {categories?.id}
                </h2>
            </header>
            <div className="rw-segment-main">
                <CategoriesForm
                    categories={categories}
                    onSave={onSave}
                    error={error}
                    loading={loading}
                />
            </div>
        </div>
    );
};
