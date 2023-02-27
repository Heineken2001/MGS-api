import BlockValueTranslations from 'src/components/BlockValueTranslations/BlockValueTranslations';

export const QUERY = gql`
    query FindBlockValueTranslationsById($id: BigInt!) {
        blockValueTranslations: blockValueTranslations(id: $id) {
            id
            block_value_id
            locale
            title
            created_at
            updated_at
        }
    }
`;

export const Loading = () => <div>Loading...</div>;

export const Empty = () => <div>BlockValueTranslations not found</div>;

export const Failure = ({ error }) => (
    <div className="rw-cell-error">{error?.message}</div>
);

export const Success = ({ blockValueTranslations }) => {
    return (
        <BlockValueTranslations
            blockValueTranslations={blockValueTranslations}
        />
    );
};
