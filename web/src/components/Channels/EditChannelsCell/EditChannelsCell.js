import { navigate, routes } from '@redwoodjs/router';

import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';

import ChannelsForm from 'src/components/Channels/ChannelsForm';

export const QUERY = gql`
    query EditChannelsById($id: BigInt!) {
        channels: channels(id: $id) {
            id
            slug
            is_active
            created_at
            updated_at
        }
    }
`;
const UPDATE_CHANNELS_MUTATION = gql`
    mutation UpdateChannelsMutation(
        $id: BigInt!
        $input: UpdateChannelsInput!
    ) {
        updateChannels(id: $id, input: $input) {
            id
            slug
            is_active
            created_at
            updated_at
        }
    }
`;

export const Loading = () => <div>Loading...</div>;

export const Failure = ({ error }) => (
    <div className="rw-cell-error">{error?.message}</div>
);

export const Success = ({ channels }) => {
    const [updateChannels, { loading, error }] = useMutation(
        UPDATE_CHANNELS_MUTATION,
        {
            onCompleted: () => {
                toast.success('Channels updated');
                navigate(routes.channelses());
            },
            onError: (error) => {
                toast.error(error.message);
            }
        }
    );

    const onSave = (input, id) => {
        updateChannels({ variables: { id, input } });
    };

    return (
        <div className="rw-segment">
            <header className="rw-segment-header">
                <h2 className="rw-heading rw-heading-secondary">
                    Edit Channels {channels?.id}
                </h2>
            </header>
            <div className="rw-segment-main">
                <ChannelsForm
                    channels={channels}
                    onSave={onSave}
                    error={error}
                    loading={loading}
                />
            </div>
        </div>
    );
};
