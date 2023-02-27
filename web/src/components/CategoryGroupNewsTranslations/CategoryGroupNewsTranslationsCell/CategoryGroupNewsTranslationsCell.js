import CategoryGroupNewsTranslations from 'src/components/CategoryGroupNewsTranslations/CategoryGroupNewsTranslations';

export const QUERY = gql`
    query FindCategoryGroupNewsTranslationsById($id: BigInt!) {
        categoryGroupNewsTranslations: categoryGroupNewsTranslations(id: $id) {
            id
            category_group_news_id
            locale
            name
            description
            title_2
        }
    }
`;

export const Loading = () => <div>Loading...</div>;

export const Empty = () => <div>CategoryGroupNewsTranslations not found</div>;

export const Failure = ({ error }) => (
    <div className="rw-cell-error">{error?.message}</div>
);

export const Success = ({ categoryGroupNewsTranslations }) => {
    return (
        <CategoryGroupNewsTranslations
            categoryGroupNewsTranslations={categoryGroupNewsTranslations}
        />
    );
};
