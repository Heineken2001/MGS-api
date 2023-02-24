import { navigate, routes } from '@redwoodjs/router';
import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';

import MenusForm from 'src/components/Menus/MenusForm';

const CREATE_MENUS_MUTATION = gql`
    mutation CreateMenusMutation($input: CreateMenusInput!) {
        createMenus(input: $input) {
            id
        }
    }
`;

const NewMenus = () => {
    const [createMenus, { loading, error }] = useMutation(
        CREATE_MENUS_MUTATION,
        {
            onCompleted: () => {
                toast.success('Menus created');
                navigate(routes.menuses());
            },
            onError: (error) => {
                toast.error(error.message);
            }
        }
    );

    const onSave = (input) => {
        createMenus({ variables: { input } });
    };

    return (
        <div className="rw-segment">
            <header className="rw-segment-header">
                <h2 className="rw-heading rw-heading-secondary">New Menus</h2>
            </header>
            <div className="rw-segment-main">
                <MenusForm onSave={onSave} loading={loading} error={error} />
            </div>
        </div>
    );
};

export default NewMenus;
