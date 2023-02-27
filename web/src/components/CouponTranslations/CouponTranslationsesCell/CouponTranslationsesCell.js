import { Link, routes } from '@redwoodjs/router';

import CouponTranslationses from 'src/components/CouponTranslations/CouponTranslationses';

export const QUERY = gql`
    query FindCouponTranslationses {
        couponTranslationses {
            id
            coupon_id
            locale
            name
        }
    }
`;

export const Loading = () => <div>Loading...</div>;

export const Empty = () => {
    return (
        <div className="rw-text-center">
            {'No couponTranslationses yet. '}
            <Link to={routes.newCouponTranslations()} className="rw-link">
                {'Create one?'}
            </Link>
        </div>
    );
};

export const Failure = ({ error }) => (
    <div className="rw-cell-error">{error?.message}</div>
);

export const Success = ({ couponTranslationses }) => {
    return <CouponTranslationses couponTranslationses={couponTranslationses} />;
};
