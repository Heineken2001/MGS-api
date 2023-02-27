import { navigate, routes } from '@redwoodjs/router';

import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';

import BlockValueTranslationsForm from 'src/components/BlockValueTranslations/BlockValueTranslationsForm';

export const QUERY = gql`
    query EditBlockValueTranslationsById($id: BigInt!) {
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
const UPDATE_BLOCK_VALUE_TRANSLATIONS_MUTATION = gql`
    mutation UpdateBlockValueTranslationsMutation(
        $id: BigInt!
        $input: UpdateBlockValueTranslationsInput!
    ) {
        updateBlockValueTranslations(id: $id, input: $input) {
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

export const Failure = ({ error }) => (
    <div className="rw-cell-error">{error?.message}</div>
);

export const Success = ({ blockValueTranslations }) => {
    const [updateBlockValueTranslations, { loading, error }] = useMutation(
        UPDATE_BLOCK_VALUE_TRANSLATIONS_MUTATION,
        {
            onCompleted: () => {
                toast.success('BlockValueTranslations updated');
                navigate(routes.blockValueTranslationses());
            },
            onError: (error) => {
                toast.error(error.message);
            }
        }
    );

    const onSave = (input, id) => {
        updateBlockValueTranslations({ variables: { id, input } });
    };

    return (
        <div className="rw-segment">
            <header className="rw-segment-header">
                <h2 className="rw-heading rw-heading-secondary">
                    Edit BlockValueTranslations {blockValueTranslations?.id}
                </h2>
            </header>
            <div className="rw-segment-main">
                <BlockValueTranslationsForm
                    blockValueTranslations={blockValueTranslations}
                    onSave={onSave}
                    error={error}
                    loading={loading}
                />
            </div>
        </div>
    );
};
