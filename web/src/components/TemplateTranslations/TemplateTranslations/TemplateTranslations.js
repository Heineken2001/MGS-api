import { Link, routes, navigate } from '@redwoodjs/router';
import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';

import 'src/lib/formatters';

const DELETE_TEMPLATE_TRANSLATIONS_MUTATION = gql`
    mutation DeleteTemplateTranslationsMutation($id: BigInt!) {
        deleteTemplateTranslations(id: $id) {
            id
        }
    }
`;

const TemplateTranslations = ({ templateTranslations }) => {
    const [deleteTemplateTranslations] = useMutation(
        DELETE_TEMPLATE_TRANSLATIONS_MUTATION,
        {
            onCompleted: () => {
                toast.success('TemplateTranslations deleted');
                navigate(routes.templateTranslationses());
            },
            onError: (error) => {
                toast.error(error.message);
            }
        }
    );

    const onDeleteClick = (id) => {
        if (
            confirm(
                'Are you sure you want to delete templateTranslations ' +
                    id +
                    '?'
            )
        ) {
            deleteTemplateTranslations({ variables: { id } });
        }
    };

    return (
        <>
            <div className="rw-segment">
                <header className="rw-segment-header">
                    <h2 className="rw-heading rw-heading-secondary">
                        TemplateTranslations {templateTranslations.id} Detail
                    </h2>
                </header>
                <table className="rw-table">
                    <tbody>
                        <tr>
                            <th>Id</th>
                            <td>{templateTranslations.id}</td>
                        </tr>
                        <tr>
                            <th>Template id</th>
                            <td>{templateTranslations.template_id}</td>
                        </tr>
                        <tr>
                            <th>Slug</th>
                            <td>{templateTranslations.slug}</td>
                        </tr>
                        <tr>
                            <th>Title</th>
                            <td>{templateTranslations.title}</td>
                        </tr>
                        <tr>
                            <th>Locale</th>
                            <td>{templateTranslations.locale}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <nav className="rw-button-group">
                <Link
                    to={routes.editTemplateTranslations({
                        id: templateTranslations.id
                    })}
                    className="rw-button rw-button-blue"
                >
                    Edit
                </Link>
                <button
                    type="button"
                    className="rw-button rw-button-red"
                    onClick={() => onDeleteClick(templateTranslations.id)}
                >
                    Delete
                </button>
            </nav>
        </>
    );
};

export default TemplateTranslations;
