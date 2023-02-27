import { Link, routes } from '@redwoodjs/router';
import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';

import { QUERY } from 'src/components/CategoryGroupNews/CategoryGroupNewsesCell';
import { checkboxInputTag, timeTag, truncate } from 'src/lib/formatters';

const DELETE_CATEGORY_GROUP_NEWS_MUTATION = gql`
    mutation DeleteCategoryGroupNewsMutation($id: BigInt!) {
        deleteCategoryGroupNews(id: $id) {
            id
        }
    }
`;

const CategoryGroupNewsesList = ({ categoryGroupNewses }) => {
    const [deleteCategoryGroupNews] = useMutation(
        DELETE_CATEGORY_GROUP_NEWS_MUTATION,
        {
            onCompleted: () => {
                toast.success('CategoryGroupNews deleted');
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
                'Are you sure you want to delete categoryGroupNews ' + id + '?'
            )
        ) {
            deleteCategoryGroupNews({ variables: { id } });
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
                    {categoryGroupNewses.map((categoryGroupNews) => (
                        <tr key={categoryGroupNews.id}>
                            <td>{truncate(categoryGroupNews.id)}</td>
                            <td>{truncate(categoryGroupNews.parent_id)}</td>
                            <td>{truncate(categoryGroupNews.slug)}</td>
                            <td>{truncate(categoryGroupNews.position)}</td>
                            <td>
                                {checkboxInputTag(
                                    categoryGroupNews.is_searchable
                                )}
                            </td>
                            <td>
                                {checkboxInputTag(categoryGroupNews.is_active)}
                            </td>
                            <td>{timeTag(categoryGroupNews.created_at)}</td>
                            <td>{timeTag(categoryGroupNews.updated_at)}</td>
                            <td>
                                <nav className="rw-table-actions">
                                    <Link
                                        to={routes.categoryGroupNews({
                                            id: categoryGroupNews.id
                                        })}
                                        title={
                                            'Show categoryGroupNews ' +
                                            categoryGroupNews.id +
                                            ' detail'
                                        }
                                        className="rw-button rw-button-small"
                                    >
                                        Show
                                    </Link>
                                    <Link
                                        to={routes.editCategoryGroupNews({
                                            id: categoryGroupNews.id
                                        })}
                                        title={
                                            'Edit categoryGroupNews ' +
                                            categoryGroupNews.id
                                        }
                                        className="rw-button rw-button-small rw-button-blue"
                                    >
                                        Edit
                                    </Link>
                                    <button
                                        type="button"
                                        title={
                                            'Delete categoryGroupNews ' +
                                            categoryGroupNews.id
                                        }
                                        className="rw-button rw-button-small rw-button-red"
                                        onClick={() =>
                                            onDeleteClick(categoryGroupNews.id)
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

export default CategoryGroupNewsesList;
