import {
    couponses,
    coupons,
    createCoupons,
    updateCoupons,
    deleteCoupons
} from './couponses';

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('couponses', () => {
    scenario('returns all couponses', async (scenario) => {
        const result = await couponses();

        expect(result.length).toEqual(Object.keys(scenario.coupons).length);
    });

    scenario('returns a single coupons', async (scenario) => {
        const result = await coupons({ id: scenario.coupons.one.id });

        expect(result).toEqual(scenario.coupons.one);
    });

    scenario('creates a coupons', async () => {
        const result = await createCoupons({
            input: {
                code: 'String',
                is_percent: true,
                free_shipping: true,
                is_active: true
            }
        });

        expect(result.code).toEqual('String');
        expect(result.is_percent).toEqual(true);
        expect(result.free_shipping).toEqual(true);
        expect(result.is_active).toEqual(true);
    });

    scenario('updates a coupons', async (scenario) => {
        const original = await coupons({
            id: scenario.coupons.one.id
        });
        const result = await updateCoupons({
            id: original.id,
            input: { code: 'String2' }
        });

        expect(result.code).toEqual('String2');
    });

    scenario('deletes a coupons', async (scenario) => {
        const original = await deleteCoupons({
            id: scenario.coupons.one.id
        });
        const result = await coupons({ id: original.id });

        expect(result).toEqual(null);
    });
});
