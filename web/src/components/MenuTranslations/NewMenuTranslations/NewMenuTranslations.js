import { navigate, routes } from '@redwoodjs/router';
import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';

import MenuTranslationsForm from 'src/components/MenuTranslations/MenuTranslationsForm';

const CREATE_MENU_TRANSLATIONS_MUTATION = gql`
    mutation CreateMenuTranslationsMutation(
        $input: CreateMenuTranslationsInput!
    ) {
        createMenuTranslations(input: $input) {
            id
        }
    }
`;

const NewMenuTranslations = () => {
    const [createMenuTranslations, { loading, error }] = useMutation(
        CREATE_MENU_TRANSLATIONS_MUTATION,
        {
            onCompleted: () => {
                toast.success('MenuTranslations created');
                navigate(routes.menuTranslationses());
            },
            onError: (error) => {
                toast.error(error.message);
            }
        }
    );

    const onSave = (input) => {
        createMenuTranslations({ variables: { input } });
    };

    return (
        <div className="rw-segment">
            <header className="rw-segment-header">
                <h2 className="rw-heading rw-heading-secondary">
                    New MenuTranslations
                </h2>
            </header>
            <div className="rw-segment-main">
                <MenuTranslationsForm
                    onSave={onSave}
                    loading={loading}
                    error={error}
                />
            </div>
        </div>
    );
};

export default NewMenuTranslations;
