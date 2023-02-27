import { Link, routes } from '@redwoodjs/router';
import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';

import { QUERY } from 'src/components/MenuTranslations/MenuTranslationsesCell';
import { truncate } from 'src/lib/formatters';

const DELETE_MENU_TRANSLATIONS_MUTATION = gql`
    mutation DeleteMenuTranslationsMutation($id: BigInt!) {
        deleteMenuTranslations(id: $id) {
            id
        }
    }
`;

const MenuTranslationsesList = ({ menuTranslationses }) => {
    const [deleteMenuTranslations] = useMutation(
        DELETE_MENU_TRANSLATIONS_MUTATION,
        {
            onCompleted: () => {
                toast.success('MenuTranslations deleted');
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
                'Are you sure you want to delete menuTranslations ' + id + '?'
            )
        ) {
            deleteMenuTranslations({ variables: { id } });
        }
    };

    return (
        <div className="rw-segment rw-table-wrapper-responsive">
            <table className="rw-table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Menu id</th>
                        <th>Locale</th>
                        <th>Name</th>
                        <th>&nbsp;</th>
                    </tr>
                </thead>
                <tbody>
                    {menuTranslationses.map((menuTranslations) => (
                        <tr key={menuTranslations.id}>
                            <td>{truncate(menuTranslations.id)}</td>
                            <td>{truncate(menuTranslations.menu_id)}</td>
                            <td>{truncate(menuTranslations.locale)}</td>
                            <td>{truncate(menuTranslations.name)}</td>
                            <td>
                                <nav className="rw-table-actions">
                                    <Link
                                        to={routes.menuTranslations({
                                            id: menuTranslations.id
                                        })}
                                        title={
                                            'Show menuTranslations ' +
                                            menuTranslations.id +
                                            ' detail'
                                        }
                                        className="rw-button rw-button-small"
                                    >
                                        Show
                                    </Link>
                                    <Link
                                        to={routes.editMenuTranslations({
                                            id: menuTranslations.id
                                        })}
                                        title={
                                            'Edit menuTranslations ' +
                                            menuTranslations.id
                                        }
                                        className="rw-button rw-button-small rw-button-blue"
                                    >
                                        Edit
                                    </Link>
                                    <button
                                        type="button"
                                        title={
                                            'Delete menuTranslations ' +
                                            menuTranslations.id
                                        }
                                        className="rw-button rw-button-small rw-button-red"
                                        onClick={() =>
                                            onDeleteClick(menuTranslations.id)
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

export default MenuTranslationsesList;
