import BuilderTranslations from 'src/components/BuilderTranslations/BuilderTranslations';

export const QUERY = gql`
    query FindBuilderTranslationsById($id: BigInt!) {
        builderTranslations: builderTranslations(id: $id) {
            id
            builder_id
            locale
            name
            body
            embedded
            jsonschemaform
        }
    }
`;

export const Loading = () => <div>Loading...</div>;

export const Empty = () => <div>BuilderTranslations not found</div>;

export const Failure = ({ error }) => (
    <div className="rw-cell-error">{error?.message}</div>
);

export const Success = ({ builderTranslations }) => {
    return <BuilderTranslations builderTranslations={builderTranslations} />;
};
