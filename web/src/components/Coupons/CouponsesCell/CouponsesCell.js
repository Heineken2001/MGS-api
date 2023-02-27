import { Link, routes } from '@redwoodjs/router';

import Couponses from 'src/components/Coupons/Couponses';

export const QUERY = gql`
    query FindCouponses {
        couponses {
            id
            code
            value
            is_percent
            free_shipping
            minimum_spend
            maximum_spend
            usage_limit_per_coupon
            usage_limut_per_customer
            used
            is_active
            start_date
            end_date
            deleted_at
            created_at
            updated_at
        }
    }
`;

export const Loading = () => <div>Loading...</div>;

export const Empty = () => {
    return (
        <div className="rw-text-center">
            {'No couponses yet. '}
            <Link to={routes.newCoupons()} className="rw-link">
                {'Create one?'}
            </Link>
        </div>
    );
};

export const Failure = ({ error }) => (
    <div className="rw-cell-error">{error?.message}</div>
);

export const Success = ({ couponses }) => {
    return <Couponses couponses={couponses} />;
};
