import { navigate, routes } from '@redwoodjs/router';

import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';

import MenuTranslationsForm from 'src/components/MenuTranslations/MenuTranslationsForm';

export const QUERY = gql`
    query EditMenuTranslationsById($id: BigInt!) {
        menuTranslations: menuTranslations(id: $id) {
            id
            menu_id
            locale
            name
        }
    }
`;
const UPDATE_MENU_TRANSLATIONS_MUTATION = gql`
    mutation UpdateMenuTranslationsMutation(
        $id: BigInt!
        $input: UpdateMenuTranslationsInput!
    ) {
        updateMenuTranslations(id: $id, input: $input) {
            id
            menu_id
            locale
            name
        }
    }
`;

export const Loading = () => <div>Loading...</div>;

export const Failure = ({ error }) => (
    <div className="rw-cell-error">{error?.message}</div>
);

export const Success = ({ menuTranslations }) => {
    const [updateMenuTranslations, { loading, error }] = useMutation(
        UPDATE_MENU_TRANSLATIONS_MUTATION,
        {
            onCompleted: () => {
                toast.success('MenuTranslations updated');
                navigate(routes.menuTranslationses());
            },
            onError: (error) => {
                toast.error(error.message);
            }
        }
    );

    const onSave = (input, id) => {
        updateMenuTranslations({ variables: { id, input } });
    };

    return (
        <div className="rw-segment">
            <header className="rw-segment-header">
                <h2 className="rw-heading rw-heading-secondary">
                    Edit MenuTranslations {menuTranslations?.id}
                </h2>
            </header>
            <div className="rw-segment-main">
                <MenuTranslationsForm
                    menuTranslations={menuTranslations}
                    onSave={onSave}
                    error={error}
                    loading={loading}
                />
            </div>
        </div>
    );
};
