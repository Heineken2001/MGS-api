import { Link, routes, navigate } from '@redwoodjs/router';
import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';

import { checkboxInputTag, timeTag } from 'src/lib/formatters';

const DELETE_CATEGORY_GROUP_NEWS_MUTATION = gql`
    mutation DeleteCategoryGroupNewsMutation($id: BigInt!) {
        deleteCategoryGroupNews(id: $id) {
            id
        }
    }
`;

const CategoryGroupNews = ({ categoryGroupNews }) => {
    const [deleteCategoryGroupNews] = useMutation(
        DELETE_CATEGORY_GROUP_NEWS_MUTATION,
        {
            onCompleted: () => {
                toast.success('CategoryGroupNews deleted');
                navigate(routes.categoryGroupNewses());
            },
            onError: (error) => {
                toast.error(error.message);
            }
        }
    );

    const onDeleteClick = (id) => {
        if (
            confirm(
                'Are you sure you want to delete categoryGroupNews ' + id + '?'
            )
        ) {
            deleteCategoryGroupNews({ variables: { id } });
        }
    };

    return (
        <>
            <div className="rw-segment">
                <header className="rw-segment-header">
                    <h2 className="rw-heading rw-heading-secondary">
                        CategoryGroupNews {categoryGroupNews.id} Detail
                    </h2>
                </header>
                <table className="rw-table">
                    <tbody>
                        <tr>
                            <th>Id</th>
                            <td>{categoryGroupNews.id}</td>
                        </tr>
                        <tr>
                            <th>Parent id</th>
                            <td>{categoryGroupNews.parent_id}</td>
                        </tr>
                        <tr>
                            <th>Slug</th>
                            <td>{categoryGroupNews.slug}</td>
                        </tr>
                        <tr>
                            <th>Position</th>
                            <td>{categoryGroupNews.position}</td>
                        </tr>
                        <tr>
                            <th>Is searchable</th>
                            <td>
                                {checkboxInputTag(
                                    categoryGroupNews.is_searchable
                                )}
                            </td>
                        </tr>
                        <tr>
                            <th>Is active</th>
                            <td>
                                {checkboxInputTag(categoryGroupNews.is_active)}
                            </td>
                        </tr>
                        <tr>
                            <th>Created at</th>
                            <td>{timeTag(categoryGroupNews.created_at)}</td>
                        </tr>
                        <tr>
                            <th>Updated at</th>
                            <td>{timeTag(categoryGroupNews.updated_at)}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <nav className="rw-button-group">
                <Link
                    to={routes.editCategoryGroupNews({
                        id: categoryGroupNews.id
                    })}
                    className="rw-button rw-button-blue"
                >
                    Edit
                </Link>
                <button
                    type="button"
                    className="rw-button rw-button-red"
                    onClick={() => onDeleteClick(categoryGroupNews.id)}
                >
                    Delete
                </button>
            </nav>
        </>
    );
};

export default CategoryGroupNews;
