import { navigate, routes } from '@redwoodjs/router';
import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';

import CouponTranslationsForm from 'src/components/CouponTranslations/CouponTranslationsForm';

const CREATE_COUPON_TRANSLATIONS_MUTATION = gql`
    mutation CreateCouponTranslationsMutation(
        $input: CreateCouponTranslationsInput!
    ) {
        createCouponTranslations(input: $input) {
            id
        }
    }
`;

const NewCouponTranslations = () => {
    const [createCouponTranslations, { loading, error }] = useMutation(
        CREATE_COUPON_TRANSLATIONS_MUTATION,
        {
            onCompleted: () => {
                toast.success('CouponTranslations created');
                navigate(routes.couponTranslationses());
            },
            onError: (error) => {
                toast.error(error.message);
            }
        }
    );

    const onSave = (input) => {
        createCouponTranslations({ variables: { input } });
    };

    return (
        <div className="rw-segment">
            <header className="rw-segment-header">
                <h2 className="rw-heading rw-heading-secondary">
                    New CouponTranslations
                </h2>
            </header>
            <div className="rw-segment-main">
                <CouponTranslationsForm
                    onSave={onSave}
                    loading={loading}
                    error={error}
                />
            </div>
        </div>
    );
};

export default NewCouponTranslations;
