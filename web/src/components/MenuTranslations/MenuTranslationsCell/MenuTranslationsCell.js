import MenuTranslations from 'src/components/MenuTranslations/MenuTranslations';

export const QUERY = gql`
    query FindMenuTranslationsById($id: BigInt!) {
        menuTranslations: menuTranslations(id: $id) {
            id
            menu_id
            locale
            name
        }
    }
`;

export const Loading = () => <div>Loading...</div>;

export const Empty = () => <div>MenuTranslations not found</div>;

export const Failure = ({ error }) => (
    <div className="rw-cell-error">{error?.message}</div>
);

export const Success = ({ menuTranslations }) => {
    return <MenuTranslations menuTranslations={menuTranslations} />;
};
