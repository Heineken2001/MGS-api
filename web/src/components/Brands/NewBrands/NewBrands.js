import { navigate, routes } from '@redwoodjs/router';
import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';

import BrandsForm from 'src/components/Brands/BrandsForm';

const CREATE_BRANDS_MUTATION = gql`
    mutation CreateBrandsMutation($input: CreateBrandsInput!) {
        createBrands(input: $input) {
            id
        }
    }
`;

const NewBrands = () => {
    const [createBrands, { loading, error }] = useMutation(
        CREATE_BRANDS_MUTATION,
        {
            onCompleted: () => {
                toast.success('Brands created');
                navigate(routes.brandses());
            },
            onError: (error) => {
                toast.error(error.message);
            }
        }
    );

    const onSave = (input) => {
        createBrands({ variables: { input } });
    };

    return (
        <div className="rw-segment">
            <header className="rw-segment-header">
                <h2 className="rw-heading rw-heading-secondary">New Brands</h2>
            </header>
            <div className="rw-segment-main">
                <BrandsForm onSave={onSave} loading={loading} error={error} />
            </div>
        </div>
    );
};

export default NewBrands;
