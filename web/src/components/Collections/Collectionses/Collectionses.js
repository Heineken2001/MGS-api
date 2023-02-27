import { Link, routes } from '@redwoodjs/router';
import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';

import { QUERY } from 'src/components/Collections/CollectionsesCell';
import {
    checkboxInputTag,
    jsonTruncate,
    timeTag,
    truncate
} from 'src/lib/formatters';

const DELETE_COLLECTIONS_MUTATION = gql`
    mutation DeleteCollectionsMutation($id: BigInt!) {
        deleteCollections(id: $id) {
            id
        }
    }
`;

const CollectionsesList = ({ collectionses }) => {
    const [deleteCollections] = useMutation(DELETE_COLLECTIONS_MUTATION, {
        onCompleted: () => {
            toast.success('Collections deleted');
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
            confirm('Are you sure you want to delete collections ' + id + '?')
        ) {
            deleteCollections({ variables: { id } });
        }
    };

    return (
        <div className="rw-segment rw-table-wrapper-responsive">
            <table className="rw-table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Target</th>
                        <th>Conditions</th>
                        <th>Type</th>
                        <th>Is active</th>
                        <th>Deleted at</th>
                        <th>Created at</th>
                        <th>Updated at</th>
                        <th>Post type</th>
                        <th>&nbsp;</th>
                    </tr>
                </thead>
                <tbody>
                    {collectionses.map((collections) => (
                        <tr key={collections.id}>
                            <td>{truncate(collections.id)}</td>
                            <td>{truncate(collections.target)}</td>
                            <td>{jsonTruncate(collections.conditions)}</td>
                            <td>{truncate(collections.type)}</td>
                            <td>{checkboxInputTag(collections.is_active)}</td>
                            <td>{timeTag(collections.deleted_at)}</td>
                            <td>{timeTag(collections.created_at)}</td>
                            <td>{timeTag(collections.updated_at)}</td>
                            <td>{truncate(collections.post_type)}</td>
                            <td>
                                <nav className="rw-table-actions">
                                    <Link
                                        to={routes.collections({
                                            id: collections.id
                                        })}
                                        title={
                                            'Show collections ' +
                                            collections.id +
                                            ' detail'
                                        }
                                        className="rw-button rw-button-small"
                                    >
                                        Show
                                    </Link>
                                    <Link
                                        to={routes.editCollections({
                                            id: collections.id
                                        })}
                                        title={
                                            'Edit collections ' + collections.id
                                        }
                                        className="rw-button rw-button-small rw-button-blue"
                                    >
                                        Edit
                                    </Link>
                                    <button
                                        type="button"
                                        title={
                                            'Delete collections ' +
                                            collections.id
                                        }
                                        className="rw-button rw-button-small rw-button-red"
                                        onClick={() =>
                                            onDeleteClick(collections.id)
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

export default CollectionsesList;
