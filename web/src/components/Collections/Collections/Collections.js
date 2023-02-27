import { Link, routes, navigate } from '@redwoodjs/router';
import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';

import { checkboxInputTag, jsonDisplay, timeTag } from 'src/lib/formatters';

const DELETE_COLLECTIONS_MUTATION = gql`
    mutation DeleteCollectionsMutation($id: BigInt!) {
        deleteCollections(id: $id) {
            id
        }
    }
`;

const Collections = ({ collections }) => {
    const [deleteCollections] = useMutation(DELETE_COLLECTIONS_MUTATION, {
        onCompleted: () => {
            toast.success('Collections deleted');
            navigate(routes.collectionses());
        },
        onError: (error) => {
            toast.error(error.message);
        }
    });

    const onDeleteClick = (id) => {
        if (
            confirm('Are you sure you want to delete collections ' + id + '?')
        ) {
            deleteCollections({ variables: { id } });
        }
    };

    return (
        <>
            <div className="rw-segment">
                <header className="rw-segment-header">
                    <h2 className="rw-heading rw-heading-secondary">
                        Collections {collections.id} Detail
                    </h2>
                </header>
                <table className="rw-table">
                    <tbody>
                        <tr>
                            <th>Id</th>
                            <td>{collections.id}</td>
                        </tr>
                        <tr>
                            <th>Target</th>
                            <td>{collections.target}</td>
                        </tr>
                        <tr>
                            <th>Conditions</th>
                            <td>{jsonDisplay(collections.conditions)}</td>
                        </tr>
                        <tr>
                            <th>Type</th>
                            <td>{collections.type}</td>
                        </tr>
                        <tr>
                            <th>Is active</th>
                            <td>{checkboxInputTag(collections.is_active)}</td>
                        </tr>
                        <tr>
                            <th>Deleted at</th>
                            <td>{timeTag(collections.deleted_at)}</td>
                        </tr>
                        <tr>
                            <th>Created at</th>
                            <td>{timeTag(collections.created_at)}</td>
                        </tr>
                        <tr>
                            <th>Updated at</th>
                            <td>{timeTag(collections.updated_at)}</td>
                        </tr>
                        <tr>
                            <th>Post type</th>
                            <td>{collections.post_type}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <nav className="rw-button-group">
                <Link
                    to={routes.editCollections({ id: collections.id })}
                    className="rw-button rw-button-blue"
                >
                    Edit
                </Link>
                <button
                    type="button"
                    className="rw-button rw-button-red"
                    onClick={() => onDeleteClick(collections.id)}
                >
                    Delete
                </button>
            </nav>
        </>
    );
};

export default Collections;
