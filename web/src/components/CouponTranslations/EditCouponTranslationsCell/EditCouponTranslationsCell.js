import { navigate, routes } from '@redwoodjs/router';

import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';

import CouponTranslationsForm from 'src/components/CouponTranslations/CouponTranslationsForm';

export const QUERY = gql`
    query EditCouponTranslationsById($id: BigInt!) {
        couponTranslations: couponTranslations(id: $id) {
            id
            coupon_id
            locale
            name
        }
    }
`;
const UPDATE_COUPON_TRANSLATIONS_MUTATION = gql`
    mutation UpdateCouponTranslationsMutation(
        $id: BigInt!
        $input: UpdateCouponTranslationsInput!
    ) {
        updateCouponTranslations(id: $id, input: $input) {
            id
            coupon_id
            locale
            name
        }
    }
`;

export const Loading = () => <div>Loading...</div>;

export const Failure = ({ error }) => (
    <div className="rw-cell-error">{error?.message}</div>
);

export const Success = ({ couponTranslations }) => {
    const [updateCouponTranslations, { loading, error }] = useMutation(
        UPDATE_COUPON_TRANSLATIONS_MUTATION,
        {
            onCompleted: () => {
                toast.success('CouponTranslations updated');
                navigate(routes.couponTranslationses());
            },
            onError: (error) => {
                toast.error(error.message);
            }
        }
    );

    const onSave = (input, id) => {
        updateCouponTranslations({ variables: { id, input } });
    };

    return (
        <div className="rw-segment">
            <header className="rw-segment-header">
                <h2 className="rw-heading rw-heading-secondary">
                    Edit CouponTranslations {couponTranslations?.id}
                </h2>
            </header>
            <div className="rw-segment-main">
                <CouponTranslationsForm
                    couponTranslations={couponTranslations}
                    onSave={onSave}
                    error={error}
                    loading={loading}
                />
            </div>
        </div>
    );
};
