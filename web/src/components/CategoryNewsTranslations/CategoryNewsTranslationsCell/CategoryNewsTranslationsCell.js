import CategoryNewsTranslations from 'src/components/CategoryNewsTranslations/CategoryNewsTranslations';

export const QUERY = gql`
    query FindCategoryNewsTranslationsById($id: BigInt!) {
        categoryNewsTranslations: categoryNewsTranslations(id: $id) {
            id
            category_news_id
            locale
            name
            description
        }
    }
`;

export const Loading = () => <div>Loading...</div>;

export const Empty = () => <div>CategoryNewsTranslations not found</div>;

export const Failure = ({ error }) => (
    <div className="rw-cell-error">{error?.message}</div>
);

export const Success = ({ categoryNewsTranslations }) => {
    return (
        <CategoryNewsTranslations
            categoryNewsTranslations={categoryNewsTranslations}
        />
    );
};
