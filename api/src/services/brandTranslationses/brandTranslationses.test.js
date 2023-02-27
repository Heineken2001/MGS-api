import {
    brandTranslationses,
    brandTranslations,
    createBrandTranslations,
    updateBrandTranslations,
    deleteBrandTranslations
} from './brandTranslationses';

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('brandTranslationses', () => {
    scenario('returns all brandTranslationses', async (scenario) => {
        const result = await brandTranslationses();

        expect(result.length).toEqual(
            Object.keys(scenario.brandTranslations).length
        );
    });

    scenario('returns a single brandTranslations', async (scenario) => {
        const result = await brandTranslations({
            id: scenario.brandTranslations.one.id
        });

        expect(result).toEqual(scenario.brandTranslations.one);
    });

    scenario('creates a brandTranslations', async (scenario) => {
        const result = await createBrandTranslations({
            input: {
                brand_id: scenario.brandTranslations.two.brand_id,
                locale: 'String',
                name: 'String'
            }
        });

        expect(result.brand_id).toEqual(
            scenario.brandTranslations.two.brand_id
        );

        expect(result.locale).toEqual('String');
        expect(result.name).toEqual('String');
    });

    scenario('updates a brandTranslations', async (scenario) => {
        const original = await brandTranslations({
            id: scenario.brandTranslations.one.id
        });
        const result = await updateBrandTranslations({
            id: original.id,
            input: { locale: 'String2' }
        });

        expect(result.locale).toEqual('String2');
    });

    scenario('deletes a brandTranslations', async (scenario) => {
        const original = await deleteBrandTranslations({
            id: scenario.brandTranslations.one.id
        });
        const result = await brandTranslations({ id: original.id });

        expect(result).toEqual(null);
    });
});
