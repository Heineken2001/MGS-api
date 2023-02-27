import { Link, routes } from '@redwoodjs/router';
import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';

import { QUERY } from 'src/components/Brands/BrandsesCell';
import { checkboxInputTag, timeTag, truncate } from 'src/lib/formatters';

const DELETE_BRANDS_MUTATION = gql`
    mutation DeleteBrandsMutation($id: BigInt!) {
        deleteBrands(id: $id) {
            id
        }
    }
`;

const BrandsesList = ({ brandses }) => {
    const [deleteBrands] = useMutation(DELETE_BRANDS_MUTATION, {
        onCompleted: () => {
            toast.success('Brands deleted');
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
        if (confirm('Are you sure you want to delete brands ' + id + '?')) {
            deleteBrands({ variables: { id } });
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
                        <th>Created at</th>
                        <th>Updated at</th>
                        <th>&nbsp;</th>
                    </tr>
                </thead>
                <tbody>
                    {brandses.map((brands) => (
                        <tr key={brands.id}>
                            <td>{truncate(brands.id)}</td>
                            <td>{truncate(brands.slug)}</td>
                            <td>{checkboxInputTag(brands.is_active)}</td>
                            <td>{timeTag(brands.created_at)}</td>
                            <td>{timeTag(brands.updated_at)}</td>
                            <td>
                                <nav className="rw-table-actions">
                                    <Link
                                        to={routes.brands({ id: brands.id })}
                                        title={
                                            'Show brands ' +
                                            brands.id +
                                            ' detail'
                                        }
                                        className="rw-button rw-button-small"
                                    >
                                        Show
                                    </Link>
                                    <Link
                                        to={routes.editBrands({
                                            id: brands.id
                                        })}
                                        title={'Edit brands ' + brands.id}
                                        className="rw-button rw-button-small rw-button-blue"
                                    >
                                        Edit
                                    </Link>
                                    <button
                                        type="button"
                                        title={'Delete brands ' + brands.id}
                                        className="rw-button rw-button-small rw-button-red"
                                        onClick={() => onDeleteClick(brands.id)}
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

export default BrandsesList;
