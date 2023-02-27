import { Link, routes, navigate } from '@redwoodjs/router';
import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';

import { timeTag } from 'src/lib/formatters';

const DELETE_BLOCK_VALUES_MUTATION = gql`
    mutation DeleteBlockValuesMutation($id: BigInt!) {
        deleteBlockValues(id: $id) {
            id
        }
    }
`;

const BlockValues = ({ blockValues }) => {
    const [deleteBlockValues] = useMutation(DELETE_BLOCK_VALUES_MUTATION, {
        onCompleted: () => {
            toast.success('BlockValues deleted');
            navigate(routes.blockValueses());
        },
        onError: (error) => {
            toast.error(error.message);
        }
    });

    const onDeleteClick = (id) => {
        if (
            confirm('Are you sure you want to delete blockValues ' + id + '?')
        ) {
            deleteBlockValues({ variables: { id } });
        }
    };

    return (
        <>
            <div className="rw-segment">
                <header className="rw-segment-header">
                    <h2 className="rw-heading rw-heading-secondary">
                        BlockValues {blockValues.id} Detail
                    </h2>
                </header>
                <table className="rw-table">
                    <tbody>
                        <tr>
                            <th>Id</th>
                            <td>{blockValues.id}</td>
                        </tr>
                        <tr>
                            <th>Code</th>
                            <td>{blockValues.code}</td>
                        </tr>
                        <tr>
                            <th>Block id</th>
                            <td>{blockValues.block_id}</td>
                        </tr>
                        <tr>
                            <th>Position</th>
                            <td>{blockValues.position}</td>
                        </tr>
                        <tr>
                            <th>Key</th>
                            <td>{blockValues.key}</td>
                        </tr>
                        <tr>
                            <th>Type</th>
                            <td>{blockValues.type}</td>
                        </tr>
                        <tr>
                            <th>Created at</th>
                            <td>{timeTag(blockValues.created_at)}</td>
                        </tr>
                        <tr>
                            <th>Updated at</th>
                            <td>{timeTag(blockValues.updated_at)}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <nav className="rw-button-group">
                <Link
                    to={routes.editBlockValues({ id: blockValues.id })}
                    className="rw-button rw-button-blue"
                >
                    Edit
                </Link>
                <button
                    type="button"
                    className="rw-button rw-button-red"
                    onClick={() => onDeleteClick(blockValues.id)}
                >
                    Delete
                </button>
            </nav>
        </>
    );
};

export default BlockValues;
