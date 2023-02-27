import { navigate, routes } from '@redwoodjs/router';

import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';

import CouponsForm from 'src/components/Coupons/CouponsForm';

export const QUERY = gql`
    query EditCouponsById($id: BigInt!) {
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
const UPDATE_COUPONS_MUTATION = gql`
    mutation UpdateCouponsMutation($id: BigInt!, $input: UpdateCouponsInput!) {
        updateCoupons(id: $id, input: $input) {
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

export const Failure = ({ error }) => (
    <div className="rw-cell-error">{error?.message}</div>
);

export const Success = ({ coupons }) => {
    const [updateCoupons, { loading, error }] = useMutation(
        UPDATE_COUPONS_MUTATION,
        {
            onCompleted: () => {
                toast.success('Coupons updated');
                navigate(routes.couponses());
            },
            onError: (error) => {
                toast.error(error.message);
            }
        }
    );

    const onSave = (input, id) => {
        updateCoupons({ variables: { id, input } });
    };

    return (
        <div className="rw-segment">
            <header className="rw-segment-header">
                <h2 className="rw-heading rw-heading-secondary">
                    Edit Coupons {coupons?.id}
                </h2>
            </header>
            <div className="rw-segment-main">
                <CouponsForm
                    coupons={coupons}
                    onSave={onSave}
                    error={error}
                    loading={loading}
                />
            </div>
        </div>
    );
};
