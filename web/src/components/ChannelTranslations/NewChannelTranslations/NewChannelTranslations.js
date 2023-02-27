import { navigate, routes } from '@redwoodjs/router';
import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';

import ChannelTranslationsForm from 'src/components/ChannelTranslations/ChannelTranslationsForm';

const CREATE_CHANNEL_TRANSLATIONS_MUTATION = gql`
    mutation CreateChannelTranslationsMutation(
        $input: CreateChannelTranslationsInput!
    ) {
        createChannelTranslations(input: $input) {
            id
        }
    }
`;

const NewChannelTranslations = () => {
    const [createChannelTranslations, { loading, error }] = useMutation(
        CREATE_CHANNEL_TRANSLATIONS_MUTATION,
        {
            onCompleted: () => {
                toast.success('ChannelTranslations created');
                navigate(routes.channelTranslationses());
            },
            onError: (error) => {
                toast.error(error.message);
            }
        }
    );

    const onSave = (input) => {
        createChannelTranslations({ variables: { input } });
    };

    return (
        <div className="rw-segment">
            <header className="rw-segment-header">
                <h2 className="rw-heading rw-heading-secondary">
                    New ChannelTranslations
                </h2>
            </header>
            <div className="rw-segment-main">
                <ChannelTranslationsForm
                    onSave={onSave}
                    loading={loading}
                    error={error}
                />
            </div>
        </div>
    );
};

export default NewChannelTranslations;
