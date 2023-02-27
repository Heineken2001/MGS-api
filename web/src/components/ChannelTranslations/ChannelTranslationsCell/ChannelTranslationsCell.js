import ChannelTranslations from 'src/components/ChannelTranslations/ChannelTranslations';

export const QUERY = gql`
    query FindChannelTranslationsById($id: BigInt!) {
        channelTranslations: channelTranslations(id: $id) {
            id
            channel_id
            locale
            name
            body
        }
    }
`;

export const Loading = () => <div>Loading...</div>;

export const Empty = () => <div>ChannelTranslations not found</div>;

export const Failure = ({ error }) => (
    <div className="rw-cell-error">{error?.message}</div>
);

export const Success = ({ channelTranslations }) => {
    return <ChannelTranslations channelTranslations={channelTranslations} />;
};
