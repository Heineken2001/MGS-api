import { Link, routes } from '@redwoodjs/router';
import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';

import { QUERY } from 'src/components/Templates/TemplatesesCell';
import { checkboxInputTag, timeTag, truncate } from 'src/lib/formatters';

const DELETE_TEMPLATES_MUTATION = gql`
    mutation DeleteTemplatesMutation($id: BigInt!) {
        deleteTemplates(id: $id) {
            id
        }
    }
`;

const TemplatesesList = ({ templateses }) => {
    const [deleteTemplates] = useMutation(DELETE_TEMPLATES_MUTATION, {
        onCompleted: () => {
            toast.success('Templates deleted');
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
        if (confirm('Are you sure you want to delete templates ' + id + '?')) {
            deleteTemplates({ variables: { id } });
        }
    };

    return (
        <div className="rw-segment rw-table-wrapper-responsive">
            <table className="rw-table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Is active</th>
                        <th>Deleted at</th>
                        <th>Created at</th>
                        <th>Updated at</th>
                        <th>&nbsp;</th>
                    </tr>
                </thead>
                <tbody>
                    {templateses.map((templates) => (
                        <tr key={templates.id}>
                            <td>{truncate(templates.id)}</td>
                            <td>{checkboxInputTag(templates.is_active)}</td>
                            <td>{timeTag(templates.deleted_at)}</td>
                            <td>{timeTag(templates.created_at)}</td>
                            <td>{timeTag(templates.updated_at)}</td>
                            <td>
                                <nav className="rw-table-actions">
                                    <Link
                                        to={routes.templates({
                                            id: templates.id
                                        })}
                                        title={
                                            'Show templates ' +
                                            templates.id +
                                            ' detail'
                                        }
                                        className="rw-button rw-button-small"
                                    >
                                        Show
                                    </Link>
                                    <Link
                                        to={routes.editTemplates({
                                            id: templates.id
                                        })}
                                        title={'Edit templates ' + templates.id}
                                        className="rw-button rw-button-small rw-button-blue"
                                    >
                                        Edit
                                    </Link>
                                    <button
                                        type="button"
                                        title={
                                            'Delete templates ' + templates.id
                                        }
                                        className="rw-button rw-button-small rw-button-red"
                                        onClick={() =>
                                            onDeleteClick(templates.id)
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

export default TemplatesesList;
