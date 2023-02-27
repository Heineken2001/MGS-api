import {
    blockses,
    blocks,
    createBlocks,
    updateBlocks,
    deleteBlocks
} from './blockses';

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('blockses', () => {
    scenario('returns all blockses', async (scenario) => {
        const result = await blockses();

        expect(result.length).toEqual(Object.keys(scenario.blocks).length);
    });

    scenario('returns a single blocks', async (scenario) => {
        const result = await blocks({ id: scenario.blocks.one.id });

        expect(result).toEqual(scenario.blocks.one);
    });

    scenario('creates a blocks', async () => {
        const result = await createBlocks({
            input: { is_active: true }
        });

        expect(result.is_active).toEqual(true);
    });

    scenario('updates a blocks', async (scenario) => {
        const original = await blocks({
            id: scenario.blocks.one.id
        });
        const result = await updateBlocks({
            id: original.id,
            input: { is_active: false }
        });

        expect(result.is_active).toEqual(false);
    });

    scenario('deletes a blocks', async (scenario) => {
        const original = await deleteBlocks({
            id: scenario.blocks.one.id
        });
        const result = await blocks({ id: original.id });

        expect(result).toEqual(null);
    });
});
