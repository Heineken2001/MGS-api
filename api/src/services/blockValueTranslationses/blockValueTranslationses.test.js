import {
    blockValueTranslationses,
    blockValueTranslations,
    createBlockValueTranslations,
    updateBlockValueTranslations,
    deleteBlockValueTranslations
} from './blockValueTranslationses';

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('blockValueTranslationses', () => {
    scenario('returns all blockValueTranslationses', async (scenario) => {
        const result = await blockValueTranslationses();

        expect(result.length).toEqual(
            Object.keys(scenario.blockValueTranslations).length
        );
    });

    scenario('returns a single blockValueTranslations', async (scenario) => {
        const result = await blockValueTranslations({
            id: scenario.blockValueTranslations.one.id
        });

        expect(result).toEqual(scenario.blockValueTranslations.one);
    });

    scenario('creates a blockValueTranslations', async (scenario) => {
        const result = await createBlockValueTranslations({
            input: {
                block_value_id:
                    scenario.blockValueTranslations.two.block_value_id,
                locale: 'String',
                title: 'String'
            }
        });

        expect(result.block_value_id).toEqual(
            scenario.blockValueTranslations.two.block_value_id
        );

        expect(result.locale).toEqual('String');
        expect(result.title).toEqual('String');
    });

    scenario('updates a blockValueTranslations', async (scenario) => {
        const original = await blockValueTranslations({
            id: scenario.blockValueTranslations.one.id
        });
        const result = await updateBlockValueTranslations({
            id: original.id,
            input: { locale: 'String2' }
        });

        expect(result.locale).toEqual('String2');
    });

    scenario('deletes a blockValueTranslations', async (scenario) => {
        const original = await deleteBlockValueTranslations({
            id: scenario.blockValueTranslations.one.id
        });
        const result = await blockValueTranslations({ id: original.id });

        expect(result).toEqual(null);
    });
});
