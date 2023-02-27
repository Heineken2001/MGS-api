import {
    templateTranslationses,
    templateTranslations,
    createTemplateTranslations,
    updateTemplateTranslations,
    deleteTemplateTranslations
} from './templateTranslationses';

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('templateTranslationses', () => {
    scenario('returns all templateTranslationses', async (scenario) => {
        const result = await templateTranslationses();

        expect(result.length).toEqual(
            Object.keys(scenario.templateTranslations).length
        );
    });

    scenario('returns a single templateTranslations', async (scenario) => {
        const result = await templateTranslations({
            id: scenario.templateTranslations.one.id
        });

        expect(result).toEqual(scenario.templateTranslations.one);
    });

    scenario('creates a templateTranslations', async (scenario) => {
        const result = await createTemplateTranslations({
            input: {
                template_id: scenario.templateTranslations.two.template_id,
                slug: 'String',
                title: 'String',
                locale: 'String'
            }
        });

        expect(result.template_id).toEqual(
            scenario.templateTranslations.two.template_id
        );

        expect(result.slug).toEqual('String');
        expect(result.title).toEqual('String');
        expect(result.locale).toEqual('String');
    });

    scenario('updates a templateTranslations', async (scenario) => {
        const original = await templateTranslations({
            id: scenario.templateTranslations.one.id
        });
        const result = await updateTemplateTranslations({
            id: original.id,
            input: { slug: 'String2' }
        });

        expect(result.slug).toEqual('String2');
    });

    scenario('deletes a templateTranslations', async (scenario) => {
        const original = await deleteTemplateTranslations({
            id: scenario.templateTranslations.one.id
        });
        const result = await templateTranslations({ id: original.id });

        expect(result).toEqual(null);
    });
});
