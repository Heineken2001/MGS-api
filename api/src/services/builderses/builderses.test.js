import {
    builderses,
    builders,
    createBuilders,
    updateBuilders,
    deleteBuilders
} from './builderses';

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('builderses', () => {
    scenario('returns all builderses', async (scenario) => {
        const result = await builderses();

        expect(result.length).toEqual(Object.keys(scenario.builders).length);
    });

    scenario('returns a single builders', async (scenario) => {
        const result = await builders({ id: scenario.builders.one.id });

        expect(result).toEqual(scenario.builders.one);
    });

    scenario('creates a builders', async () => {
        const result = await createBuilders({
            input: { slug: 'String', is_active: true, is_captcha: true }
        });

        expect(result.slug).toEqual('String');
        expect(result.is_active).toEqual(true);
        expect(result.is_captcha).toEqual(true);
    });

    scenario('updates a builders', async (scenario) => {
        const original = await builders({
            id: scenario.builders.one.id
        });
        const result = await updateBuilders({
            id: original.id,
            input: { slug: 'String2' }
        });

        expect(result.slug).toEqual('String2');
    });

    scenario('deletes a builders', async (scenario) => {
        const original = await deleteBuilders({
            id: scenario.builders.one.id
        });
        const result = await builders({ id: original.id });

        expect(result).toEqual(null);
    });
});
