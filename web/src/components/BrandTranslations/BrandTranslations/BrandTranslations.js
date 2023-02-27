import { Link, routes, navigate } from '@redwoodjs/router';
import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';

import 'src/lib/formatters';

const DELETE_BRAND_TRANSLATIONS_MUTATION = gql`
    mutation DeleteBrandTranslationsMutation($id: BigInt!) {
        deleteBrandTranslations(id: $id) {
            id
        }
    }
`;

const BrandTranslations = ({ brandTranslations }) => {
    const [deleteBrandTranslations] = useMutation(
        DELETE_BRAND_TRANSLATIONS_MUTATION,
        {
            onCompleted: () => {
                toast.success('BrandTranslations deleted');
                navigate(routes.brandTranslationses());
            },
            onError: (error) => {
                toast.error(error.message);
            }
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
        <>
            <div className="rw-segment">
                <header className="rw-segment-header">
                    <h2 className="rw-heading rw-heading-secondary">
                        BrandTranslations {brandTranslations.id} Detail
                    </h2>
                </header>
                <table className="rw-table">
                    <tbody>
                        <tr>
                            <th>Id</th>
                            <td>{brandTranslations.id}</td>
                        </tr>
                        <tr>
                            <th>Brand id</th>
                            <td>{brandTranslations.brand_id}</td>
                        </tr>
                        <tr>
                            <th>Locale</th>
                            <td>{brandTranslations.locale}</td>
                        </tr>
                        <tr>
                            <th>Name</th>
                            <td>{brandTranslations.name}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <nav className="rw-button-group">
                <Link
                    to={routes.editBrandTranslations({
                        id: brandTranslations.id
                    })}
                    className="rw-button rw-button-blue"
                >
                    Edit
                </Link>
                <button
                    type="button"
                    className="rw-button rw-button-red"
                    onClick={() => onDeleteClick(brandTranslations.id)}
                >
                    Delete
                </button>
            </nav>
        </>
    );
};

export default BrandTranslations;
