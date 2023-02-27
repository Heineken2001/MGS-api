import Blocks from 'src/components/Blocks/Blocks';

export const QUERY = gql`
    query FindBlocksById($id: BigInt!) {
        blocks: blocks(id: $id) {
            id
            is_active
            html
            scss
            image_feature
            mobile
            amp
            created_at
            updated_at
            deleted_at
        }
    }
`;

export const Loading = () => <div>Loading...</div>;

export const Empty = () => <div>Blocks not found</div>;

export const Failure = ({ error }) => (
    <div className="rw-cell-error">{error?.message}</div>
);

export const Success = ({ blocks }) => {
    return <Blocks blocks={blocks} />;
};
