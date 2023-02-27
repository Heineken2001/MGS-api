import Coupons from 'src/components/Coupons/Coupons';

export const QUERY = gql`
    query FindCouponsById($id: BigInt!) {
        coupons: coupons(id: $id) {
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

export const Empty = () => <div>Coupons not found</div>;

export const Failure = ({ error }) => (
    <div className="rw-cell-error">{error?.message}</div>
);

export const Success = ({ coupons }) => {
    return <Coupons coupons={coupons} />;
};
