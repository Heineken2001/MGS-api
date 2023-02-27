import CategoryGroupNews from 'src/components/CategoryGroupNews/CategoryGroupNews';

export const QUERY = gql`
    query FindCategoryGroupNewsById($id: BigInt!) {
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

export const Loading = () => <div>Loading...</div>;

export const Empty = () => <div>CategoryGroupNews not found</div>;

export const Failure = ({ error }) => (
    <div className="rw-cell-error">{error?.message}</div>
);

export const Success = ({ categoryGroupNews }) => {
    return <CategoryGroupNews categoryGroupNews={categoryGroupNews} />;
};
