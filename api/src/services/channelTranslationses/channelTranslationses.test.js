import {
    channelTranslationses,
    channelTranslations,
    createChannelTranslations,
    updateChannelTranslations,
    deleteChannelTranslations
} from './channelTranslationses';

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('channelTranslationses', () => {
    scenario('returns all channelTranslationses', async (scenario) => {
        const result = await channelTranslationses();

        expect(result.length).toEqual(
            Object.keys(scenario.channelTranslations).length
        );
    });

    scenario('returns a single channelTranslations', async (scenario) => {
        const result = await channelTranslations({
            id: scenario.channelTranslations.one.id
        });

        expect(result).toEqual(scenario.channelTranslations.one);
    });

    scenario('creates a channelTranslations', async (scenario) => {
        const result = await createChannelTranslations({
            input: {
                channel_id: scenario.channelTranslations.two.channel_id,
                locale: 'String',
                name: 'String'
            }
        });

        expect(result.channel_id).toEqual(
            scenario.channelTranslations.two.channel_id
        );

        expect(result.locale).toEqual('String');
        expect(result.name).toEqual('String');
    });

    scenario('updates a channelTranslations', async (scenario) => {
        const original = await channelTranslations({
            id: scenario.channelTranslations.one.id
        });
        const result = await updateChannelTranslations({
            id: original.id,
            input: { locale: 'String2' }
        });

        expect(result.locale).toEqual('String2');
    });

    scenario('deletes a channelTranslations', async (scenario) => {
        const original = await deleteChannelTranslations({
            id: scenario.channelTranslations.one.id
        });
        const result = await channelTranslations({ id: original.id });

        expect(result).toEqual(null);
    });
});
