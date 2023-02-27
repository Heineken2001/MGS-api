import BlockTranslations from 'src/components/BlockTranslations/BlockTranslations';

export const QUERY = gql`
    query FindBlockTranslationsById($id: BigInt!) {
        blockTranslations: blockTranslations(id: $id) {
            id
            block_id
            locale
            name
            created_at
            updated_at
        }
    }
`;

export const Loading = () => <div>Loading...</div>;

export const Empty = () => <div>BlockTranslations not found</div>;

export const Failure = ({ error }) => (
    <div className="rw-cell-error">{error?.message}</div>
);

export const Success = ({ blockTranslations }) => {
    return <BlockTranslations blockTranslations={blockTranslations} />;
};
