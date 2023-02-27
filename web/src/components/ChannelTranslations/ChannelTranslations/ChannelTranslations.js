import { Link, routes, navigate } from '@redwoodjs/router';
import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';

import 'src/lib/formatters';

const DELETE_CHANNEL_TRANSLATIONS_MUTATION = gql`
    mutation DeleteChannelTranslationsMutation($id: BigInt!) {
        deleteChannelTranslations(id: $id) {
            id
        }
    }
`;

const ChannelTranslations = ({ channelTranslations }) => {
    const [deleteChannelTranslations] = useMutation(
        DELETE_CHANNEL_TRANSLATIONS_MUTATION,
        {
            onCompleted: () => {
                toast.success('ChannelTranslations deleted');
                navigate(routes.channelTranslationses());
            },
            onError: (error) => {
                toast.error(error.message);
            }
        }
    );

    const onDeleteClick = (id) => {
        if (
            confirm(
                'Are you sure you want to delete channelTranslations ' +
                    id +
                    '?'
            )
        ) {
            deleteChannelTranslations({ variables: { id } });
        }
    };

    return (
        <>
            <div className="rw-segment">
                <header className="rw-segment-header">
                    <h2 className="rw-heading rw-heading-secondary">
                        ChannelTranslations {channelTranslations.id} Detail
                    </h2>
                </header>
                <table className="rw-table">
                    <tbody>
                        <tr>
                            <th>Id</th>
                            <td>{channelTranslations.id}</td>
                        </tr>
                        <tr>
                            <th>Channel id</th>
                            <td>{channelTranslations.channel_id}</td>
                        </tr>
                        <tr>
                            <th>Locale</th>
                            <td>{channelTranslations.locale}</td>
                        </tr>
                        <tr>
                            <th>Name</th>
                            <td>{channelTranslations.name}</td>
                        </tr>
                        <tr>
                            <th>Body</th>
                            <td>{channelTranslations.body}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <nav className="rw-button-group">
                <Link
                    to={routes.editChannelTranslations({
                        id: channelTranslations.id
                    })}
                    className="rw-button rw-button-blue"
                >
                    Edit
                </Link>
                <button
                    type="button"
                    className="rw-button rw-button-red"
                    onClick={() => onDeleteClick(channelTranslations.id)}
                >
                    Delete
                </button>
            </nav>
        </>
    );
};

export default ChannelTranslations;
