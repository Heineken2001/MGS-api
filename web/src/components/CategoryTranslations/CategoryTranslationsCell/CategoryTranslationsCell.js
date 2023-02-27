import CategoryTranslations from 'src/components/CategoryTranslations/CategoryTranslations';

export const QUERY = gql`
    query FindCategoryTranslationsById($id: BigInt!) {
        categoryTranslations: categoryTranslations(id: $id) {
            id
            category_id
            locale
            name
            content
            description
            slug
            title
            short_description
            long_description
            featured_image
            formdata
            jsonschema
            uischema
        }
    }
`;

export const Loading = () => <div>Loading...</div>;

export const Empty = () => <div>CategoryTranslations not found</div>;

export const Failure = ({ error }) => (
    <div className="rw-cell-error">{error?.message}</div>
);

export const Success = ({ categoryTranslations }) => {
    return <CategoryTranslations categoryTranslations={categoryTranslations} />;
};
