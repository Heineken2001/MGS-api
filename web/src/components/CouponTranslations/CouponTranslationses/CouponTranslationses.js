import { Link, routes } from '@redwoodjs/router';
import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';

import { QUERY } from 'src/components/CouponTranslations/CouponTranslationsesCell';
import { truncate } from 'src/lib/formatters';

const DELETE_COUPON_TRANSLATIONS_MUTATION = gql`
    mutation DeleteCouponTranslationsMutation($id: BigInt!) {
        deleteCouponTranslations(id: $id) {
            id
        }
    }
`;

const CouponTranslationsesList = ({ couponTranslationses }) => {
    const [deleteCouponTranslations] = useMutation(
        DELETE_COUPON_TRANSLATIONS_MUTATION,
        {
            onCompleted: () => {
                toast.success('CouponTranslations deleted');
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
                'Are you sure you want to delete couponTranslations ' + id + '?'
            )
        ) {
            deleteCouponTranslations({ variables: { id } });
        }
    };

    return (
        <div className="rw-segment rw-table-wrapper-responsive">
            <table className="rw-table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Coupon id</th>
                        <th>Locale</th>
                        <th>Name</th>
                        <th>&nbsp;</th>
                    </tr>
                </thead>
                <tbody>
                    {couponTranslationses.map((couponTranslations) => (
                        <tr key={couponTranslations.id}>
                            <td>{truncate(couponTranslations.id)}</td>
                            <td>{truncate(couponTranslations.coupon_id)}</td>
                            <td>{truncate(couponTranslations.locale)}</td>
                            <td>{truncate(couponTranslations.name)}</td>
                            <td>
                                <nav className="rw-table-actions">
                                    <Link
                                        to={routes.couponTranslations({
                                            id: couponTranslations.id
                                        })}
                                        title={
                                            'Show couponTranslations ' +
                                            couponTranslations.id +
                                            ' detail'
                                        }
                                        className="rw-button rw-button-small"
                                    >
                                        Show
                                    </Link>
                                    <Link
                                        to={routes.editCouponTranslations({
                                            id: couponTranslations.id
                                        })}
                                        title={
                                            'Edit couponTranslations ' +
                                            couponTranslations.id
                                        }
                                        className="rw-button rw-button-small rw-button-blue"
                                    >
                                        Edit
                                    </Link>
                                    <button
                                        type="button"
                                        title={
                                            'Delete couponTranslations ' +
                                            couponTranslations.id
                                        }
                                        className="rw-button rw-button-small rw-button-red"
                                        onClick={() =>
                                            onDeleteClick(couponTranslations.id)
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

export default CouponTranslationsesList;
