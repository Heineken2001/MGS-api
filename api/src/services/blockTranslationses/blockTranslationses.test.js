import {
    blockTranslationses,
    blockTranslations,
    createBlockTranslations,
    updateBlockTranslations,
    deleteBlockTranslations
} from './blockTranslationses';

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('blockTranslationses', () => {
    scenario('returns all blockTranslationses', async (scenario) => {
        const result = await blockTranslationses();

        expect(result.length).toEqual(
            Object.keys(scenario.blockTranslations).length
        );
    });

    scenario('returns a single blockTranslations', async (scenario) => {
        const result = await blockTranslations({
            id: scenario.blockTranslations.one.id
        });

        expect(result).toEqual(scenario.blockTranslations.one);
    });

    scenario('creates a blockTranslations', async (scenario) => {
        const result = await createBlockTranslations({
            input: {
                block_id: scenario.blockTranslations.two.block_id,
                locale: 'String',
                name: 'String'
            }
        });

        expect(result.block_id).toEqual(
            scenario.blockTranslations.two.block_id
        );

        expect(result.locale).toEqual('String');
        expect(result.name).toEqual('String');
    });

    scenario('updates a blockTranslations', async (scenario) => {
        const original = await blockTranslations({
            id: scenario.blockTranslations.one.id
        });
        const result = await updateBlockTranslations({
            id: original.id,
            input: { locale: 'String2' }
        });

        expect(result.locale).toEqual('String2');
    });

    scenario('deletes a blockTranslations', async (scenario) => {
        const original = await deleteBlockTranslations({
            id: scenario.blockTranslations.one.id
        });
        const result = await blockTranslations({ id: original.id });

        expect(result).toEqual(null);
    });
});
