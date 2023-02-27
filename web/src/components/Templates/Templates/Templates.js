import { Link, routes, navigate } from '@redwoodjs/router';
import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';

import { checkboxInputTag, timeTag } from 'src/lib/formatters';

const DELETE_TEMPLATES_MUTATION = gql`
    mutation DeleteTemplatesMutation($id: BigInt!) {
        deleteTemplates(id: $id) {
            id
        }
    }
`;

const Templates = ({ templates }) => {
    const [deleteTemplates] = useMutation(DELETE_TEMPLATES_MUTATION, {
        onCompleted: () => {
            toast.success('Templates deleted');
            navigate(routes.templateses());
        },
        onError: (error) => {
            toast.error(error.message);
        }
    });

    const onDeleteClick = (id) => {
        if (confirm('Are you sure you want to delete templates ' + id + '?')) {
            deleteTemplates({ variables: { id } });
        }
    };

    return (
        <>
            <div className="rw-segment">
                <header className="rw-segment-header">
                    <h2 className="rw-heading rw-heading-secondary">
                        Templates {templates.id} Detail
                    </h2>
                </header>
                <table className="rw-table">
                    <tbody>
                        <tr>
                            <th>Id</th>
                            <td>{templates.id}</td>
                        </tr>
                        <tr>
                            <th>Is active</th>
                            <td>{checkboxInputTag(templates.is_active)}</td>
                        </tr>
                        <tr>
                            <th>Deleted at</th>
                            <td>{timeTag(templates.deleted_at)}</td>
                        </tr>
                        <tr>
                            <th>Created at</th>
                            <td>{timeTag(templates.created_at)}</td>
                        </tr>
                        <tr>
                            <th>Updated at</th>
                            <td>{timeTag(templates.updated_at)}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <nav className="rw-button-group">
                <Link
                    to={routes.editTemplates({ id: templates.id })}
                    className="rw-button rw-button-blue"
                >
                    Edit
                </Link>
                <button
                    type="button"
                    className="rw-button rw-button-red"
                    onClick={() => onDeleteClick(templates.id)}
                >
                    Delete
                </button>
            </nav>
        </>
    );
};

export default Templates;
