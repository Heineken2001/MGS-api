import { navigate, routes } from '@redwoodjs/router';

import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';

import CategoryNewsForm from 'src/components/CategoryNews/CategoryNewsForm';

export const QUERY = gql`
    query EditCategoryNewsById($id: BigInt!) {
        categoryNews: categoryNews(id: $id) {
            id
            parent_id
            slug
            position
            is_searchable
            is_active
            created_at
            updated_at
        }
    }
`;
const UPDATE_CATEGORY_NEWS_MUTATION = gql`
    mutation UpdateCategoryNewsMutation(
        $id: BigInt!
        $input: UpdateCategoryNewsInput!
    ) {
        updateCategoryNews(id: $id, input: $input) {
            id
            parent_id
            slug
            position
            is_searchable
            is_active
            created_at
            updated_at
        }
    }
`;

export const Loading = () => <div>Loading...</div>;

export const Failure = ({ error }) => (
    <div className="rw-cell-error">{error?.message}</div>
);

export const Success = ({ categoryNews }) => {
    const [updateCategoryNews, { loading, error }] = useMutation(
        UPDATE_CATEGORY_NEWS_MUTATION,
        {
            onCompleted: () => {
                toast.success('CategoryNews updated');
                navigate(routes.categoryNewses());
            },
            onError: (error) => {
                toast.error(error.message);
            }
        }
    );

    const onSave = (input, id) => {
        updateCategoryNews({ variables: { id, input } });
    };

    return (
        <div className="rw-segment">
            <header className="rw-segment-header">
                <h2 className="rw-heading rw-heading-secondary">
                    Edit CategoryNews {categoryNews?.id}
                </h2>
            </header>
            <div className="rw-segment-main">
                <CategoryNewsForm
                    categoryNews={categoryNews}
                    onSave={onSave}
                    error={error}
                    loading={loading}
                />
            </div>
        </div>
    );
};
