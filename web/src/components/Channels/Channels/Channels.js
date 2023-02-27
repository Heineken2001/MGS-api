import { Link, routes, navigate } from '@redwoodjs/router';
import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';

import { checkboxInputTag, timeTag } from 'src/lib/formatters';

const DELETE_CHANNELS_MUTATION = gql`
    mutation DeleteChannelsMutation($id: BigInt!) {
        deleteChannels(id: $id) {
            id
        }
    }
`;

const Channels = ({ channels }) => {
    const [deleteChannels] = useMutation(DELETE_CHANNELS_MUTATION, {
        onCompleted: () => {
            toast.success('Channels deleted');
            navigate(routes.channelses());
        },
        onError: (error) => {
            toast.error(error.message);
        }
    });

    const onDeleteClick = (id) => {
        if (confirm('Are you sure you want to delete channels ' + id + '?')) {
            deleteChannels({ variables: { id } });
        }
    };

    return (
        <>
            <div className="rw-segment">
                <header className="rw-segment-header">
                    <h2 className="rw-heading rw-heading-secondary">
                        Channels {channels.id} Detail
                    </h2>
                </header>
                <table className="rw-table">
                    <tbody>
                        <tr>
                            <th>Id</th>
                            <td>{channels.id}</td>
                        </tr>
                        <tr>
                            <th>Slug</th>
                            <td>{channels.slug}</td>
                        </tr>
                        <tr>
                            <th>Is active</th>
                            <td>{checkboxInputTag(channels.is_active)}</td>
                        </tr>
                        <tr>
                            <th>Created at</th>
                            <td>{timeTag(channels.created_at)}</td>
                        </tr>
                        <tr>
                            <th>Updated at</th>
                            <td>{timeTag(channels.updated_at)}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <nav className="rw-button-group">
                <Link
                    to={routes.editChannels({ id: channels.id })}
                    className="rw-button rw-button-blue"
                >
                    Edit
                </Link>
                <button
                    type="button"
                    className="rw-button rw-button-red"
                    onClick={() => onDeleteClick(channels.id)}
                >
                    Delete
                </button>
            </nav>
        </>
    );
};

export default Channels;
