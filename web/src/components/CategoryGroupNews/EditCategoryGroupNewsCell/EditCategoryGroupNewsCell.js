import { navigate, routes } from '@redwoodjs/router';

import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';

import CategoryGroupNewsForm from 'src/components/CategoryGroupNews/CategoryGroupNewsForm';

export const QUERY = gql`
    query EditCategoryGroupNewsById($id: BigInt!) {
        categoryGroupNews: categoryGroupNews(id: $id) {
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
const UPDATE_CATEGORY_GROUP_NEWS_MUTATION = gql`
    mutation UpdateCategoryGroupNewsMutation(
        $id: BigInt!
        $input: UpdateCategoryGroupNewsInput!
    ) {
        updateCategoryGroupNews(id: $id, input: $input) {
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

export const Success = ({ categoryGroupNews }) => {
    const [updateCategoryGroupNews, { loading, error }] = useMutation(
        UPDATE_CATEGORY_GROUP_NEWS_MUTATION,
        {
            onCompleted: () => {
                toast.success('CategoryGroupNews updated');
                navigate(routes.categoryGroupNewses());
            },
            onError: (error) => {
                toast.error(error.message);
            }
        }
    );

    const onSave = (input, id) => {
        updateCategoryGroupNews({ variables: { id, input } });
    };

    return (
        <div className="rw-segment">
            <header className="rw-segment-header">
                <h2 className="rw-heading rw-heading-secondary">
                    Edit CategoryGroupNews {categoryGroupNews?.id}
                </h2>
            </header>
            <div className="rw-segment-main">
                <CategoryGroupNewsForm
                    categoryGroupNews={categoryGroupNews}
                    onSave={onSave}
                    error={error}
                    loading={loading}
                />
            </div>
        </div>
    );
};
