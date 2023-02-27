import { navigate, routes } from '@redwoodjs/router';

import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';

import ChannelTranslationsForm from 'src/components/ChannelTranslations/ChannelTranslationsForm';

export const QUERY = gql`
    query EditChannelTranslationsById($id: BigInt!) {
        channelTranslations: channelTranslations(id: $id) {
            id
            channel_id
            locale
            name
            body
        }
    }
`;
const UPDATE_CHANNEL_TRANSLATIONS_MUTATION = gql`
    mutation UpdateChannelTranslationsMutation(
        $id: BigInt!
        $input: UpdateChannelTranslationsInput!
    ) {
        updateChannelTranslations(id: $id, input: $input) {
            id
            channel_id
            locale
            name
            body
        }
    }
`;

export const Loading = () => <div>Loading...</div>;

export const Failure = ({ error }) => (
    <div className="rw-cell-error">{error?.message}</div>
);

export const Success = ({ channelTranslations }) => {
    const [updateChannelTranslations, { loading, error }] = useMutation(
        UPDATE_CHANNEL_TRANSLATIONS_MUTATION,
        {
            onCompleted: () => {
                toast.success('ChannelTranslations updated');
                navigate(routes.channelTranslationses());
            },
            onError: (error) => {
                toast.error(error.message);
            }
        }
    );

    const onSave = (input, id) => {
        updateChannelTranslations({ variables: { id, input } });
    };

    return (
        <div className="rw-segment">
            <header className="rw-segment-header">
                <h2 className="rw-heading rw-heading-secondary">
                    Edit ChannelTranslations {channelTranslations?.id}
                </h2>
            </header>
            <div className="rw-segment-main">
                <ChannelTranslationsForm
                    channelTranslations={channelTranslations}
                    onSave={onSave}
                    error={error}
                    loading={loading}
                />
            </div>
        </div>
    );
};
