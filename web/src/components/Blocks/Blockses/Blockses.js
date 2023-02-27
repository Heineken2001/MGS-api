import { Link, routes } from '@redwoodjs/router';
import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';

import { QUERY } from 'src/components/Blocks/BlocksesCell';
import { checkboxInputTag, timeTag, truncate } from 'src/lib/formatters';

const DELETE_BLOCKS_MUTATION = gql`
    mutation DeleteBlocksMutation($id: BigInt!) {
        deleteBlocks(id: $id) {
            id
        }
    }
`;

const BlocksesList = ({ blockses }) => {
    const [deleteBlocks] = useMutation(DELETE_BLOCKS_MUTATION, {
        onCompleted: () => {
            toast.success('Blocks deleted');
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
        if (confirm('Are you sure you want to delete blocks ' + id + '?')) {
            deleteBlocks({ variables: { id } });
        }
    };

    return (
        <div className="rw-segment rw-table-wrapper-responsive">
            <table className="rw-table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Is active</th>
                        <th>Html</th>
                        <th>Scss</th>
                        <th>Image feature</th>
                        <th>Mobile</th>
                        <th>Amp</th>
                        <th>Created at</th>
                        <th>Updated at</th>
                        <th>Deleted at</th>
                        <th>&nbsp;</th>
                    </tr>
                </thead>
                <tbody>
                    {blockses.map((blocks) => (
                        <tr key={blocks.id}>
                            <td>{truncate(blocks.id)}</td>
                            <td>{checkboxInputTag(blocks.is_active)}</td>
                            <td>{truncate(blocks.html)}</td>
                            <td>{truncate(blocks.scss)}</td>
                            <td>{truncate(blocks.image_feature)}</td>
                            <td>{truncate(blocks.mobile)}</td>
                            <td>{truncate(blocks.amp)}</td>
                            <td>{timeTag(blocks.created_at)}</td>
                            <td>{timeTag(blocks.updated_at)}</td>
                            <td>{timeTag(blocks.deleted_at)}</td>
                            <td>
                                <nav className="rw-table-actions">
                                    <Link
                                        to={routes.blocks({ id: blocks.id })}
                                        title={
                                            'Show blocks ' +
                                            blocks.id +
                                            ' detail'
                                        }
                                        className="rw-button rw-button-small"
                                    >
                                        Show
                                    </Link>
                                    <Link
                                        to={routes.editBlocks({
                                            id: blocks.id
                                        })}
                                        title={'Edit blocks ' + blocks.id}
                                        className="rw-button rw-button-small rw-button-blue"
                                    >
                                        Edit
                                    </Link>
                                    <button
                                        type="button"
                                        title={'Delete blocks ' + blocks.id}
                                        className="rw-button rw-button-small rw-button-red"
                                        onClick={() => onDeleteClick(blocks.id)}
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

export default BlocksesList;
