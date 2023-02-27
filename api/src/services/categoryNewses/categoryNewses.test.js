import {
    categoryNewses,
    categoryNews,
    createCategoryNews,
    updateCategoryNews,
    deleteCategoryNews
} from './categoryNewses';

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('categoryNewses', () => {
    scenario('returns all categoryNewses', async (scenario) => {
        const result = await categoryNewses();

        expect(result.length).toEqual(
            Object.keys(scenario.categoryNews).length
        );
    });

    scenario('returns a single categoryNews', async (scenario) => {
        const result = await categoryNews({
            id: scenario.categoryNews.one.id
        });

        expect(result).toEqual(scenario.categoryNews.one);
    });

    scenario('creates a categoryNews', async () => {
        const result = await createCategoryNews({
            input: { slug: 'String', is_searchable: true, is_active: true }
        });

        expect(result.slug).toEqual('String');
        expect(result.is_searchable).toEqual(true);
        expect(result.is_active).toEqual(true);
    });

    scenario('updates a categoryNews', async (scenario) => {
        const original = await categoryNews({
            id: scenario.categoryNews.one.id
        });
        const result = await updateCategoryNews({
            id: original.id,
            input: { slug: 'String2' }
        });

        expect(result.slug).toEqual('String2');
    });

    scenario('deletes a categoryNews', async (scenario) => {
        const original = await deleteCategoryNews({
            id: scenario.categoryNews.one.id
        });
        const result = await categoryNews({ id: original.id });

        expect(result).toEqual(null);
    });
});
