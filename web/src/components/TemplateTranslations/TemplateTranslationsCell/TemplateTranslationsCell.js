import TemplateTranslations from 'src/components/TemplateTranslations/TemplateTranslations';

export const QUERY = gql`
    query FindTemplateTranslationsById($id: BigInt!) {
        templateTranslations: templateTranslations(id: $id) {
            id
            template_id
            slug
            title
            locale
        }
    }
`;

export const Loading = () => <div>Loading...</div>;

export const Empty = () => <div>TemplateTranslations not found</div>;

export const Failure = ({ error }) => (
    <div className="rw-cell-error">{error?.message}</div>
);

export const Success = ({ templateTranslations }) => {
    return <TemplateTranslations templateTranslations={templateTranslations} />;
};
