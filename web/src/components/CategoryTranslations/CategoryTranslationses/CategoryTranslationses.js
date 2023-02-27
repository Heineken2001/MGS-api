import { Link, routes } from '@redwoodjs/router';
import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';

import { QUERY } from 'src/components/CategoryTranslations/CategoryTranslationsesCell';
import { jsonTruncate, truncate } from 'src/lib/formatters';

const DELETE_CATEGORY_TRANSLATIONS_MUTATION = gql`
    mutation DeleteCategoryTranslationsMutation($id: BigInt!) {
        deleteCategoryTranslations(id: $id) {
            id
        }
    }
`;

const CategoryTranslationsesList = ({ categoryTranslationses }) => {
    const [deleteCategoryTranslations] = useMutation(
        DELETE_CATEGORY_TRANSLATIONS_MUTATION,
        {
            onCompleted: () => {
                toast.success('CategoryTranslations deleted');
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
                'Are you sure you want to delete categoryTranslations ' +
                    id +
                    '?'
            )
        ) {
            deleteCategoryTranslations({ variables: { id } });
        }
    };

    return (
        <div className="rw-segment rw-table-wrapper-responsive">
            <table className="rw-table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Category id</th>
                        <th>Locale</th>
                        <th>Name</th>
                        <th>Content</th>
                        <th>Description</th>
                        <th>Slug</th>
                        <th>Title</th>
                        <th>Short description</th>
                        <th>Long description</th>
                        <th>Featured image</th>
                        <th>Formdata</th>
                        <th>Jsonschema</th>
                        <th>Uischema</th>
                        <th>&nbsp;</th>
                    </tr>
                </thead>
                <tbody>
                    {categoryTranslationses.map((categoryTranslations) => (
                        <tr key={categoryTranslations.id}>
                            <td>{truncate(categoryTranslations.id)}</td>
                            <td>
                                {truncate(categoryTranslations.category_id)}
                            </td>
                            <td>{truncate(categoryTranslations.locale)}</td>
                            <td>{truncate(categoryTranslations.name)}</td>
                            <td>{truncate(categoryTranslations.content)}</td>
                            <td>
                                {truncate(categoryTranslations.description)}
                            </td>
                            <td>{truncate(categoryTranslations.slug)}</td>
                            <td>{truncate(categoryTranslations.title)}</td>
                            <td>
                                {truncate(
                                    categoryTranslations.short_description
                                )}
                            </td>
                            <td>
                                {truncate(
                                    categoryTranslations.long_description
                                )}
                            </td>
                            <td>
                                {truncate(categoryTranslations.featured_image)}
                            </td>
                            <td>
                                {jsonTruncate(categoryTranslations.formdata)}
                            </td>
                            <td>
                                {jsonTruncate(categoryTranslations.jsonschema)}
                            </td>
                            <td>
                                {jsonTruncate(categoryTranslations.uischema)}
                            </td>
                            <td>
                                <nav className="rw-table-actions">
                                    <Link
                                        to={routes.categoryTranslations({
                                            id: categoryTranslations.id
                                        })}
                                        title={
                                            'Show categoryTranslations ' +
                                            categoryTranslations.id +
                                            ' detail'
                                        }
                                        className="rw-button rw-button-small"
                                    >
                                        Show
                                    </Link>
                                    <Link
                                        to={routes.editCategoryTranslations({
                                            id: categoryTranslations.id
                                        })}
                                        title={
                                            'Edit categoryTranslations ' +
                                            categoryTranslations.id
                                        }
                                        className="rw-button rw-button-small rw-button-blue"
                                    >
                                        Edit
                                    </Link>
                                    <button
                                        type="button"
                                        title={
                                            'Delete categoryTranslations ' +
                                            categoryTranslations.id
                                        }
                                        className="rw-button rw-button-small rw-button-red"
                                        onClick={() =>
                                            onDeleteClick(
                                                categoryTranslations.id
                                            )
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

export default CategoryTranslationsesList;
