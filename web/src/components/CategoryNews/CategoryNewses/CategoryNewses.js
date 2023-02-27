import { Link, routes } from '@redwoodjs/router';
import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';

import { QUERY } from 'src/components/CategoryNews/CategoryNewsesCell';
import { checkboxInputTag, timeTag, truncate } from 'src/lib/formatters';

const DELETE_CATEGORY_NEWS_MUTATION = gql`
    mutation DeleteCategoryNewsMutation($id: BigInt!) {
        deleteCategoryNews(id: $id) {
            id
        }
    }
`;

const CategoryNewsesList = ({ categoryNewses }) => {
    const [deleteCategoryNews] = useMutation(DELETE_CATEGORY_NEWS_MUTATION, {
        onCompleted: () => {
            toast.success('CategoryNews deleted');
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
        if (
            confirm('Are you sure you want to delete categoryNews ' + id + '?')
        ) {
            deleteCategoryNews({ variables: { id } });
        }
    };

    return (
        <div className="rw-segment rw-table-wrapper-responsive">
            <table className="rw-table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Parent id</th>
                        <th>Slug</th>
                        <th>Position</th>
                        <th>Is searchable</th>
                        <th>Is active</th>
                        <th>Created at</th>
                        <th>Updated at</th>
                        <th>&nbsp;</th>
                    </tr>
                </thead>
                <tbody>
                    {categoryNewses.map((categoryNews) => (
                        <tr key={categoryNews.id}>
                            <td>{truncate(categoryNews.id)}</td>
                            <td>{truncate(categoryNews.parent_id)}</td>
                            <td>{truncate(categoryNews.slug)}</td>
                            <td>{truncate(categoryNews.position)}</td>
                            <td>
                                {checkboxInputTag(categoryNews.is_searchable)}
                            </td>
                            <td>{checkboxInputTag(categoryNews.is_active)}</td>
                            <td>{timeTag(categoryNews.created_at)}</td>
                            <td>{timeTag(categoryNews.updated_at)}</td>
                            <td>
                                <nav className="rw-table-actions">
                                    <Link
                                        to={routes.categoryNews({
                                            id: categoryNews.id
                                        })}
                                        title={
                                            'Show categoryNews ' +
                                            categoryNews.id +
                                            ' detail'
                                        }
                                        className="rw-button rw-button-small"
                                    >
                                        Show
                                    </Link>
                                    <Link
                                        to={routes.editCategoryNews({
                                            id: categoryNews.id
                                        })}
                                        title={
                                            'Edit categoryNews ' +
                                            categoryNews.id
                                        }
                                        className="rw-button rw-button-small rw-button-blue"
                                    >
                                        Edit
                                    </Link>
                                    <button
                                        type="button"
                                        title={
                                            'Delete categoryNews ' +
                                            categoryNews.id
                                        }
                                        className="rw-button rw-button-small rw-button-red"
                                        onClick={() =>
                                            onDeleteClick(categoryNews.id)
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

export default CategoryNewsesList;
