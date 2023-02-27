import {
    brandses,
    brands,
    createBrands,
    updateBrands,
    deleteBrands
} from './brandses';

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('brandses', () => {
    scenario('returns all brandses', async (scenario) => {
        const result = await brandses();

        expect(result.length).toEqual(Object.keys(scenario.brands).length);
    });

    scenario('returns a single brands', async (scenario) => {
        const result = await brands({ id: scenario.brands.one.id });

        expect(result).toEqual(scenario.brands.one);
    });

    scenario('creates a brands', async () => {
        const result = await createBrands({
            input: { slug: 'String', is_active: true }
        });

        expect(result.slug).toEqual('String');
        expect(result.is_active).toEqual(true);
    });

    scenario('updates a brands', async (scenario) => {
        const original = await brands({
            id: scenario.brands.one.id
        });
        const result = await updateBrands({
            id: original.id,
            input: { slug: 'String2' }
        });

        expect(result.slug).toEqual('String2');
    });

    scenario('deletes a brands', async (scenario) => {
        const original = await deleteBrands({
            id: scenario.brands.one.id
        });
        const result = await brands({ id: original.id });

        expect(result).toEqual(null);
    });
});
