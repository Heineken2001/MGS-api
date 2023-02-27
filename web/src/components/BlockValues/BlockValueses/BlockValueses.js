import { Link, routes } from '@redwoodjs/router';
import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';

import { QUERY } from 'src/components/BlockValues/BlockValuesesCell';
import { timeTag, truncate } from 'src/lib/formatters';

const DELETE_BLOCK_VALUES_MUTATION = gql`
    mutation DeleteBlockValuesMutation($id: BigInt!) {
        deleteBlockValues(id: $id) {
            id
        }
    }
`;

const BlockValuesesList = ({ blockValueses }) => {
    const [deleteBlockValues] = useMutation(DELETE_BLOCK_VALUES_MUTATION, {
        onCompleted: () => {
            toast.success('BlockValues deleted');
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
        if (
            confirm('Are you sure you want to delete blockValues ' + id + '?')
        ) {
            deleteBlockValues({ variables: { id } });
        }
    };

    return (
        <div className="rw-segment rw-table-wrapper-responsive">
            <table className="rw-table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Code</th>
                        <th>Block id</th>
                        <th>Position</th>
                        <th>Key</th>
                        <th>Type</th>
                        <th>Created at</th>
                        <th>Updated at</th>
                        <th>&nbsp;</th>
                    </tr>
                </thead>
                <tbody>
                    {blockValueses.map((blockValues) => (
                        <tr key={blockValues.id}>
                            <td>{truncate(blockValues.id)}</td>
                            <td>{truncate(blockValues.code)}</td>
                            <td>{truncate(blockValues.block_id)}</td>
                            <td>{truncate(blockValues.position)}</td>
                            <td>{truncate(blockValues.key)}</td>
                            <td>{truncate(blockValues.type)}</td>
                            <td>{timeTag(blockValues.created_at)}</td>
                            <td>{timeTag(blockValues.updated_at)}</td>
                            <td>
                                <nav className="rw-table-actions">
                                    <Link
                                        to={routes.blockValues({
                                            id: blockValues.id
                                        })}
                                        title={
                                            'Show blockValues ' +
                                            blockValues.id +
                                            ' detail'
                                        }
                                        className="rw-button rw-button-small"
                                    >
                                        Show
                                    </Link>
                                    <Link
                                        to={routes.editBlockValues({
                                            id: blockValues.id
                                        })}
                                        title={
                                            'Edit blockValues ' + blockValues.id
                                        }
                                        className="rw-button rw-button-small rw-button-blue"
                                    >
                                        Edit
                                    </Link>
                                    <button
                                        type="button"
                                        title={
                                            'Delete blockValues ' +
                                            blockValues.id
                                        }
                                        className="rw-button rw-button-small rw-button-red"
                                        onClick={() =>
                                            onDeleteClick(blockValues.id)
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

export default BlockValuesesList;
