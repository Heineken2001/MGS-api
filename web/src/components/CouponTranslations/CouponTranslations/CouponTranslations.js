import { Link, routes, navigate } from '@redwoodjs/router';
import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';

import 'src/lib/formatters';

const DELETE_COUPON_TRANSLATIONS_MUTATION = gql`
    mutation DeleteCouponTranslationsMutation($id: BigInt!) {
        deleteCouponTranslations(id: $id) {
            id
        }
    }
`;

const CouponTranslations = ({ couponTranslations }) => {
    const [deleteCouponTranslations] = useMutation(
        DELETE_COUPON_TRANSLATIONS_MUTATION,
        {
            onCompleted: () => {
                toast.success('CouponTranslations deleted');
                navigate(routes.couponTranslationses());
            },
            onError: (error) => {
                toast.error(error.message);
            }
        }
    );

    const onDeleteClick = (id) => {
        if (
            confirm(
                'Are you sure you want to delete couponTranslations ' + id + '?'
            )
        ) {
            deleteCouponTranslations({ variables: { id } });
        }
    };

    return (
        <>
            <div className="rw-segment">
                <header className="rw-segment-header">
                    <h2 className="rw-heading rw-heading-secondary">
                        CouponTranslations {couponTranslations.id} Detail
                    </h2>
                </header>
                <table className="rw-table">
                    <tbody>
                        <tr>
                            <th>Id</th>
                            <td>{couponTranslations.id}</td>
                        </tr>
                        <tr>
                            <th>Coupon id</th>
                            <td>{couponTranslations.coupon_id}</td>
                        </tr>
                        <tr>
                            <th>Locale</th>
                            <td>{couponTranslations.locale}</td>
                        </tr>
                        <tr>
                            <th>Name</th>
                            <td>{couponTranslations.name}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <nav className="rw-button-group">
                <Link
                    to={routes.editCouponTranslations({
                        id: couponTranslations.id
                    })}
                    className="rw-button rw-button-blue"
                >
                    Edit
                </Link>
                <button
                    type="button"
                    className="rw-button rw-button-red"
                    onClick={() => onDeleteClick(couponTranslations.id)}
                >
                    Delete
                </button>
            </nav>
        </>
    );
};

export default CouponTranslations;
