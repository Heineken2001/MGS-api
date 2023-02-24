import {
    menuses,
    menus,
    createMenus,
    updateMenus,
    deleteMenus
} from './menuses';

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('menuses', () => {
    scenario('returns all menuses', async (scenario) => {
        const result = await menuses();

        expect(result.length).toEqual(Object.keys(scenario.menus).length);
    });

    scenario('returns a single menus', async (scenario) => {
        const result = await menus({ id: scenario.menus.one.id });

        expect(result).toEqual(scenario.menus.one);
    });

    scenario('creates a menus', async () => {
        const result = await createMenus({
            input: { is_active: true }
        });

        expect(result.is_active).toEqual(true);
    });

    scenario('updates a menus', async (scenario) => {
        const original = await menus({ id: scenario.menus.one.id });
        const result = await updateMenus({
            id: original.id,
            input: { is_active: false }
        });

        expect(result.is_active).toEqual(false);
    });

    scenario('deletes a menus', async (scenario) => {
        const original = await deleteMenus({
            id: scenario.menus.one.id
        });
        const result = await menus({ id: original.id });

        expect(result).toEqual(null);
    });
});
