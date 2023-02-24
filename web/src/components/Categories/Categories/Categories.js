import { Link, routes, navigate } from '@redwoodjs/router';
import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';

import { checkboxInputTag, timeTag } from 'src/lib/formatters';

const DELETE_CATEGORIES_MUTATION = gql`
    mutation DeleteCategoriesMutation($id: BigInt!) {
        deleteCategories(id: $id) {
            id
        }
    }
`;

const Categories = ({ categories }) => {
    const [deleteCategories] = useMutation(DELETE_CATEGORIES_MUTATION, {
        onCompleted: () => {
            toast.success('Categories deleted');
            navigate(routes.categorieses());
        },
        onError: (error) => {
            toast.error(error.message);
        }
    });

    const onDeleteClick = (id) => {
        if (confirm('Are you sure you want to delete categories ' + id + '?')) {
            deleteCategories({ variables: { id } });
        }
    };

    return (
        <>
            <div className="rw-segment">
                <header className="rw-segment-header">
                    <h2 className="rw-heading rw-heading-secondary">
                        Categories {categories.id} Detail
                    </h2>
                </header>
                <table className="rw-table">
                    <tbody>
                        <tr>
                            <th>Id</th>
                            <td>{categories.id}</td>
                        </tr>
                        <tr>
                            <th>Parent id</th>
                            <td>{categories.parent_id}</td>
                        </tr>
                        <tr>
                            <th>Position</th>
                            <td>{categories.position}</td>
                        </tr>
                        <tr>
                            <th>Is searchable</th>
                            <td>
                                {checkboxInputTag(categories.is_searchable)}
                            </td>
                        </tr>
                        <tr>
                            <th>Is active</th>
                            <td>{checkboxInputTag(categories.is_active)}</td>
                        </tr>
                        <tr>
                            <th>Created at</th>
                            <td>{timeTag(categories.created_at)}</td>
                        </tr>
                        <tr>
                            <th>Updated at</th>
                            <td>{timeTag(categories.updated_at)}</td>
                        </tr>
                        <tr>
                            <th>Type</th>
                            <td>{categories.type}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <nav className="rw-button-group">
                <Link
                    to={routes.editCategories({ id: categories.id })}
                    className="rw-button rw-button-blue"
                >
                    Edit
                </Link>
                <button
                    type="button"
                    className="rw-button rw-button-red"
                    onClick={() => onDeleteClick(categories.id)}
                >
                    Delete
                </button>
            </nav>
        </>
    );
};

export default Categories;
