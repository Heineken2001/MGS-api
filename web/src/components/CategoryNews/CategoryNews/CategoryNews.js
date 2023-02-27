import { Link, routes, navigate } from '@redwoodjs/router';
import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';

import { checkboxInputTag, timeTag } from 'src/lib/formatters';

const DELETE_CATEGORY_NEWS_MUTATION = gql`
    mutation DeleteCategoryNewsMutation($id: BigInt!) {
        deleteCategoryNews(id: $id) {
            id
        }
    }
`;

const CategoryNews = ({ categoryNews }) => {
    const [deleteCategoryNews] = useMutation(DELETE_CATEGORY_NEWS_MUTATION, {
        onCompleted: () => {
            toast.success('CategoryNews deleted');
            navigate(routes.categoryNewses());
        },
        onError: (error) => {
            toast.error(error.message);
        }
    });

    const onDeleteClick = (id) => {
        if (
            confirm('Are you sure you want to delete categoryNews ' + id + '?')
        ) {
            deleteCategoryNews({ variables: { id } });
        }
    };

    return (
        <>
            <div className="rw-segment">
                <header className="rw-segment-header">
                    <h2 className="rw-heading rw-heading-secondary">
                        CategoryNews {categoryNews.id} Detail
                    </h2>
                </header>
                <table className="rw-table">
                    <tbody>
                        <tr>
                            <th>Id</th>
                            <td>{categoryNews.id}</td>
                        </tr>
                        <tr>
                            <th>Parent id</th>
                            <td>{categoryNews.parent_id}</td>
                        </tr>
                        <tr>
                            <th>Slug</th>
                            <td>{categoryNews.slug}</td>
                        </tr>
                        <tr>
                            <th>Position</th>
                            <td>{categoryNews.position}</td>
                        </tr>
                        <tr>
                            <th>Is searchable</th>
                            <td>
                                {checkboxInputTag(categoryNews.is_searchable)}
                            </td>
                        </tr>
                        <tr>
                            <th>Is active</th>
                            <td>{checkboxInputTag(categoryNews.is_active)}</td>
                        </tr>
                        <tr>
                            <th>Created at</th>
                            <td>{timeTag(categoryNews.created_at)}</td>
                        </tr>
                        <tr>
                            <th>Updated at</th>
                            <td>{timeTag(categoryNews.updated_at)}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <nav className="rw-button-group">
                <Link
                    to={routes.editCategoryNews({ id: categoryNews.id })}
                    className="rw-button rw-button-blue"
                >
                    Edit
                </Link>
                <button
                    type="button"
                    className="rw-button rw-button-red"
                    onClick={() => onDeleteClick(categoryNews.id)}
                >
                    Delete
                </button>
            </nav>
        </>
    );
};

export default CategoryNews;
