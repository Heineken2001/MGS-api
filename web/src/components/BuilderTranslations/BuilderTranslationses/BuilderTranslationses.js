import { Link, routes } from '@redwoodjs/router';
import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';

import { QUERY } from 'src/components/BuilderTranslations/BuilderTranslationsesCell';
import { jsonTruncate, truncate } from 'src/lib/formatters';

const DELETE_BUILDER_TRANSLATIONS_MUTATION = gql`
    mutation DeleteBuilderTranslationsMutation($id: BigInt!) {
        deleteBuilderTranslations(id: $id) {
            id
        }
    }
`;

const BuilderTranslationsesList = ({ builderTranslationses }) => {
    const [deleteBuilderTranslations] = useMutation(
        DELETE_BUILDER_TRANSLATIONS_MUTATION,
        {
            onCompleted: () => {
                toast.success('BuilderTranslations deleted');
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
                'Are you sure you want to delete builderTranslations ' +
                    id +
                    '?'
            )
        ) {
            deleteBuilderTranslations({ variables: { id } });
        }
    };

    return (
        <div className="rw-segment rw-table-wrapper-responsive">
            <table className="rw-table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Builder id</th>
                        <th>Locale</th>
                        <th>Name</th>
                        <th>Body</th>
                        <th>Embedded</th>
                        <th>Jsonschemaform</th>
                        <th>&nbsp;</th>
                    </tr>
                </thead>
                <tbody>
                    {builderTranslationses.map((builderTranslations) => (
                        <tr key={builderTranslations.id}>
                            <td>{truncate(builderTranslations.id)}</td>
                            <td>{truncate(builderTranslations.builder_id)}</td>
                            <td>{truncate(builderTranslations.locale)}</td>
                            <td>{truncate(builderTranslations.name)}</td>
                            <td>{truncate(builderTranslations.body)}</td>
                            <td>{truncate(builderTranslations.embedded)}</td>
                            <td>
                                {jsonTruncate(
                                    builderTranslations.jsonschemaform
                                )}
                            </td>
                            <td>
                                <nav className="rw-table-actions">
                                    <Link
                                        to={routes.builderTranslations({
                                            id: builderTranslations.id
                                        })}
                                        title={
                                            'Show builderTranslations ' +
                                            builderTranslations.id +
                                            ' detail'
                                        }
                                        className="rw-button rw-button-small"
                                    >
                                        Show
                                    </Link>
                                    <Link
                                        to={routes.editBuilderTranslations({
                                            id: builderTranslations.id
                                        })}
                                        title={
                                            'Edit builderTranslations ' +
                                            builderTranslations.id
                                        }
                                        className="rw-button rw-button-small rw-button-blue"
                                    >
                                        Edit
                                    </Link>
                                    <button
                                        type="button"
                                        title={
                                            'Delete builderTranslations ' +
                                            builderTranslations.id
                                        }
                                        className="rw-button rw-button-small rw-button-red"
                                        onClick={() =>
                                            onDeleteClick(
                                                builderTranslations.id
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

export default BuilderTranslationsesList;
