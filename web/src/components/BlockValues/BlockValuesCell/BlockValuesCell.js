import BlockValues from 'src/components/BlockValues/BlockValues';

export const QUERY = gql`
    query FindBlockValuesById($id: BigInt!) {
        blockValues: blockValues(id: $id) {
            id
            code
            block_id
            position
            key
            type
            created_at
            updated_at
        }
    }
`;

export const Loading = () => <div>Loading...</div>;

export const Empty = () => <div>BlockValues not found</div>;

export const Failure = ({ error }) => (
    <div className="rw-cell-error">{error?.message}</div>
);

export const Success = ({ blockValues }) => {
    return <BlockValues blockValues={blockValues} />;
};
