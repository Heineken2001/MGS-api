import { Link, routes, navigate } from '@redwoodjs/router';
import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';

import 'src/lib/formatters';

const DELETE_MENU_TRANSLATIONS_MUTATION = gql`
    mutation DeleteMenuTranslationsMutation($id: BigInt!) {
        deleteMenuTranslations(id: $id) {
            id
        }
    }
`;

const MenuTranslations = ({ menuTranslations }) => {
    const [deleteMenuTranslations] = useMutation(
        DELETE_MENU_TRANSLATIONS_MUTATION,
        {
            onCompleted: () => {
                toast.success('MenuTranslations deleted');
                navigate(routes.menuTranslationses());
            },
            onError: (error) => {
                toast.error(error.message);
            }
        }
    );

    const onDeleteClick = (id) => {
        if (
            confirm(
                'Are you sure you want to delete menuTranslations ' + id + '?'
            )
        ) {
            deleteMenuTranslations({ variables: { id } });
        }
    };

    return (
        <>
            <div className="rw-segment">
                <header className="rw-segment-header">
                    <h2 className="rw-heading rw-heading-secondary">
                        MenuTranslations {menuTranslations.id} Detail
                    </h2>
                </header>
                <table className="rw-table">
                    <tbody>
                        <tr>
                            <th>Id</th>
                            <td>{menuTranslations.id}</td>
                        </tr>
                        <tr>
                            <th>Menu id</th>
                            <td>{menuTranslations.menu_id}</td>
                        </tr>
                        <tr>
                            <th>Locale</th>
                            <td>{menuTranslations.locale}</td>
                        </tr>
                        <tr>
                            <th>Name</th>
                            <td>{menuTranslations.name}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <nav className="rw-button-group">
                <Link
                    to={routes.editMenuTranslations({
                        id: menuTranslations.id
                    })}
                    className="rw-button rw-button-blue"
                >
                    Edit
                </Link>
                <button
                    type="button"
                    className="rw-button rw-button-red"
                    onClick={() => onDeleteClick(menuTranslations.id)}
                >
                    Delete
                </button>
            </nav>
        </>
    );
};

export default MenuTranslations;
