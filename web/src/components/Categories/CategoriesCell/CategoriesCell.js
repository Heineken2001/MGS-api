import Categories from 'src/components/Categories/Categories';

export const QUERY = gql`
    query FindCategoriesById($id: BigInt!) {
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

export const Loading = () => <div>Loading...</div>;

export const Empty = () => <div>Categories not found</div>;

export const Failure = ({ error }) => (
    <div className="rw-cell-error">{error?.message}</div>
);

export const Success = ({ categories }) => {
    return <Categories categories={categories} />;
};
