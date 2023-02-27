import BrandTranslations from 'src/components/BrandTranslations/BrandTranslations';

export const QUERY = gql`
    query FindBrandTranslationsById($id: BigInt!) {
        brandTranslations: brandTranslations(id: $id) {
            id
            brand_id
            locale
            name
        }
    }
`;

export const Loading = () => <div>Loading...</div>;

export const Empty = () => <div>BrandTranslations not found</div>;

export const Failure = ({ error }) => (
    <div className="rw-cell-error">{error?.message}</div>
);

export const Success = ({ brandTranslations }) => {
    return <BrandTranslations brandTranslations={brandTranslations} />;
};
