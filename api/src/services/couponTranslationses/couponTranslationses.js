import { db } from 'src/lib/db';

export const couponTranslationses = () => {
    return db.couponTranslations.findMany();
};

export const couponTranslations = ({ id }) => {
    return db.couponTranslations.findUnique({
        where: { id }
    });
};

export const createCouponTranslations = ({ input }) => {
    return db.couponTranslations.create({
        data: input
    });
};

export const updateCouponTranslations = ({ id, input }) => {
    return db.couponTranslations.update({
        data: input,
        where: { id }
    });
};

export const deleteCouponTranslations = ({ id }) => {
    return db.couponTranslations.delete({
        where: { id }
    });
};
