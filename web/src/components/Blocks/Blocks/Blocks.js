import { Link, routes, navigate } from '@redwoodjs/router';
import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';

import { checkboxInputTag, timeTag } from 'src/lib/formatters';

const DELETE_BLOCKS_MUTATION = gql`
    mutation DeleteBlocksMutation($id: BigInt!) {
        deleteBlocks(id: $id) {
            id
        }
    }
`;

const Blocks = ({ blocks }) => {
    const [deleteBlocks] = useMutation(DELETE_BLOCKS_MUTATION, {
        onCompleted: () => {
            toast.success('Blocks deleted');
            navigate(routes.blockses());
        },
        onError: (error) => {
            toast.error(error.message);
        }
    });

    const onDeleteClick = (id) => {
        if (confirm('Are you sure you want to delete blocks ' + id + '?')) {
            deleteBlocks({ variables: { id } });
        }
    };

    return (
        <>
            <div className="rw-segment">
                <header className="rw-segment-header">
                    <h2 className="rw-heading rw-heading-secondary">
                        Blocks {blocks.id} Detail
                    </h2>
                </header>
                <table className="rw-table">
                    <tbody>
                        <tr>
                            <th>Id</th>
                            <td>{blocks.id}</td>
                        </tr>
                        <tr>
                            <th>Is active</th>
                            <td>{checkboxInputTag(blocks.is_active)}</td>
                        </tr>
                        <tr>
                            <th>Html</th>
                            <td>{blocks.html}</td>
                        </tr>
                        <tr>
                            <th>Scss</th>
                            <td>{blocks.scss}</td>
                        </tr>
                        <tr>
                            <th>Image feature</th>
                            <td>{blocks.image_feature}</td>
                        </tr>
                        <tr>
                            <th>Mobile</th>
                            <td>{blocks.mobile}</td>
                        </tr>
                        <tr>
                            <th>Amp</th>
                            <td>{blocks.amp}</td>
                        </tr>
                        <tr>
                            <th>Created at</th>
                            <td>{timeTag(blocks.created_at)}</td>
                        </tr>
                        <tr>
                            <th>Updated at</th>
                            <td>{timeTag(blocks.updated_at)}</td>
                        </tr>
                        <tr>
                            <th>Deleted at</th>
                            <td>{timeTag(blocks.deleted_at)}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <nav className="rw-button-group">
                <Link
                    to={routes.editBlocks({ id: blocks.id })}
                    className="rw-button rw-button-blue"
                >
                    Edit
                </Link>
                <button
                    type="button"
                    className="rw-button rw-button-red"
                    onClick={() => onDeleteClick(blocks.id)}
                >
                    Delete
                </button>
            </nav>
        </>
    );
};

export default Blocks;
