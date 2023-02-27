import { Link, routes } from '@redwoodjs/router';
import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';

import { QUERY } from 'src/components/CategoryGroupNewsTranslations/CategoryGroupNewsTranslationsesCell';
import { truncate } from 'src/lib/formatters';

const DELETE_CATEGORY_GROUP_NEWS_TRANSLATIONS_MUTATION = gql`
    mutation DeleteCategoryGroupNewsTranslationsMutation($id: BigInt!) {
        deleteCategoryGroupNewsTranslations(id: $id) {
            id
        }
    }
`;

const CategoryGroupNewsTranslationsesList = ({
    categoryGroupNewsTranslationses
}) => {
    const [deleteCategoryGroupNewsTranslations] = useMutation(
        DELETE_CATEGORY_GROUP_NEWS_TRANSLATIONS_MUTATION,
        {
            onCompleted: () => {
                toast.success('CategoryGroupNewsTranslations deleted');
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
                'Are you sure you want to delete categoryGroupNewsTranslations ' +
                    id +
                    '?'
            )
        ) {
            deleteCategoryGroupNewsTranslations({ variables: { id } });
        }
    };

    return (
        <div className="rw-segment rw-table-wrapper-responsive">
            <table className="rw-table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Category group news id</th>
                        <th>Locale</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Title 2</th>
                        <th>&nbsp;</th>
                    </tr>
                </thead>
                <tbody>
                    {categoryGroupNewsTranslationses.map(
                        (categoryGroupNewsTranslations) => (
                            <tr key={categoryGroupNewsTranslations.id}>
                                <td>
                                    {truncate(categoryGroupNewsTranslations.id)}
                                </td>
                                <td>
                                    {truncate(
                                        categoryGroupNewsTranslations.category_group_news_id
                                    )}
                                </td>
                                <td>
                                    {truncate(
                                        categoryGroupNewsTranslations.locale
                                    )}
                                </td>
                                <td>
                                    {truncate(
                                        categoryGroupNewsTranslations.name
                                    )}
                                </td>
                                <td>
                                    {truncate(
                                        categoryGroupNewsTranslations.description
                                    )}
                                </td>
                                <td>
                                    {truncate(
                                        categoryGroupNewsTranslations.title_2
                                    )}
                                </td>
                                <td>
                                    <nav className="rw-table-actions">
                                        <Link
                                            to={routes.categoryGroupNewsTranslations(
                                                {
                                                    id: categoryGroupNewsTranslations.id
                                                }
                                            )}
                                            title={
                                                'Show categoryGroupNewsTranslations ' +
                                                categoryGroupNewsTranslations.id +
                                                ' detail'
                                            }
                                            className="rw-button rw-button-small"
                                        >
                                            Show
                                        </Link>
                                        <Link
                                            to={routes.editCategoryGroupNewsTranslations(
                                                {
                                                    id: categoryGroupNewsTranslations.id
                                                }
                                            )}
                                            title={
                                                'Edit categoryGroupNewsTranslations ' +
                                                categoryGroupNewsTranslations.id
                                            }
                                            className="rw-button rw-button-small rw-button-blue"
                                        >
                                            Edit
                                        </Link>
                                        <button
                                            type="button"
                                            title={
                                                'Delete categoryGroupNewsTranslations ' +
                                                categoryGroupNewsTranslations.id
                                            }
                                            className="rw-button rw-button-small rw-button-red"
                                            onClick={() =>
                                                onDeleteClick(
                                                    categoryGroupNewsTranslations.id
                                                )
                                            }
                                        >
                                            Delete
                                        </button>
                                    </nav>
                                </td>
                            </tr>
                        )
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default CategoryGroupNewsTranslationsesList;
