import {
    categorieses,
    categories,
    createCategories,
    updateCategories,
    deleteCategories
} from './categorieses';

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('categorieses', () => {
    scenario('returns all categorieses', async (scenario) => {
        const result = await categorieses();

        expect(result.length).toEqual(Object.keys(scenario.categories).length);
    });

    scenario('returns a single categories', async (scenario) => {
        const result = await categories({ id: scenario.categories.one.id });

        expect(result).toEqual(scenario.categories.one);
    });

    scenario('creates a categories', async () => {
        const result = await createCategories({
            input: { is_searchable: true, is_active: true }
        });

        expect(result.is_searchable).toEqual(true);
        expect(result.is_active).toEqual(true);
    });

    scenario('updates a categories', async (scenario) => {
        const original = await categories({
            id: scenario.categories.one.id
        });
        const result = await updateCategories({
            id: original.id,
            input: { is_searchable: false }
        });

        expect(result.is_searchable).toEqual(false);
    });

    scenario('deletes a categories', async (scenario) => {
        const original = await deleteCategories({
            id: scenario.categories.one.id
        });
        const result = await categories({ id: original.id });

        expect(result).toEqual(null);
    });
});
