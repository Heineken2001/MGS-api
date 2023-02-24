import { Link, routes } from '@redwoodjs/router';
import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';

import { QUERY } from 'src/components/Menus/MenusesCell';
import { checkboxInputTag, timeTag, truncate } from 'src/lib/formatters';

const DELETE_MENUS_MUTATION = gql`
    mutation DeleteMenusMutation($id: BigInt!) {
        deleteMenus(id: $id) {
            id
        }
    }
`;

const MenusesList = ({ menuses }) => {
    const [deleteMenus] = useMutation(DELETE_MENUS_MUTATION, {
        onCompleted: () => {
            toast.success('Menus deleted');
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
        if (confirm('Are you sure you want to delete menus ' + id + '?')) {
            deleteMenus({ variables: { id } });
        }
    };

    return (
        <div className="rw-segment rw-table-wrapper-responsive">
            <table className="rw-table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Is active</th>
                        <th>Created at</th>
                        <th>Updated at</th>
                        <th>Position</th>
                        <th>&nbsp;</th>
                    </tr>
                </thead>
                <tbody>
                    {menuses.map((menus) => (
                        <tr key={menus.id}>
                            <td>{truncate(menus.id)}</td>
                            <td>{checkboxInputTag(menus.is_active)}</td>
                            <td>{timeTag(menus.created_at)}</td>
                            <td>{timeTag(menus.updated_at)}</td>
                            <td>{truncate(menus.position)}</td>
                            <td>
                                <nav className="rw-table-actions">
                                    <Link
                                        to={routes.menus({ id: menus.id })}
                                        title={
                                            'Show menus ' + menus.id + ' detail'
                                        }
                                        className="rw-button rw-button-small"
                                    >
                                        Show
                                    </Link>
                                    <Link
                                        to={routes.editMenus({ id: menus.id })}
                                        title={'Edit menus ' + menus.id}
                                        className="rw-button rw-button-small rw-button-blue"
                                    >
                                        Edit
                                    </Link>
                                    <button
                                        type="button"
                                        title={'Delete menus ' + menus.id}
                                        className="rw-button rw-button-small rw-button-red"
                                        onClick={() => onDeleteClick(menus.id)}
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

export default MenusesList;
