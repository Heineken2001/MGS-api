import { Link, routes } from '@redwoodjs/router';
import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';

import { QUERY } from 'src/components/CollectionTranslations/CollectionTranslationsesCell';
import { jsonTruncate, truncate } from 'src/lib/formatters';

const DELETE_COLLECTION_TRANSLATIONS_MUTATION = gql`
    mutation DeleteCollectionTranslationsMutation($id: BigInt!) {
        deleteCollectionTranslations(id: $id) {
            id
        }
    }
`;

const CollectionTranslationsesList = ({ collectionTranslationses }) => {
    const [deleteCollectionTranslations] = useMutation(
        DELETE_COLLECTION_TRANSLATIONS_MUTATION,
        {
            onCompleted: () => {
                toast.success('CollectionTranslations deleted');
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
                'Are you sure you want to delete collectionTranslations ' +
                    id +
                    '?'
            )
        ) {
            deleteCollectionTranslations({ variables: { id } });
        }
    };

    return (
        <div className="rw-segment rw-table-wrapper-responsive">
            <table className="rw-table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Collection id</th>
                        <th>Locale</th>
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
                    {collectionTranslationses.map((collectionTranslations) => (
                        <tr key={collectionTranslations.id}>
                            <td>{truncate(collectionTranslations.id)}</td>
                            <td>
                                {truncate(collectionTranslations.collection_id)}
                            </td>
                            <td>{truncate(collectionTranslations.locale)}</td>
                            <td>{truncate(collectionTranslations.slug)}</td>
                            <td>{truncate(collectionTranslations.title)}</td>
                            <td>
                                {truncate(
                                    collectionTranslations.short_description
                                )}
                            </td>
                            <td>
                                {truncate(
                                    collectionTranslations.long_description
                                )}
                            </td>
                            <td>
                                {truncate(
                                    collectionTranslations.featured_image
                                )}
                            </td>
                            <td>
                                {jsonTruncate(collectionTranslations.formdata)}
                            </td>
                            <td>
                                {jsonTruncate(
                                    collectionTranslations.jsonschema
                                )}
                            </td>
                            <td>
                                {jsonTruncate(collectionTranslations.uischema)}
                            </td>
                            <td>
                                <nav className="rw-table-actions">
                                    <Link
                                        to={routes.collectionTranslations({
                                            id: collectionTranslations.id
                                        })}
                                        title={
                                            'Show collectionTranslations ' +
                                            collectionTranslations.id +
                                            ' detail'
                                        }
                                        className="rw-button rw-button-small"
                                    >
                                        Show
                                    </Link>
                                    <Link
                                        to={routes.editCollectionTranslations({
                                            id: collectionTranslations.id
                                        })}
                                        title={
                                            'Edit collectionTranslations ' +
                                            collectionTranslations.id
                                        }
                                        className="rw-button rw-button-small rw-button-blue"
                                    >
                                        Edit
                                    </Link>
                                    <button
                                        type="button"
                                        title={
                                            'Delete collectionTranslations ' +
                                            collectionTranslations.id
                                        }
                                        className="rw-button rw-button-small rw-button-red"
                                        onClick={() =>
                                            onDeleteClick(
                                                collectionTranslations.id
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

export default CollectionTranslationsesList;
