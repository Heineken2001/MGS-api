import Channels from 'src/components/Channels/Channels';

export const QUERY = gql`
    query FindChannelsById($id: BigInt!) {
        channels: channels(id: $id) {
            id
            slug
            is_active
            created_at
            updated_at
        }
    }
`;

export const Loading = () => <div>Loading...</div>;

export const Empty = () => <div>Channels not found</div>;

export const Failure = ({ error }) => (
    <div className="rw-cell-error">{error?.message}</div>
);

export const Success = ({ channels }) => {
    return <Channels channels={channels} />;
};
