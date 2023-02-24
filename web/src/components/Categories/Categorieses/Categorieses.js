import { Link, routes } from '@redwoodjs/router';
import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';

import { QUERY } from 'src/components/Categories/CategoriesesCell';
import { checkboxInputTag, timeTag, truncate } from 'src/lib/formatters';

const DELETE_CATEGORIES_MUTATION = gql`
    mutation DeleteCategoriesMutation($id: BigInt!) {
        deleteCategories(id: $id) {
            id
        }
    }
`;

const CategoriesesList = ({ categorieses }) => {
    const [deleteCategories] = useMutation(DELETE_CATEGORIES_MUTATION, {
        onCompleted: () => {
            toast.success('Categories deleted');
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
        if (confirm('Are you sure you want to delete categories ' + id + '?')) {
            deleteCategories({ variables: { id } });
        }
    };

    return (
        <div className="rw-segment rw-table-wrapper-responsive">
            <table className="rw-table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Parent id</th>
                        <th>Position</th>
                        <th>Is searchable</th>
                        <th>Is active</th>
                        <th>Created at</th>
                        <th>Updated at</th>
                        <th>Type</th>
                        <th>&nbsp;</th>
                    </tr>
                </thead>
                <tbody>
                    {categorieses.map((categories) => (
                        <tr key={categories.id}>
                            <td>{truncate(categories.id)}</td>
                            <td>{truncate(categories.parent_id)}</td>
                            <td>{truncate(categories.position)}</td>
                            <td>
                                {checkboxInputTag(categories.is_searchable)}
                            </td>
                            <td>{checkboxInputTag(categories.is_active)}</td>
                            <td>{timeTag(categories.created_at)}</td>
                            <td>{timeTag(categories.updated_at)}</td>
                            <td>{truncate(categories.type)}</td>
                            <td>
                                <nav className="rw-table-actions">
                                    <Link
                                        to={routes.categories({
                                            id: categories.id
                                        })}
                                        title={
                                            'Show categories ' +
                                            categories.id +
                                            ' detail'
                                        }
                                        className="rw-button rw-button-small"
                                    >
                                        Show
                                    </Link>
                                    <Link
                                        to={routes.editCategories({
                                            id: categories.id
                                        })}
                                        title={
                                            'Edit categories ' + categories.id
                                        }
                                        className="rw-button rw-button-small rw-button-blue"
                                    >
                                        Edit
                                    </Link>
                                    <button
                                        type="button"
                                        title={
                                            'Delete categories ' + categories.id
                                        }
                                        className="rw-button rw-button-small rw-button-red"
                                        onClick={() =>
                                            onDeleteClick(categories.id)
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

export default CategoriesesList;
