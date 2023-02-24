import { navigate, routes } from '@redwoodjs/router';

import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';

import MenusForm from 'src/components/Menus/MenusForm';

export const QUERY = gql`
    query EditMenusById($id: BigInt!) {
        menus: menus(id: $id) {
            id
            is_active
            created_at
            updated_at
            position
        }
    }
`;
const UPDATE_MENUS_MUTATION = gql`
    mutation UpdateMenusMutation($id: BigInt!, $input: UpdateMenusInput!) {
        updateMenus(id: $id, input: $input) {
            id
            is_active
            created_at
            updated_at
            position
        }
    }
`;

export const Loading = () => <div>Loading...</div>;

export const Failure = ({ error }) => (
    <div className="rw-cell-error">{error?.message}</div>
);

export const Success = ({ menus }) => {
    const [updateMenus, { loading, error }] = useMutation(
        UPDATE_MENUS_MUTATION,
        {
            onCompleted: () => {
                toast.success('Menus updated');
                navigate(routes.menuses());
            },
            onError: (error) => {
                toast.error(error.message);
            }
        }
    );

    const onSave = (input, id) => {
        updateMenus({ variables: { id, input } });
    };

    return (
        <div className="rw-segment">
            <header className="rw-segment-header">
                <h2 className="rw-heading rw-heading-secondary">
                    Edit Menus {menus?.id}
                </h2>
            </header>
            <div className="rw-segment-main">
                <MenusForm
                    menus={menus}
                    onSave={onSave}
                    error={error}
                    loading={loading}
                />
            </div>
        </div>
    );
};
