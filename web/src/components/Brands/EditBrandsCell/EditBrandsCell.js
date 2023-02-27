import { navigate, routes } from '@redwoodjs/router';

import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';

import BrandsForm from 'src/components/Brands/BrandsForm';

export const QUERY = gql`
    query EditBrandsById($id: BigInt!) {
        brands: brands(id: $id) {
            id
            slug
            is_active
            created_at
            updated_at
        }
    }
`;
const UPDATE_BRANDS_MUTATION = gql`
    mutation UpdateBrandsMutation($id: BigInt!, $input: UpdateBrandsInput!) {
        updateBrands(id: $id, input: $input) {
            id
            slug
            is_active
            created_at
            updated_at
        }
    }
`;

export const Loading = () => <div>Loading...</div>;

export const Failure = ({ error }) => (
    <div className="rw-cell-error">{error?.message}</div>
);

export const Success = ({ brands }) => {
    const [updateBrands, { loading, error }] = useMutation(
        UPDATE_BRANDS_MUTATION,
        {
            onCompleted: () => {
                toast.success('Brands updated');
                navigate(routes.brandses());
            },
            onError: (error) => {
                toast.error(error.message);
            }
        }
    );

    const onSave = (input, id) => {
        updateBrands({ variables: { id, input } });
    };

    return (
        <div className="rw-segment">
            <header className="rw-segment-header">
                <h2 className="rw-heading rw-heading-secondary">
                    Edit Brands {brands?.id}
                </h2>
            </header>
            <div className="rw-segment-main">
                <BrandsForm
                    brands={brands}
                    onSave={onSave}
                    error={error}
                    loading={loading}
                />
            </div>
        </div>
    );
};
