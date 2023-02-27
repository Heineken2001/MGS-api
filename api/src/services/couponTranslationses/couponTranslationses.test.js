import {
    couponTranslationses,
    couponTranslations,
    createCouponTranslations,
    updateCouponTranslations,
    deleteCouponTranslations
} from './couponTranslationses';

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('couponTranslationses', () => {
    scenario('returns all couponTranslationses', async (scenario) => {
        const result = await couponTranslationses();

        expect(result.length).toEqual(
            Object.keys(scenario.couponTranslations).length
        );
    });

    scenario('returns a single couponTranslations', async (scenario) => {
        const result = await couponTranslations({
            id: scenario.couponTranslations.one.id
        });

        expect(result).toEqual(scenario.couponTranslations.one);
    });

    scenario('creates a couponTranslations', async () => {
        const result = await createCouponTranslations({
            input: { coupon_id: 6834445n, locale: 'String', name: 'String' }
        });

        expect(result.coupon_id).toEqual(6834445n);
        expect(result.locale).toEqual('String');
        expect(result.name).toEqual('String');
    });

    scenario('updates a couponTranslations', async (scenario) => {
        const original = await couponTranslations({
            id: scenario.couponTranslations.one.id
        });
        const result = await updateCouponTranslations({
            id: original.id,
            input: { coupon_id: '8421011n1' }
        });

        expect(result.coupon_id).toEqual('8421011n1');
    });

    scenario('deletes a couponTranslations', async (scenario) => {
        const original = await deleteCouponTranslations({
            id: scenario.couponTranslations.one.id
        });
        const result = await couponTranslations({ id: original.id });

        expect(result).toEqual(null);
    });
});
