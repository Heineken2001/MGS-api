import {
    collectionses,
    collections,
    createCollections,
    updateCollections,
    deleteCollections
} from './collectionses';

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('collectionses', () => {
    scenario('returns all collectionses', async (scenario) => {
        const result = await collectionses();

        expect(result.length).toEqual(Object.keys(scenario.collections).length);
    });

    scenario('returns a single collections', async (scenario) => {
        const result = await collections({
            id: scenario.collections.one.id
        });

        expect(result).toEqual(scenario.collections.one);
    });

    scenario('creates a collections', async () => {
        const result = await createCollections({
            input: { target: 'String', type: 'String', is_active: true }
        });

        expect(result.target).toEqual('String');
        expect(result.type).toEqual('String');
        expect(result.is_active).toEqual(true);
    });

    scenario('updates a collections', async (scenario) => {
        const original = await collections({
            id: scenario.collections.one.id
        });
        const result = await updateCollections({
            id: original.id,
            input: { target: 'String2' }
        });

        expect(result.target).toEqual('String2');
    });

    scenario('deletes a collections', async (scenario) => {
        const original = await deleteCollections({
            id: scenario.collections.one.id
        });
        const result = await collections({ id: original.id });

        expect(result).toEqual(null);
    });
});
