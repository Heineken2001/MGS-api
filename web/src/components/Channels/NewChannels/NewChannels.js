import { navigate, routes } from '@redwoodjs/router';
import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';

import ChannelsForm from 'src/components/Channels/ChannelsForm';

const CREATE_CHANNELS_MUTATION = gql`
    mutation CreateChannelsMutation($input: CreateChannelsInput!) {
        createChannels(input: $input) {
            id
        }
    }
`;

const NewChannels = () => {
    const [createChannels, { loading, error }] = useMutation(
        CREATE_CHANNELS_MUTATION,
        {
            onCompleted: () => {
                toast.success('Channels created');
                navigate(routes.channelses());
            },
            onError: (error) => {
                toast.error(error.message);
            }
        }
    );

    const onSave = (input) => {
        createChannels({ variables: { input } });
    };

    return (
        <div className="rw-segment">
            <header className="rw-segment-header">
                <h2 className="rw-heading rw-heading-secondary">
                    New Channels
                </h2>
            </header>
            <div className="rw-segment-main">
                <ChannelsForm onSave={onSave} loading={loading} error={error} />
            </div>
        </div>
    );
};

export default NewChannels;
