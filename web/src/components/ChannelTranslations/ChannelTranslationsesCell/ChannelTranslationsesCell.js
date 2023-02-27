import { Link, routes } from '@redwoodjs/router';

import ChannelTranslationses from 'src/components/ChannelTranslations/ChannelTranslationses';

export const QUERY = gql`
    query FindChannelTranslationses {
        channelTranslationses {
            id
            channel_id
            locale
            name
            body
        }
    }
`;

export const Loading = () => <div>Loading...</div>;

export const Empty = () => {
    return (
        <div className="rw-text-center">
            {'No channelTranslationses yet. '}
            <Link to={routes.newChannelTranslations()} className="rw-link">
                {'Create one?'}
            </Link>
        </div>
    );
};

export const Failure = ({ error }) => (
    <div className="rw-cell-error">{error?.message}</div>
);

export const Success = ({ channelTranslationses }) => {
    return (
        <ChannelTranslationses channelTranslationses={channelTranslationses} />
    );
};
