import {
    categoryGroupNewsTranslationses,
    categoryGroupNewsTranslations,
    createCategoryGroupNewsTranslations,
    updateCategoryGroupNewsTranslations,
    deleteCategoryGroupNewsTranslations
} from './categoryGroupNewsTranslationses';

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('categoryGroupNewsTranslationses', () => {
    scenario(
        'returns all categoryGroupNewsTranslationses',
        async (scenario) => {
            const result = await categoryGroupNewsTranslationses();

            expect(result.length).toEqual(
                Object.keys(scenario.categoryGroupNewsTranslations).length
            );
        }
    );

    scenario(
        'returns a single categoryGroupNewsTranslations',
        async (scenario) => {
            const result = await categoryGroupNewsTranslations({
                id: scenario.categoryGroupNewsTranslations.one.id
            });

            expect(result).toEqual(scenario.categoryGroupNewsTranslations.one);
        }
    );

    scenario('creates a categoryGroupNewsTranslations', async (scenario) => {
        const result = await createCategoryGroupNewsTranslations({
            input: {
                category_group_news_id:
                    scenario.categoryGroupNewsTranslations.two
                        .category_group_news_id,
                locale: 'String',
                name: 'String',
                title_2: 'String'
            }
        });

        expect(result.category_group_news_id).toEqual(
            scenario.categoryGroupNewsTranslations.two.category_group_news_id
        );

        expect(result.locale).toEqual('String');
        expect(result.name).toEqual('String');
        expect(result.title_2).toEqual('String');
    });

    scenario('updates a categoryGroupNewsTranslations', async (scenario) => {
        const original = await categoryGroupNewsTranslations({
            id: scenario.categoryGroupNewsTranslations.one.id
        });
        const result = await updateCategoryGroupNewsTranslations({
            id: original.id,
            input: { locale: 'String2' }
        });

        expect(result.locale).toEqual('String2');
    });

    scenario('deletes a categoryGroupNewsTranslations', async (scenario) => {
        const original = await deleteCategoryGroupNewsTranslations({
            id: scenario.categoryGroupNewsTranslations.one.id
        });
        const result = await categoryGroupNewsTranslations({
            id: original.id
        });

        expect(result).toEqual(null);
    });
});
