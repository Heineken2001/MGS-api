import {
    menuTranslationses,
    menuTranslations,
    createMenuTranslations,
    updateMenuTranslations,
    deleteMenuTranslations
} from './menuTranslationses';

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('menuTranslationses', () => {
    scenario('returns all menuTranslationses', async (scenario) => {
        const result = await menuTranslationses();

        expect(result.length).toEqual(
            Object.keys(scenario.menuTranslations).length
        );
    });

    scenario('returns a single menuTranslations', async (scenario) => {
        const result = await menuTranslations({
            id: scenario.menuTranslations.one.id
        });

        expect(result).toEqual(scenario.menuTranslations.one);
    });

    scenario('creates a menuTranslations', async (scenario) => {
        const result = await createMenuTranslations({
            input: {
                menu_id: scenario.menuTranslations.two.menu_id,
                locale: 'String',
                name: 'String'
            }
        });

        expect(result.menu_id).toEqual(scenario.menuTranslations.two.menu_id);

        expect(result.locale).toEqual('String');
        expect(result.name).toEqual('String');
    });

    scenario('updates a menuTranslations', async (scenario) => {
        const original = await menuTranslations({
            id: scenario.menuTranslations.one.id
        });
        const result = await updateMenuTranslations({
            id: original.id,
            input: { locale: 'String2' }
        });

        expect(result.locale).toEqual('String2');
    });

    scenario('deletes a menuTranslations', async (scenario) => {
        const original = await deleteMenuTranslations({
            id: scenario.menuTranslations.one.id
        });
        const result = await menuTranslations({ id: original.id });

        expect(result).toEqual(null);
    });
});
