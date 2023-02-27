import { Link, routes } from '@redwoodjs/router';
import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';

import { QUERY } from 'src/components/CategoryNewsTranslations/CategoryNewsTranslationsesCell';
import { truncate } from 'src/lib/formatters';

const DELETE_CATEGORY_NEWS_TRANSLATIONS_MUTATION = gql`
    mutation DeleteCategoryNewsTranslationsMutation($id: BigInt!) {
        deleteCategoryNewsTranslations(id: $id) {
            id
        }
    }
`;

const CategoryNewsTranslationsesList = ({ categoryNewsTranslationses }) => {
    const [deleteCategoryNewsTranslations] = useMutation(
        DELETE_CATEGORY_NEWS_TRANSLATIONS_MUTATION,
        {
            onCompleted: () => {
                toast.success('CategoryNewsTranslations deleted');
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
                'Are you sure you want to delete categoryNewsTranslations ' +
                    id +
                    '?'
            )
        ) {
            deleteCategoryNewsTranslations({ variables: { id } });
        }
    };

    return (
        <div className="rw-segment rw-table-wrapper-responsive">
            <table className="rw-table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Category news id</th>
                        <th>Locale</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>&nbsp;</th>
                    </tr>
                </thead>
                <tbody>
                    {categoryNewsTranslationses.map(
                        (categoryNewsTranslations) => (
                            <tr key={categoryNewsTranslations.id}>
                                <td>{truncate(categoryNewsTranslations.id)}</td>
                                <td>
                                    {truncate(
                                        categoryNewsTranslations.category_news_id
                                    )}
                                </td>
                                <td>
                                    {truncate(categoryNewsTranslations.locale)}
                                </td>
                                <td>
                                    {truncate(categoryNewsTranslations.name)}
                                </td>
                                <td>
                                    {truncate(
                                        categoryNewsTranslations.description
                                    )}
                                </td>
                                <td>
                                    <nav className="rw-table-actions">
                                        <Link
                                            to={routes.categoryNewsTranslations(
                                                {
                                                    id: categoryNewsTranslations.id
                                                }
                                            )}
                                            title={
                                                'Show categoryNewsTranslations ' +
                                                categoryNewsTranslations.id +
                                                ' detail'
                                            }
                                            className="rw-button rw-button-small"
                                        >
                                            Show
                                        </Link>
                                        <Link
                                            to={routes.editCategoryNewsTranslations(
                                                {
                                                    id: categoryNewsTranslations.id
                                                }
                                            )}
                                            title={
                                                'Edit categoryNewsTranslations ' +
                                                categoryNewsTranslations.id
                                            }
                                            className="rw-button rw-button-small rw-button-blue"
                                        >
                                            Edit
                                        </Link>
                                        <button
                                            type="button"
                                            title={
                                                'Delete categoryNewsTranslations ' +
                                                categoryNewsTranslations.id
                                            }
                                            className="rw-button rw-button-small rw-button-red"
                                            onClick={() =>
                                                onDeleteClick(
                                                    categoryNewsTranslations.id
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

export default CategoryNewsTranslationsesList;
