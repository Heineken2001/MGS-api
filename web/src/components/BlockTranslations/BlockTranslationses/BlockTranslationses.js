import { Link, routes } from '@redwoodjs/router';
import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';

import { QUERY } from 'src/components/BlockTranslations/BlockTranslationsesCell';
import { timeTag, truncate } from 'src/lib/formatters';

const DELETE_BLOCK_TRANSLATIONS_MUTATION = gql`
    mutation DeleteBlockTranslationsMutation($id: BigInt!) {
        deleteBlockTranslations(id: $id) {
            id
        }
    }
`;

const BlockTranslationsesList = ({ blockTranslationses }) => {
    const [deleteBlockTranslations] = useMutation(
        DELETE_BLOCK_TRANSLATIONS_MUTATION,
        {
            onCompleted: () => {
                toast.success('BlockTranslations deleted');
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
                'Are you sure you want to delete blockTranslations ' + id + '?'
            )
        ) {
            deleteBlockTranslations({ variables: { id } });
        }
    };

    return (
        <div className="rw-segment rw-table-wrapper-responsive">
            <table className="rw-table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Block id</th>
                        <th>Locale</th>
                        <th>Name</th>
                        <th>Created at</th>
                        <th>Updated at</th>
                        <th>&nbsp;</th>
                    </tr>
                </thead>
                <tbody>
                    {blockTranslationses.map((blockTranslations) => (
                        <tr key={blockTranslations.id}>
                            <td>{truncate(blockTranslations.id)}</td>
                            <td>{truncate(blockTranslations.block_id)}</td>
                            <td>{truncate(blockTranslations.locale)}</td>
                            <td>{truncate(blockTranslations.name)}</td>
                            <td>{timeTag(blockTranslations.created_at)}</td>
                            <td>{timeTag(blockTranslations.updated_at)}</td>
                            <td>
                                <nav className="rw-table-actions">
                                    <Link
                                        to={routes.blockTranslations({
                                            id: blockTranslations.id
                                        })}
                                        title={
                                            'Show blockTranslations ' +
                                            blockTranslations.id +
                                            ' detail'
                                        }
                                        className="rw-button rw-button-small"
                                    >
                                        Show
                                    </Link>
                                    <Link
                                        to={routes.editBlockTranslations({
                                            id: blockTranslations.id
                                        })}
                                        title={
                                            'Edit blockTranslations ' +
                                            blockTranslations.id
                                        }
                                        className="rw-button rw-button-small rw-button-blue"
                                    >
                                        Edit
                                    </Link>
                                    <button
                                        type="button"
                                        title={
                                            'Delete blockTranslations ' +
                                            blockTranslations.id
                                        }
                                        className="rw-button rw-button-small rw-button-red"
                                        onClick={() =>
                                            onDeleteClick(blockTranslations.id)
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

export default BlockTranslationsesList;
