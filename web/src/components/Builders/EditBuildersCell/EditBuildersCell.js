import { navigate, routes } from '@redwoodjs/router';

import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';

import BuildersForm from 'src/components/Builders/BuildersForm';

export const QUERY = gql`
    query EditBuildersById($id: BigInt!) {
        builders: builders(id: $id) {
            id
            slug
            is_active
            is_captcha
            is_redirect
            site_key
            secret_key
            created_at
            updated_at
        }
    }
`;
const UPDATE_BUILDERS_MUTATION = gql`
    mutation UpdateBuildersMutation(
        $id: BigInt!
        $input: UpdateBuildersInput!
    ) {
        updateBuilders(id: $id, input: $input) {
            id
            slug
            is_active
            is_captcha
            is_redirect
            site_key
            secret_key
            created_at
            updated_at
        }
    }
`;

export const Loading = () => <div>Loading...</div>;

export const Failure = ({ error }) => (
    <div className="rw-cell-error">{error?.message}</div>
);

export const Success = ({ builders }) => {
    const [updateBuilders, { loading, error }] = useMutation(
        UPDATE_BUILDERS_MUTATION,
        {
            onCompleted: () => {
                toast.success('Builders updated');
                navigate(routes.builderses());
            },
            onError: (error) => {
                toast.error(error.message);
            }
        }
    );

    const onSave = (input, id) => {
        updateBuilders({ variables: { id, input } });
    };

    return (
        <div className="rw-segment">
            <header className="rw-segment-header">
                <h2 className="rw-heading rw-heading-secondary">
                    Edit Builders {builders?.id}
                </h2>
            </header>
            <div className="rw-segment-main">
                <BuildersForm
                    builders={builders}
                    onSave={onSave}
                    error={error}
                    loading={loading}
                />
            </div>
        </div>
    );
};
