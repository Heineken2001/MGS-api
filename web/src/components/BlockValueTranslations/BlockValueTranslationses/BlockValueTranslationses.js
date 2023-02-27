import { Link, routes } from '@redwoodjs/router';
import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';

import { QUERY } from 'src/components/BlockValueTranslations/BlockValueTranslationsesCell';
import { timeTag, truncate } from 'src/lib/formatters';

const DELETE_BLOCK_VALUE_TRANSLATIONS_MUTATION = gql`
    mutation DeleteBlockValueTranslationsMutation($id: BigInt!) {
        deleteBlockValueTranslations(id: $id) {
            id
        }
    }
`;

const BlockValueTranslationsesList = ({ blockValueTranslationses }) => {
    const [deleteBlockValueTranslations] = useMutation(
        DELETE_BLOCK_VALUE_TRANSLATIONS_MUTATION,
        {
            onCompleted: () => {
                toast.success('BlockValueTranslations deleted');
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
                'Are you sure you want to delete blockValueTranslations ' +
                    id +
                    '?'
            )
        ) {
            deleteBlockValueTranslations({ variables: { id } });
        }
    };

    return (
        <div className="rw-segment rw-table-wrapper-responsive">
            <table className="rw-table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Block value id</th>
                        <th>Locale</th>
                        <th>Title</th>
                        <th>Created at</th>
                        <th>Updated at</th>
                        <th>&nbsp;</th>
                    </tr>
                </thead>
                <tbody>
                    {blockValueTranslationses.map((blockValueTranslations) => (
                        <tr key={blockValueTranslations.id}>
                            <td>{truncate(blockValueTranslations.id)}</td>
                            <td>
                                {truncate(
                                    blockValueTranslations.block_value_id
                                )}
                            </td>
                            <td>{truncate(blockValueTranslations.locale)}</td>
                            <td>{truncate(blockValueTranslations.title)}</td>
                            <td>
                                {timeTag(blockValueTranslations.created_at)}
                            </td>
                            <td>
                                {timeTag(blockValueTranslations.updated_at)}
                            </td>
                            <td>
                                <nav className="rw-table-actions">
                                    <Link
                                        to={routes.blockValueTranslations({
                                            id: blockValueTranslations.id
                                        })}
                                        title={
                                            'Show blockValueTranslations ' +
                                            blockValueTranslations.id +
                                            ' detail'
                                        }
                                        className="rw-button rw-button-small"
                                    >
                                        Show
                                    </Link>
                                    <Link
                                        to={routes.editBlockValueTranslations({
                                            id: blockValueTranslations.id
                                        })}
                                        title={
                                            'Edit blockValueTranslations ' +
                                            blockValueTranslations.id
                                        }
                                        className="rw-button rw-button-small rw-button-blue"
                                    >
                                        Edit
                                    </Link>
                                    <button
                                        type="button"
                                        title={
                                            'Delete blockValueTranslations ' +
                                            blockValueTranslations.id
                                        }
                                        className="rw-button rw-button-small rw-button-red"
                                        onClick={() =>
                                            onDeleteClick(
                                                blockValueTranslations.id
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

export default BlockValueTranslationsesList;
