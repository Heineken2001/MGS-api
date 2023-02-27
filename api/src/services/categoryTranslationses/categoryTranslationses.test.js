import {
    categoryTranslationses,
    categoryTranslations,
    createCategoryTranslations,
    updateCategoryTranslations,
    deleteCategoryTranslations
} from './categoryTranslationses';

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('categoryTranslationses', () => {
    scenario('returns all categoryTranslationses', async (scenario) => {
        const result = await categoryTranslationses();

        expect(result.length).toEqual(
            Object.keys(scenario.categoryTranslations).length
        );
    });

    scenario('returns a single categoryTranslations', async (scenario) => {
        const result = await categoryTranslations({
            id: scenario.categoryTranslations.one.id
        });

        expect(result).toEqual(scenario.categoryTranslations.one);
    });

    scenario('creates a categoryTranslations', async (scenario) => {
        const result = await createCategoryTranslations({
            input: {
                category_id: scenario.categoryTranslations.two.category_id,
                locale: 'String',
                name: 'String',
                slug: 'String'
            }
        });

        expect(result.category_id).toEqual(
            scenario.categoryTranslations.two.category_id
        );

        expect(result.locale).toEqual('String');
        expect(result.name).toEqual('String');
        expect(result.slug).toEqual('String');
    });

    scenario('updates a categoryTranslations', async (scenario) => {
        const original = await categoryTranslations({
            id: scenario.categoryTranslations.one.id
        });
        const result = await updateCategoryTranslations({
            id: original.id,
            input: { locale: 'String2' }
        });

        expect(result.locale).toEqual('String2');
    });

    scenario('deletes a categoryTranslations', async (scenario) => {
        const original = await deleteCategoryTranslations({
            id: scenario.categoryTranslations.one.id
        });
        const result = await categoryTranslations({ id: original.id });

        expect(result).toEqual(null);
    });
});
