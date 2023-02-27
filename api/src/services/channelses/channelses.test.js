import {
    channelses,
    channels,
    createChannels,
    updateChannels,
    deleteChannels
} from './channelses';

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('channelses', () => {
    scenario('returns all channelses', async (scenario) => {
        const result = await channelses();

        expect(result.length).toEqual(Object.keys(scenario.channels).length);
    });

    scenario('returns a single channels', async (scenario) => {
        const result = await channels({ id: scenario.channels.one.id });

        expect(result).toEqual(scenario.channels.one);
    });

    scenario('creates a channels', async () => {
        const result = await createChannels({
            input: { slug: 'String', is_active: true }
        });

        expect(result.slug).toEqual('String');
        expect(result.is_active).toEqual(true);
    });

    scenario('updates a channels', async (scenario) => {
        const original = await channels({
            id: scenario.channels.one.id
        });
        const result = await updateChannels({
            id: original.id,
            input: { slug: 'String2' }
        });

        expect(result.slug).toEqual('String2');
    });

    scenario('deletes a channels', async (scenario) => {
        const original = await deleteChannels({
            id: scenario.channels.one.id
        });
        const result = await channels({ id: original.id });

        expect(result).toEqual(null);
    });
});
