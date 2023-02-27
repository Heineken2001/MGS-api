import Brands from 'src/components/Brands/Brands';

export const QUERY = gql`
    query FindBrandsById($id: BigInt!) {
        brands: brands(id: $id) {
            id
            slug
            is_active
            created_at
            updated_at
        }
    }
`;

export const Loading = () => <div>Loading...</div>;

export const Empty = () => <div>Brands not found</div>;

export const Failure = ({ error }) => (
    <div className="rw-cell-error">{error?.message}</div>
);

export const Success = ({ brands }) => {
    return <Brands brands={brands} />;
};
