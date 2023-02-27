import { navigate, routes } from '@redwoodjs/router';
import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';

import BrandTranslationsForm from 'src/components/BrandTranslations/BrandTranslationsForm';

const CREATE_BRAND_TRANSLATIONS_MUTATION = gql`
    mutation CreateBrandTranslationsMutation(
        $input: CreateBrandTranslationsInput!
    ) {
        createBrandTranslations(input: $input) {
            id
        }
    }
`;

const NewBrandTranslations = () => {
    const [createBrandTranslations, { loading, error }] = useMutation(
        CREATE_BRAND_TRANSLATIONS_MUTATION,
        {
            onCompleted: () => {
                toast.success('BrandTranslations created');
                navigate(routes.brandTranslationses());
            },
            onError: (error) => {
                toast.error(error.message);
            }
        }
    );

    const onSave = (input) => {
        createBrandTranslations({ variables: { input } });
    };

    return (
        <div className="rw-segment">
            <header className="rw-segment-header">
                <h2 className="rw-heading rw-heading-secondary">
                    New BrandTranslations
                </h2>
            </header>
            <div className="rw-segment-main">
                <BrandTranslationsForm
                    onSave={onSave}
                    loading={loading}
                    error={error}
                />
            </div>
        </div>
    );
};

export default NewBrandTranslations;
