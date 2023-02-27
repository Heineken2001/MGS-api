import { navigate, routes } from '@redwoodjs/router';
import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';

import BlockTranslationsForm from 'src/components/BlockTranslations/BlockTranslationsForm';

const CREATE_BLOCK_TRANSLATIONS_MUTATION = gql`
    mutation CreateBlockTranslationsMutation(
        $input: CreateBlockTranslationsInput!
    ) {
        createBlockTranslations(input: $input) {
            id
        }
    }
`;

const NewBlockTranslations = () => {
    const [createBlockTranslations, { loading, error }] = useMutation(
        CREATE_BLOCK_TRANSLATIONS_MUTATION,
        {
            onCompleted: () => {
                toast.success('BlockTranslations created');
                navigate(routes.blockTranslationses());
            },
            onError: (error) => {
                toast.error(error.message);
            }
        }
    );

    const onSave = (input) => {
        createBlockTranslations({ variables: { input } });
    };

    return (
        <div className="rw-segment">
            <header className="rw-segment-header">
                <h2 className="rw-heading rw-heading-secondary">
                    New BlockTranslations
                </h2>
            </header>
            <div className="rw-segment-main">
                <BlockTranslationsForm
                    onSave={onSave}
                    loading={loading}
                    error={error}
                />
            </div>
        </div>
    );
};

export default NewBlockTranslations;
