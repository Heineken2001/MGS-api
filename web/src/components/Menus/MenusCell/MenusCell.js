import Menus from 'src/components/Menus/Menus';

export const QUERY = gql`
    query FindMenusById($id: BigInt!) {
        menus: menus(id: $id) {
            id
            is_active
            created_at
            updated_at
            position
        }
    }
`;

export const Loading = () => <div>Loading...</div>;

export const Empty = () => <div>Menus not found</div>;

export const Failure = ({ error }) => (
    <div className="rw-cell-error">{error?.message}</div>
);

export const Success = ({ menus }) => {
    return <Menus menus={menus} />;
};
