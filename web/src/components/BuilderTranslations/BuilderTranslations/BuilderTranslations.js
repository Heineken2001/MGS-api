import { Link, routes, navigate } from '@redwoodjs/router';
import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';

import { jsonDisplay } from 'src/lib/formatters';

const DELETE_BUILDER_TRANSLATIONS_MUTATION = gql`
    mutation DeleteBuilderTranslationsMutation($id: BigInt!) {
        deleteBuilderTranslations(id: $id) {
            id
        }
    }
`;

const BuilderTranslations = ({ builderTranslations }) => {
    const [deleteBuilderTranslations] = useMutation(
        DELETE_BUILDER_TRANSLATIONS_MUTATION,
        {
            onCompleted: () => {
                toast.success('BuilderTranslations deleted');
                navigate(routes.builderTranslationses());
            },
            onError: (error) => {
                toast.error(error.message);
            }
        }
    );

    const onDeleteClick = (id) => {
        if (
            confirm(
                'Are you sure you want to delete builderTranslations ' +
                    id +
                    '?'
            )
        ) {
            deleteBuilderTranslations({ variables: { id } });
        }
    };

    return (
        <>
            <div className="rw-segment">
                <header className="rw-segment-header">
                    <h2 className="rw-heading rw-heading-secondary">
                        BuilderTranslations {builderTranslations.id} Detail
                    </h2>
                </header>
                <table className="rw-table">
                    <tbody>
                        <tr>
                            <th>Id</th>
                            <td>{builderTranslations.id}</td>
                        </tr>
                        <tr>
                            <th>Builder id</th>
                            <td>{builderTranslations.builder_id}</td>
                        </tr>
                        <tr>
                            <th>Locale</th>
                            <td>{builderTranslations.locale}</td>
                        </tr>
                        <tr>
                            <th>Name</th>
                            <td>{builderTranslations.name}</td>
                        </tr>
                        <tr>
                            <th>Body</th>
                            <td>{builderTranslations.body}</td>
                        </tr>
                        <tr>
                            <th>Embedded</th>
                            <td>{builderTranslations.embedded}</td>
                        </tr>
                        <tr>
                            <th>Jsonschemaform</th>
                            <td>
                                {jsonDisplay(
                                    builderTranslations.jsonschemaform
                                )}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <nav className="rw-button-group">
                <Link
                    to={routes.editBuilderTranslations({
                        id: builderTranslations.id
                    })}
                    className="rw-button rw-button-blue"
                >
                    Edit
                </Link>
                <button
                    type="button"
                    className="rw-button rw-button-red"
                    onClick={() => onDeleteClick(builderTranslations.id)}
                >
                    Delete
                </button>
            </nav>
        </>
    );
};

export default BuilderTranslations;
