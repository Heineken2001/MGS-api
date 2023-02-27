import Collections from 'src/components/Collections/Collections';

export const QUERY = gql`
    query FindCollectionsById($id: BigInt!) {
        collections: collections(id: $id) {
            id
            target
            conditions
            type
            is_active
            deleted_at
            created_at
            updated_at
            post_type
        }
    }
`;

export const Loading = () => <div>Loading...</div>;

export const Empty = () => <div>Collections not found</div>;

export const Failure = ({ error }) => (
    <div className="rw-cell-error">{error?.message}</div>
);

export const Success = ({ collections }) => {
    return <Collections collections={collections} />;
};
