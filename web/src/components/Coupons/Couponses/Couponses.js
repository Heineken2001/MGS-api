import { Link, routes } from '@redwoodjs/router';
import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';

import { QUERY } from 'src/components/Coupons/CouponsesCell';
import { checkboxInputTag, timeTag, truncate } from 'src/lib/formatters';

const DELETE_COUPONS_MUTATION = gql`
    mutation DeleteCouponsMutation($id: BigInt!) {
        deleteCoupons(id: $id) {
            id
        }
    }
`;

const CouponsesList = ({ couponses }) => {
    const [deleteCoupons] = useMutation(DELETE_COUPONS_MUTATION, {
        onCompleted: () => {
            toast.success('Coupons deleted');
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
        if (confirm('Are you sure you want to delete coupons ' + id + '?')) {
            deleteCoupons({ variables: { id } });
        }
    };

    return (
        <div className="rw-segment rw-table-wrapper-responsive">
            <table className="rw-table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Code</th>
                        <th>Value</th>
                        <th>Is percent</th>
                        <th>Free shipping</th>
                        <th>Minimum spend</th>
                        <th>Maximum spend</th>
                        <th>Usage limit per coupon</th>
                        <th>Usage limut per customer</th>
                        <th>Used</th>
                        <th>Is active</th>
                        <th>Start date</th>
                        <th>End date</th>
                        <th>Deleted at</th>
                        <th>Created at</th>
                        <th>Updated at</th>
                        <th>&nbsp;</th>
                    </tr>
                </thead>
                <tbody>
                    {couponses.map((coupons) => (
                        <tr key={coupons.id}>
                            <td>{truncate(coupons.id)}</td>
                            <td>{truncate(coupons.code)}</td>
                            <td>{truncate(coupons.value)}</td>
                            <td>{checkboxInputTag(coupons.is_percent)}</td>
                            <td>{checkboxInputTag(coupons.free_shipping)}</td>
                            <td>{truncate(coupons.minimum_spend)}</td>
                            <td>{truncate(coupons.maximum_spend)}</td>
                            <td>{truncate(coupons.usage_limit_per_coupon)}</td>
                            <td>
                                {truncate(coupons.usage_limut_per_customer)}
                            </td>
                            <td>{truncate(coupons.used)}</td>
                            <td>{checkboxInputTag(coupons.is_active)}</td>
                            <td>{timeTag(coupons.start_date)}</td>
                            <td>{timeTag(coupons.end_date)}</td>
                            <td>{timeTag(coupons.deleted_at)}</td>
                            <td>{timeTag(coupons.created_at)}</td>
                            <td>{timeTag(coupons.updated_at)}</td>
                            <td>
                                <nav className="rw-table-actions">
                                    <Link
                                        to={routes.coupons({ id: coupons.id })}
                                        title={
                                            'Show coupons ' +
                                            coupons.id +
                                            ' detail'
                                        }
                                        className="rw-button rw-button-small"
                                    >
                                        Show
                                    </Link>
                                    <Link
                                        to={routes.editCoupons({
                                            id: coupons.id
                                        })}
                                        title={'Edit coupons ' + coupons.id}
                                        className="rw-button rw-button-small rw-button-blue"
                                    >
                                        Edit
                                    </Link>
                                    <button
                                        type="button"
                                        title={'Delete coupons ' + coupons.id}
                                        className="rw-button rw-button-small rw-button-red"
                                        onClick={() =>
                                            onDeleteClick(coupons.id)
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

export default CouponsesList;
