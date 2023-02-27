import {
    categoryGroupNewses,
    categoryGroupNews,
    createCategoryGroupNews,
    updateCategoryGroupNews,
    deleteCategoryGroupNews
} from './categoryGroupNewses';

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('categoryGroupNewses', () => {
    scenario('returns all categoryGroupNewses', async (scenario) => {
        const result = await categoryGroupNewses();

        expect(result.length).toEqual(
            Object.keys(scenario.categoryGroupNews).length
        );
    });

    scenario('returns a single categoryGroupNews', async (scenario) => {
        const result = await categoryGroupNews({
            id: scenario.categoryGroupNews.one.id
        });

        expect(result).toEqual(scenario.categoryGroupNews.one);
    });

    scenario('creates a categoryGroupNews', async () => {
        const result = await createCategoryGroupNews({
            input: { slug: 'String', is_searchable: true, is_active: true }
        });

        expect(result.slug).toEqual('String');
        expect(result.is_searchable).toEqual(true);
        expect(result.is_active).toEqual(true);
    });

    scenario('updates a categoryGroupNews', async (scenario) => {
        const original = await categoryGroupNews({
            id: scenario.categoryGroupNews.one.id
        });
        const result = await updateCategoryGroupNews({
            id: original.id,
            input: { slug: 'String2' }
        });

        expect(result.slug).toEqual('String2');
    });

    scenario('deletes a categoryGroupNews', async (scenario) => {
        const original = await deleteCategoryGroupNews({
            id: scenario.categoryGroupNews.one.id
        });
        const result = await categoryGroupNews({ id: original.id });

        expect(result).toEqual(null);
    });
});
