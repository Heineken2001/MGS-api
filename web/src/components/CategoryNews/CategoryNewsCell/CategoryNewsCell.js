import CategoryNews from 'src/components/CategoryNews/CategoryNews';

export const QUERY = gql`
    query FindCategoryNewsById($id: BigInt!) {
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

export const Loading = () => <div>Loading...</div>;

export const Empty = () => <div>CategoryNews not found</div>;

export const Failure = ({ error }) => (
    <div className="rw-cell-error">{error?.message}</div>
);

export const Success = ({ categoryNews }) => {
    return <CategoryNews categoryNews={categoryNews} />;
};
