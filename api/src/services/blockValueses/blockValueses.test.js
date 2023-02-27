import {
    blockValueses,
    blockValues,
    createBlockValues,
    updateBlockValues,
    deleteBlockValues
} from './blockValueses';

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('blockValueses', () => {
    scenario('returns all blockValueses', async (scenario) => {
        const result = await blockValueses();

        expect(result.length).toEqual(Object.keys(scenario.blockValues).length);
    });

    scenario('returns a single blockValues', async (scenario) => {
        const result = await blockValues({
            id: scenario.blockValues.one.id
        });

        expect(result).toEqual(scenario.blockValues.one);
    });

    scenario('creates a blockValues', async () => {
        const result = await createBlockValues({
            input: { position: 3245100n, key: 'String', type: 'String' }
        });

        expect(result.position).toEqual(3245100n);
        expect(result.key).toEqual('String');
        expect(result.type).toEqual('String');
    });

    scenario('updates a blockValues', async (scenario) => {
        const original = await blockValues({
            id: scenario.blockValues.one.id
        });
        const result = await updateBlockValues({
            id: original.id,
            input: { position: '928527n1' }
        });

        expect(result.position).toEqual('928527n1');
    });

    scenario('deletes a blockValues', async (scenario) => {
        const original = await deleteBlockValues({
            id: scenario.blockValues.one.id
        });
        const result = await blockValues({ id: original.id });

        expect(result).toEqual(null);
    });
});
