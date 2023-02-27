import { navigate, routes } from '@redwoodjs/router';

import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';

import BlockTranslationsForm from 'src/components/BlockTranslations/BlockTranslationsForm';

export const QUERY = gql`
    query EditBlockTranslationsById($id: BigInt!) {
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
const UPDATE_BLOCK_TRANSLATIONS_MUTATION = gql`
    mutation UpdateBlockTranslationsMutation(
        $id: BigInt!
        $input: UpdateBlockTranslationsInput!
    ) {
        updateBlockTranslations(id: $id, input: $input) {
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

export const Failure = ({ error }) => (
    <div className="rw-cell-error">{error?.message}</div>
);

export const Success = ({ blockTranslations }) => {
    const [updateBlockTranslations, { loading, error }] = useMutation(
        UPDATE_BLOCK_TRANSLATIONS_MUTATION,
        {
            onCompleted: () => {
                toast.success('BlockTranslations updated');
                navigate(routes.blockTranslationses());
            },
            onError: (error) => {
                toast.error(error.message);
            }
        }
    );

    const onSave = (input, id) => {
        updateBlockTranslations({ variables: { id, input } });
    };

    return (
        <div className="rw-segment">
            <header className="rw-segment-header">
                <h2 className="rw-heading rw-heading-secondary">
                    Edit BlockTranslations {blockTranslations?.id}
                </h2>
            </header>
            <div className="rw-segment-main">
                <BlockTranslationsForm
                    blockTranslations={blockTranslations}
                    onSave={onSave}
                    error={error}
                    loading={loading}
                />
            </div>
        </div>
    );
};
