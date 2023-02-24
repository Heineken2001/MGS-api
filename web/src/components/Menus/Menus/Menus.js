import { Link, routes, navigate } from '@redwoodjs/router';
import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';

import { checkboxInputTag, timeTag } from 'src/lib/formatters';

const DELETE_MENUS_MUTATION = gql`
    mutation DeleteMenusMutation($id: BigInt!) {
        deleteMenus(id: $id) {
            id
        }
    }
`;

const Menus = ({ menus }) => {
    const [deleteMenus] = useMutation(DELETE_MENUS_MUTATION, {
        onCompleted: () => {
            toast.success('Menus deleted');
            navigate(routes.menuses());
        },
        onError: (error) => {
            toast.error(error.message);
        }
    });

    const onDeleteClick = (id) => {
        if (confirm('Are you sure you want to delete menus ' + id + '?')) {
            deleteMenus({ variables: { id } });
        }
    };

    return (
        <>
            <div className="rw-segment">
                <header className="rw-segment-header">
                    <h2 className="rw-heading rw-heading-secondary">
                        Menus {menus.id} Detail
                    </h2>
                </header>
                <table className="rw-table">
                    <tbody>
                        <tr>
                            <th>Id</th>
                            <td>{menus.id}</td>
                        </tr>
                        <tr>
                            <th>Is active</th>
                            <td>{checkboxInputTag(menus.is_active)}</td>
                        </tr>
                        <tr>
                            <th>Created at</th>
                            <td>{timeTag(menus.created_at)}</td>
                        </tr>
                        <tr>
                            <th>Updated at</th>
                            <td>{timeTag(menus.updated_at)}</td>
                        </tr>
                        <tr>
                            <th>Position</th>
                            <td>{menus.position}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <nav className="rw-button-group">
                <Link
                    to={routes.editMenus({ id: menus.id })}
                    className="rw-button rw-button-blue"
                >
                    Edit
                </Link>
                <button
                    type="button"
                    className="rw-button rw-button-red"
                    onClick={() => onDeleteClick(menus.id)}
                >
                    Delete
                </button>
            </nav>
        </>
    );
};

export default Menus;
