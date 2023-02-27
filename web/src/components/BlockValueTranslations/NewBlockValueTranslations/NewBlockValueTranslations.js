import { navigate, routes } from '@redwoodjs/router';
import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';

import BlockValueTranslationsForm from 'src/components/BlockValueTranslations/BlockValueTranslationsForm';

const CREATE_BLOCK_VALUE_TRANSLATIONS_MUTATION = gql`
    mutation CreateBlockValueTranslationsMutation(
        $input: CreateBlockValueTranslationsInput!
    ) {
        createBlockValueTranslations(input: $input) {
            id
        }
    }
`;

const NewBlockValueTranslations = () => {
    const [createBlockValueTranslations, { loading, error }] = useMutation(
        CREATE_BLOCK_VALUE_TRANSLATIONS_MUTATION,
        {
            onCompleted: () => {
                toast.success('BlockValueTranslations created');
                navigate(routes.blockValueTranslationses());
            },
            onError: (error) => {
                toast.error(error.message);
            }
        }
    );

    const onSave = (input) => {
        createBlockValueTranslations({ variables: { input } });
    };

    return (
        <div className="rw-segment">
            <header className="rw-segment-header">
                <h2 className="rw-heading rw-heading-secondary">
                    New BlockValueTranslations
                </h2>
            </header>
            <div className="rw-segment-main">
                <BlockValueTranslationsForm
                    onSave={onSave}
                    loading={loading}
                    error={error}
                />
            </div>
        </div>
    );
};

export default NewBlockValueTranslations;
