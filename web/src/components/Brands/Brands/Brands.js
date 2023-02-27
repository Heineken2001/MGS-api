import { Link, routes, navigate } from '@redwoodjs/router';
import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';

import { checkboxInputTag, timeTag } from 'src/lib/formatters';

const DELETE_BRANDS_MUTATION = gql`
    mutation DeleteBrandsMutation($id: BigInt!) {
        deleteBrands(id: $id) {
            id
        }
    }
`;

const Brands = ({ brands }) => {
    const [deleteBrands] = useMutation(DELETE_BRANDS_MUTATION, {
        onCompleted: () => {
            toast.success('Brands deleted');
            navigate(routes.brandses());
        },
        onError: (error) => {
            toast.error(error.message);
        }
    });

    const onDeleteClick = (id) => {
        if (confirm('Are you sure you want to delete brands ' + id + '?')) {
            deleteBrands({ variables: { id } });
        }
    };

    return (
        <>
            <div className="rw-segment">
                <header className="rw-segment-header">
                    <h2 className="rw-heading rw-heading-secondary">
                        Brands {brands.id} Detail
                    </h2>
                </header>
                <table className="rw-table">
                    <tbody>
                        <tr>
                            <th>Id</th>
                            <td>{brands.id}</td>
                        </tr>
                        <tr>
                            <th>Slug</th>
                            <td>{brands.slug}</td>
                        </tr>
                        <tr>
                            <th>Is active</th>
                            <td>{checkboxInputTag(brands.is_active)}</td>
                        </tr>
                        <tr>
                            <th>Created at</th>
                            <td>{timeTag(brands.created_at)}</td>
                        </tr>
                        <tr>
                            <th>Updated at</th>
                            <td>{timeTag(brands.updated_at)}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <nav className="rw-button-group">
                <Link
                    to={routes.editBrands({ id: brands.id })}
                    className="rw-button rw-button-blue"
                >
                    Edit
                </Link>
                <button
                    type="button"
                    className="rw-button rw-button-red"
                    onClick={() => onDeleteClick(brands.id)}
                >
                    Delete
                </button>
            </nav>
        </>
    );
};

export default Brands;
