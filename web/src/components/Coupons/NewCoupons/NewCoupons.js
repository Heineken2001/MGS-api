import { navigate, routes } from '@redwoodjs/router';
import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';

import CouponsForm from 'src/components/Coupons/CouponsForm';

const CREATE_COUPONS_MUTATION = gql`
    mutation CreateCouponsMutation($input: CreateCouponsInput!) {
        createCoupons(input: $input) {
            id
        }
    }
`;

const NewCoupons = () => {
    const [createCoupons, { loading, error }] = useMutation(
        CREATE_COUPONS_MUTATION,
        {
            onCompleted: () => {
                toast.success('Coupons created');
                navigate(routes.couponses());
            },
            onError: (error) => {
                toast.error(error.message);
            }
        }
    );

    const onSave = (input) => {
        createCoupons({ variables: { input } });
    };

    return (
        <div className="rw-segment">
            <header className="rw-segment-header">
                <h2 className="rw-heading rw-heading-secondary">New Coupons</h2>
            </header>
            <div className="rw-segment-main">
                <CouponsForm onSave={onSave} loading={loading} error={error} />
            </div>
        </div>
    );
};

export default NewCoupons;
