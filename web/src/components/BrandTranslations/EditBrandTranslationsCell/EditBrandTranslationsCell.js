import { navigate, routes } from '@redwoodjs/router';

import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';

import BrandTranslationsForm from 'src/components/BrandTranslations/BrandTranslationsForm';

export const QUERY = gql`
    query EditBrandTranslationsById($id: BigInt!) {
        brandTranslations: brandTranslations(id: $id) {
            id
            brand_id
            locale
            name
        }
    }
`;
const UPDATE_BRAND_TRANSLATIONS_MUTATION = gql`
    mutation UpdateBrandTranslationsMutation(
        $id: BigInt!
        $input: UpdateBrandTranslationsInput!
    ) {
        updateBrandTranslations(id: $id, input: $input) {
            id
            brand_id
            locale
            name
        }
    }
`;

export const Loading = () => <div>Loading...</div>;

export const Failure = ({ error }) => (
    <div className="rw-cell-error">{error?.message}</div>
);

export const Success = ({ brandTranslations }) => {
    const [updateBrandTranslations, { loading, error }] = useMutation(
        UPDATE_BRAND_TRANSLATIONS_MUTATION,
        {
            onCompleted: () => {
                toast.success('BrandTranslations updated');
                navigate(routes.brandTranslationses());
            },
            onError: (error) => {
                toast.error(error.message);
            }
        }
    );

    const onSave = (input, id) => {
        updateBrandTranslations({ variables: { id, input } });
    };

    return (
        <div className="rw-segment">
            <header className="rw-segment-header">
                <h2 className="rw-heading rw-heading-secondary">
                    Edit BrandTranslations {brandTranslations?.id}
                </h2>
            </header>
            <div className="rw-segment-main">
                <BrandTranslationsForm
                    brandTranslations={brandTranslations}
                    onSave={onSave}
                    error={error}
                    loading={loading}
                />
            </div>
        </div>
    );
};
