import {
    categoryNewsTranslationses,
    categoryNewsTranslations,
    createCategoryNewsTranslations,
    updateCategoryNewsTranslations,
    deleteCategoryNewsTranslations
} from './categoryNewsTranslationses';

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('categoryNewsTranslationses', () => {
    scenario('returns all categoryNewsTranslationses', async (scenario) => {
        const result = await categoryNewsTranslationses();

        expect(result.length).toEqual(
            Object.keys(scenario.categoryNewsTranslations).length
        );
    });

    scenario('returns a single categoryNewsTranslations', async (scenario) => {
        const result = await categoryNewsTranslations({
            id: scenario.categoryNewsTranslations.one.id
        });

        expect(result).toEqual(scenario.categoryNewsTranslations.one);
    });

    scenario('creates a categoryNewsTranslations', async (scenario) => {
        const result = await createCategoryNewsTranslations({
            input: {
                category_news_id:
                    scenario.categoryNewsTranslations.two.category_news_id,
                locale: 'String',
                name: 'String'
            }
        });

        expect(result.category_news_id).toEqual(
            scenario.categoryNewsTranslations.two.category_news_id
        );

        expect(result.locale).toEqual('String');
        expect(result.name).toEqual('String');
    });

    scenario('updates a categoryNewsTranslations', async (scenario) => {
        const original = await categoryNewsTranslations({
            id: scenario.categoryNewsTranslations.one.id
        });
        const result = await updateCategoryNewsTranslations({
            id: original.id,
            input: { locale: 'String2' }
        });

        expect(result.locale).toEqual('String2');
    });

    scenario('deletes a categoryNewsTranslations', async (scenario) => {
        const original = await deleteCategoryNewsTranslations({
            id: scenario.categoryNewsTranslations.one.id
        });
        const result = await categoryNewsTranslations({ id: original.id });

        expect(result).toEqual(null);
    });
});
