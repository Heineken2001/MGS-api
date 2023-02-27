import { Link, routes } from '@redwoodjs/router';
import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';

import { QUERY } from 'src/components/Channels/ChannelsesCell';
import { checkboxInputTag, timeTag, truncate } from 'src/lib/formatters';

const DELETE_CHANNELS_MUTATION = gql`
    mutation DeleteChannelsMutation($id: BigInt!) {
        deleteChannels(id: $id) {
            id
        }
    }
`;

const ChannelsesList = ({ channelses }) => {
    const [deleteChannels] = useMutation(DELETE_CHANNELS_MUTATION, {
        onCompleted: () => {
            toast.success('Channels deleted');
        },
        onError: (error) => {
            toast.error(error.message);
        },
        // This refetches the query on the list page. Read more about other ways to
        // update the cache over here:
        // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
        refetchQueries: [{ query: QUERY }],
        awaitRefetchQueries: true
    });

    const onDeleteClick = (id) => {
        if (confirm('Are you sure you want to delete channels ' + id + '?')) {
            deleteChannels({ variables: { id } });
        }
    };

    return (
        <div className="rw-segment rw-table-wrapper-responsive">
            <table className="rw-table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Slug</th>
                        <th>Is active</th>
                        <th>Created at</th>
                        <th>Updated at</th>
                        <th>&nbsp;</th>
                    </tr>
                </thead>
                <tbody>
                    {channelses.map((channels) => (
                        <tr key={channels.id}>
                            <td>{truncate(channels.id)}</td>
                            <td>{truncate(channels.slug)}</td>
                            <td>{checkboxInputTag(channels.is_active)}</td>
                            <td>{timeTag(channels.created_at)}</td>
                            <td>{timeTag(channels.updated_at)}</td>
                            <td>
                                <nav className="rw-table-actions">
                                    <Link
                                        to={routes.channels({
                                            id: channels.id
                                        })}
                                        title={
                                            'Show channels ' +
                                            channels.id +
                                            ' detail'
                                        }
                                        className="rw-button rw-button-small"
                                    >
                                        Show
                                    </Link>
                                    <Link
                                        to={routes.editChannels({
                                            id: channels.id
                                        })}
                                        title={'Edit channels ' + channels.id}
                                        className="rw-button rw-button-small rw-button-blue"
                                    >
                                        Edit
                                    </Link>
                                    <button
                                        type="button"
                                        title={'Delete channels ' + channels.id}
                                        className="rw-button rw-button-small rw-button-red"
                                        onClick={() =>
                                            onDeleteClick(channels.id)
                                        }
                                    >
                                        Delete
                                    </button>
                                </nav>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ChannelsesList;
