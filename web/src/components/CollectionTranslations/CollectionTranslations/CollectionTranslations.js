import { Link, routes, navigate } from '@redwoodjs/router';
import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';

import { jsonDisplay } from 'src/lib/formatters';

const DELETE_COLLECTION_TRANSLATIONS_MUTATION = gql`
    mutation DeleteCollectionTranslationsMutation($id: BigInt!) {
        deleteCollectionTranslations(id: $id) {
            id
        }
    }
`;

const CollectionTranslations = ({ collectionTranslations }) => {
    const [deleteCollectionTranslations] = useMutation(
        DELETE_COLLECTION_TRANSLATIONS_MUTATION,
        {
            onCompleted: () => {
                toast.success('CollectionTranslations deleted');
                navigate(routes.collectionTranslationses());
            },
            onError: (error) => {
                toast.error(error.message);
            }
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
        <>
            <div className="rw-segment">
                <header className="rw-segment-header">
                    <h2 className="rw-heading rw-heading-secondary">
                        CollectionTranslations {collectionTranslations.id}{' '}
                        Detail
                    </h2>
                </header>
                <table className="rw-table">
                    <tbody>
                        <tr>
                            <th>Id</th>
                            <td>{collectionTranslations.id}</td>
                        </tr>
                        <tr>
                            <th>Collection id</th>
                            <td>{collectionTranslations.collection_id}</td>
                        </tr>
                        <tr>
                            <th>Locale</th>
                            <td>{collectionTranslations.locale}</td>
                        </tr>
                        <tr>
                            <th>Slug</th>
                            <td>{collectionTranslations.slug}</td>
                        </tr>
                        <tr>
                            <th>Title</th>
                            <td>{collectionTranslations.title}</td>
                        </tr>
                        <tr>
                            <th>Short description</th>
                            <td>{collectionTranslations.short_description}</td>
                        </tr>
                        <tr>
                            <th>Long description</th>
                            <td>{collectionTranslations.long_description}</td>
                        </tr>
                        <tr>
                            <th>Featured image</th>
                            <td>{collectionTranslations.featured_image}</td>
                        </tr>
                        <tr>
                            <th>Formdata</th>
                            <td>
                                {jsonDisplay(collectionTranslations.formdata)}
                            </td>
                        </tr>
                        <tr>
                            <th>Jsonschema</th>
                            <td>
                                {jsonDisplay(collectionTranslations.jsonschema)}
                            </td>
                        </tr>
                        <tr>
                            <th>Uischema</th>
                            <td>
                                {jsonDisplay(collectionTranslations.uischema)}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <nav className="rw-button-group">
                <Link
                    to={routes.editCollectionTranslations({
                        id: collectionTranslations.id
                    })}
                    className="rw-button rw-button-blue"
                >
                    Edit
                </Link>
                <button
                    type="button"
                    className="rw-button rw-button-red"
                    onClick={() => onDeleteClick(collectionTranslations.id)}
                >
                    Delete
                </button>
            </nav>
        </>
    );
};

export default CollectionTranslations;
