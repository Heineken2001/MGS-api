import { Link, routes } from '@redwoodjs/router';
import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';

import { QUERY } from 'src/components/BrandTranslations/BrandTranslationsesCell';
import { truncate } from 'src/lib/formatters';

const DELETE_BRAND_TRANSLATIONS_MUTATION = gql`
    mutation DeleteBrandTranslationsMutation($id: BigInt!) {
        deleteBrandTranslations(id: $id) {
            id
        }
    }
`;

const BrandTranslationsesList = ({ brandTranslationses }) => {
    const [deleteBrandTranslations] = useMutation(
        DELETE_BRAND_TRANSLATIONS_MUTATION,
        {
            onCompleted: () => {
                toast.success('BrandTranslations deleted');
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
                'Are you sure you want to delete brandTranslations ' + id + '?'
            )
        ) {
            deleteBrandTranslations({ variables: { id } });
        }
    };

    return (
        <div className="rw-segment rw-table-wrapper-responsive">
            <table className="rw-table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Brand id</th>
                        <th>Locale</th>
                        <th>Name</th>
                        <th>&nbsp;</th>
                    </tr>
                </thead>
                <tbody>
                    {brandTranslationses.map((brandTranslations) => (
                        <tr key={brandTranslations.id}>
                            <td>{truncate(brandTranslations.id)}</td>
                            <td>{truncate(brandTranslations.brand_id)}</td>
                            <td>{truncate(brandTranslations.locale)}</td>
                            <td>{truncate(brandTranslations.name)}</td>
                            <td>
                                <nav className="rw-table-actions">
                                    <Link
                                        to={routes.brandTranslations({
                                            id: brandTranslations.id
                                        })}
                                        title={
                                            'Show brandTranslations ' +
                                            brandTranslations.id +
                                            ' detail'
                                        }
                                        className="rw-button rw-button-small"
                                    >
                                        Show
                                    </Link>
                                    <Link
                                        to={routes.editBrandTranslations({
                                            id: brandTranslations.id
                                        })}
                                        title={
                                            'Edit brandTranslations ' +
                                            brandTranslations.id
                                        }
                                        className="rw-button rw-button-small rw-button-blue"
                                    >
                                        Edit
                                    </Link>
                                    <button
                                        type="button"
                                        title={
                                            'Delete brandTranslations ' +
                                            brandTranslations.id
                                        }
                                        className="rw-button rw-button-small rw-button-red"
                                        onClick={() =>
                                            onDeleteClick(brandTranslations.id)
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

export default BrandTranslationsesList;
