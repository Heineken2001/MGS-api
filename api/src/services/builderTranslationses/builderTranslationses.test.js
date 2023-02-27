import {
    builderTranslationses,
    builderTranslations,
    createBuilderTranslations,
    updateBuilderTranslations,
    deleteBuilderTranslations
} from './builderTranslationses';

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('builderTranslationses', () => {
    scenario('returns all builderTranslationses', async (scenario) => {
        const result = await builderTranslationses();

        expect(result.length).toEqual(
            Object.keys(scenario.builderTranslations).length
        );
    });

    scenario('returns a single builderTranslations', async (scenario) => {
        const result = await builderTranslations({
            id: scenario.builderTranslations.one.id
        });

        expect(result).toEqual(scenario.builderTranslations.one);
    });

    scenario('creates a builderTranslations', async (scenario) => {
        const result = await createBuilderTranslations({
            input: {
                builder_id: scenario.builderTranslations.two.builder_id,
                locale: 'String',
                name: 'String',
                embedded: 'String',
                jsonschemaform: { foo: 'bar' }
            }
        });

        expect(result.builder_id).toEqual(
            scenario.builderTranslations.two.builder_id
        );

        expect(result.locale).toEqual('String');
        expect(result.name).toEqual('String');
        expect(result.embedded).toEqual('String');
        expect(result.jsonschemaform).toEqual({ foo: 'bar' });
    });

    scenario('updates a builderTranslations', async (scenario) => {
        const original = await builderTranslations({
            id: scenario.builderTranslations.one.id
        });
        const result = await updateBuilderTranslations({
            id: original.id,
            input: { locale: 'String2' }
        });

        expect(result.locale).toEqual('String2');
    });

    scenario('deletes a builderTranslations', async (scenario) => {
        const original = await deleteBuilderTranslations({
            id: scenario.builderTranslations.one.id
        });
        const result = await builderTranslations({ id: original.id });

        expect(result).toEqual(null);
    });
});
