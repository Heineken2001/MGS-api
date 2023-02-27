import { Link, routes } from '@redwoodjs/router';
import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';

import { QUERY } from 'src/components/TemplateTranslations/TemplateTranslationsesCell';
import { truncate } from 'src/lib/formatters';

const DELETE_TEMPLATE_TRANSLATIONS_MUTATION = gql`
    mutation DeleteTemplateTranslationsMutation($id: BigInt!) {
        deleteTemplateTranslations(id: $id) {
            id
        }
    }
`;

const TemplateTranslationsesList = ({ templateTranslationses }) => {
    const [deleteTemplateTranslations] = useMutation(
        DELETE_TEMPLATE_TRANSLATIONS_MUTATION,
        {
            onCompleted: () => {
                toast.success('TemplateTranslations deleted');
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
                'Are you sure you want to delete templateTranslations ' +
                    id +
                    '?'
            )
        ) {
            deleteTemplateTranslations({ variables: { id } });
        }
    };

    return (
        <div className="rw-segment rw-table-wrapper-responsive">
            <table className="rw-table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Template id</th>
                        <th>Slug</th>
                        <th>Title</th>
                        <th>Locale</th>
                        <th>&nbsp;</th>
                    </tr>
                </thead>
                <tbody>
                    {templateTranslationses.map((templateTranslations) => (
                        <tr key={templateTranslations.id}>
                            <td>{truncate(templateTranslations.id)}</td>
                            <td>
                                {truncate(templateTranslations.template_id)}
                            </td>
                            <td>{truncate(templateTranslations.slug)}</td>
                            <td>{truncate(templateTranslations.title)}</td>
                            <td>{truncate(templateTranslations.locale)}</td>
                            <td>
                                <nav className="rw-table-actions">
                                    <Link
                                        to={routes.templateTranslations({
                                            id: templateTranslations.id
                                        })}
                                        title={
                                            'Show templateTranslations ' +
                                            templateTranslations.id +
                                            ' detail'
                                        }
                                        className="rw-button rw-button-small"
                                    >
                                        Show
                                    </Link>
                                    <Link
                                        to={routes.editTemplateTranslations({
                                            id: templateTranslations.id
                                        })}
                                        title={
                                            'Edit templateTranslations ' +
                                            templateTranslations.id
                                        }
                                        className="rw-button rw-button-small rw-button-blue"
                                    >
                                        Edit
                                    </Link>
                                    <button
                                        type="button"
                                        title={
                                            'Delete templateTranslations ' +
                                            templateTranslations.id
                                        }
                                        className="rw-button rw-button-small rw-button-red"
                                        onClick={() =>
                                            onDeleteClick(
                                                templateTranslations.id
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

export default TemplateTranslationsesList;
