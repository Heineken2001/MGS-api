import CouponTranslations from 'src/components/CouponTranslations/CouponTranslations';

export const QUERY = gql`
    query FindCouponTranslationsById($id: BigInt!) {
        couponTranslations: couponTranslations(id: $id) {
            id
            coupon_id
            locale
            name
        }
    }
`;

export const Loading = () => <div>Loading...</div>;

export const Empty = () => <div>CouponTranslations not found</div>;

export const Failure = ({ error }) => (
    <div className="rw-cell-error">{error?.message}</div>
);

export const Success = ({ couponTranslations }) => {
    return <CouponTranslations couponTranslations={couponTranslations} />;
};
