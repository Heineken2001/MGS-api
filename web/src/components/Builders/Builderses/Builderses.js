import { Link, routes } from '@redwoodjs/router';
import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';

import { QUERY } from 'src/components/Builders/BuildersesCell';
import { checkboxInputTag, timeTag, truncate } from 'src/lib/formatters';

const DELETE_BUILDERS_MUTATION = gql`
    mutation DeleteBuildersMutation($id: BigInt!) {
        deleteBuilders(id: $id) {
            id
        }
    }
`;

const BuildersesList = ({ builderses }) => {
    const [deleteBuilders] = useMutation(DELETE_BUILDERS_MUTATION, {
        onCompleted: () => {
            toast.success('Builders deleted');
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
        if (confirm('Are you sure you want to delete builders ' + id + '?')) {
            deleteBuilders({ variables: { id } });
        }
    };

    return (
        <div className="rw-segment rw-table-wrapper-responsive">
            <table className="rw-table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Slug</th>
                        <th>Is active</th>
                        <th>Is captcha</th>
                        <th>Is redirect</th>
                        <th>Site key</th>
                        <th>Secret key</th>
                        <th>Created at</th>
                        <th>Updated at</th>
                        <th>&nbsp;</th>
                    </tr>
                </thead>
                <tbody>
                    {builderses.map((builders) => (
                        <tr key={builders.id}>
                            <td>{truncate(builders.id)}</td>
                            <td>{truncate(builders.slug)}</td>
                            <td>{checkboxInputTag(builders.is_active)}</td>
                            <td>{checkboxInputTag(builders.is_captcha)}</td>
                            <td>{truncate(builders.is_redirect)}</td>
                            <td>{truncate(builders.site_key)}</td>
                            <td>{truncate(builders.secret_key)}</td>
                            <td>{timeTag(builders.created_at)}</td>
                            <td>{timeTag(builders.updated_at)}</td>
                            <td>
                                <nav className="rw-table-actions">
                                    <Link
                                        to={routes.builders({
                                            id: builders.id
                                        })}
                                        title={
                                            'Show builders ' +
                                            builders.id +
                                            ' detail'
                                        }
                                        className="rw-button rw-button-small"
                                    >
                                        Show
                                    </Link>
                                    <Link
                                        to={routes.editBuilders({
                                            id: builders.id
                                        })}
                                        title={'Edit builders ' + builders.id}
                                        className="rw-button rw-button-small rw-button-blue"
                                    >
                                        Edit
                                    </Link>
                                    <button
                                        type="button"
                                        title={'Delete builders ' + builders.id}
                                        className="rw-button rw-button-small rw-button-red"
                                        onClick={() =>
                                            onDeleteClick(builders.id)
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

export default BuildersesList;
