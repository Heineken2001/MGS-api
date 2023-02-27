import { Link, routes, navigate } from '@redwoodjs/router';
import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';

import { checkboxInputTag, timeTag } from 'src/lib/formatters';

const DELETE_COUPONS_MUTATION = gql`
    mutation DeleteCouponsMutation($id: BigInt!) {
        deleteCoupons(id: $id) {
            id
        }
    }
`;

const Coupons = ({ coupons }) => {
    const [deleteCoupons] = useMutation(DELETE_COUPONS_MUTATION, {
        onCompleted: () => {
            toast.success('Coupons deleted');
            navigate(routes.couponses());
        },
        onError: (error) => {
            toast.error(error.message);
        }
    });

    const onDeleteClick = (id) => {
        if (confirm('Are you sure you want to delete coupons ' + id + '?')) {
            deleteCoupons({ variables: { id } });
        }
    };

    return (
        <>
            <div className="rw-segment">
                <header className="rw-segment-header">
                    <h2 className="rw-heading rw-heading-secondary">
                        Coupons {coupons.id} Detail
                    </h2>
                </header>
                <table className="rw-table">
                    <tbody>
                        <tr>
                            <th>Id</th>
                            <td>{coupons.id}</td>
                        </tr>
                        <tr>
                            <th>Code</th>
                            <td>{coupons.code}</td>
                        </tr>
                        <tr>
                            <th>Value</th>
                            <td>{coupons.value}</td>
                        </tr>
                        <tr>
                            <th>Is percent</th>
                            <td>{checkboxInputTag(coupons.is_percent)}</td>
                        </tr>
                        <tr>
                            <th>Free shipping</th>
                            <td>{checkboxInputTag(coupons.free_shipping)}</td>
                        </tr>
                        <tr>
                            <th>Minimum spend</th>
                            <td>{coupons.minimum_spend}</td>
                        </tr>
                        <tr>
                            <th>Maximum spend</th>
                            <td>{coupons.maximum_spend}</td>
                        </tr>
                        <tr>
                            <th>Usage limit per coupon</th>
                            <td>{coupons.usage_limit_per_coupon}</td>
                        </tr>
                        <tr>
                            <th>Usage limut per customer</th>
                            <td>{coupons.usage_limut_per_customer}</td>
                        </tr>
                        <tr>
                            <th>Used</th>
                            <td>{coupons.used}</td>
                        </tr>
                        <tr>
                            <th>Is active</th>
                            <td>{checkboxInputTag(coupons.is_active)}</td>
                        </tr>
                        <tr>
                            <th>Start date</th>
                            <td>{timeTag(coupons.start_date)}</td>
                        </tr>
                        <tr>
                            <th>End date</th>
                            <td>{timeTag(coupons.end_date)}</td>
                        </tr>
                        <tr>
                            <th>Deleted at</th>
                            <td>{timeTag(coupons.deleted_at)}</td>
                        </tr>
                        <tr>
                            <th>Created at</th>
                            <td>{timeTag(coupons.created_at)}</td>
                        </tr>
                        <tr>
                            <th>Updated at</th>
                            <td>{timeTag(coupons.updated_at)}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <nav className="rw-button-group">
                <Link
                    to={routes.editCoupons({ id: coupons.id })}
                    className="rw-button rw-button-blue"
                >
                    Edit
                </Link>
                <button
                    type="button"
                    className="rw-button rw-button-red"
                    onClick={() => onDeleteClick(coupons.id)}
                >
                    Delete
                </button>
            </nav>
        </>
    );
};

export default Coupons;
