import { Link, routes } from '@redwoodjs/router';

import Channelses from 'src/components/Channels/Channelses';

export const QUERY = gql`
    query FindChannelses {
        channelses {
            id
            slug
            is_active
            created_at
            updated_at
        }
    }
`;

export const Loading = () => <div>Loading...</div>;

export const Empty = () => {
    return (
        <div className="rw-text-center">
            {'No channelses yet. '}
            <Link to={routes.newChannels()} className="rw-link">
                {'Create one?'}
            </Link>
        </div>
    );
};

export const Failure = ({ error }) => (
    <div className="rw-cell-error">{error?.message}</div>
);

export const Success = ({ channelses }) => {
    return <Channelses channelses={channelses} />;
};
