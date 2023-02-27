import {
    templateses,
    templates,
    createTemplates,
    updateTemplates,
    deleteTemplates
} from './templateses';

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('templateses', () => {
    scenario('returns all templateses', async (scenario) => {
        const result = await templateses();

        expect(result.length).toEqual(Object.keys(scenario.templates).length);
    });

    scenario('returns a single templates', async (scenario) => {
        const result = await templates({ id: scenario.templates.one.id });

        expect(result).toEqual(scenario.templates.one);
    });

    scenario('creates a templates', async () => {
        const result = await createTemplates({
            input: { is_active: true }
        });

        expect(result.is_active).toEqual(true);
    });

    scenario('updates a templates', async (scenario) => {
        const original = await templates({
            id: scenario.templates.one.id
        });
        const result = await updateTemplates({
            id: original.id,
            input: { is_active: false }
        });

        expect(result.is_active).toEqual(false);
    });

    scenario('deletes a templates', async (scenario) => {
        const original = await deleteTemplates({
            id: scenario.templates.one.id
        });
        const result = await templates({ id: original.id });

        expect(result).toEqual(null);
    });
});
