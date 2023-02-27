import { Link, routes } from '@redwoodjs/router';
import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';

import { QUERY } from 'src/components/ChannelTranslations/ChannelTranslationsesCell';
import { truncate } from 'src/lib/formatters';

const DELETE_CHANNEL_TRANSLATIONS_MUTATION = gql`
    mutation DeleteChannelTranslationsMutation($id: BigInt!) {
        deleteChannelTranslations(id: $id) {
            id
        }
    }
`;

const ChannelTranslationsesList = ({ channelTranslationses }) => {
    const [deleteChannelTranslations] = useMutation(
        DELETE_CHANNEL_TRANSLATIONS_MUTATION,
        {
            onCompleted: () => {
                toast.success('ChannelTranslations deleted');
            },
            onError: (error) => {
                toast.error(error.message);
            },
            // This refetches the query on the list page. Read more about other ways to
            // update the cache over here:
            // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
            refetchQueries: [{ query: QUERY }],
            awaitRefetchQueries: true
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
        <div className="rw-segment rw-table-wrapper-responsive">
            <table className="rw-table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Channel id</th>
                        <th>Locale</th>
                        <th>Name</th>
                        <th>Body</th>
                        <th>&nbsp;</th>
                    </tr>
                </thead>
                <tbody>
                    {channelTranslationses.map((channelTranslations) => (
                        <tr key={channelTranslations.id}>
                            <td>{truncate(channelTranslations.id)}</td>
                            <td>{truncate(channelTranslations.channel_id)}</td>
                            <td>{truncate(channelTranslations.locale)}</td>
                            <td>{truncate(channelTranslations.name)}</td>
                            <td>{truncate(channelTranslations.body)}</td>
                            <td>
                                <nav className="rw-table-actions">
                                    <Link
                                        to={routes.channelTranslations({
                                            id: channelTranslations.id
                                        })}
                                        title={
                                            'Show channelTranslations ' +
                                            channelTranslations.id +
                                            ' detail'
                                        }
                                        className="rw-button rw-button-small"
                                    >
                                        Show
                                    </Link>
                                    <Link
                                        to={routes.editChannelTranslations({
                                            id: channelTranslations.id
                                        })}
                                        title={
                                            'Edit channelTranslations ' +
                                            channelTranslations.id
                                        }
                                        className="rw-button rw-button-small rw-button-blue"
                                    >
                                        Edit
                                    </Link>
                                    <button
                                        type="button"
                                        title={
                                            'Delete channelTranslations ' +
                                            channelTranslations.id
                                        }
                                        className="rw-button rw-button-small rw-button-red"
                                        onClick={() =>
                                            onDeleteClick(
                                                channelTranslations.id
                                            )
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

export default ChannelTranslationsesList;
