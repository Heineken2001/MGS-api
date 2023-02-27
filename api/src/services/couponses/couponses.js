import { db } from 'src/lib/db';

export const couponses = () => {
    return db.coupons.findMany();
};

export const coupons = ({ id }) => {
    return db.coupons.findUnique({
        where: { id }
    });
};

export const createCoupons = ({ input }) => {
    return db.coupons.create({
        data: input
    });
};

export const updateCoupons = ({ id, input }) => {
    return db.coupons.update({
        data: input,
        where: { id }
    });
};

export const deleteCoupons = ({ id }) => {
    return db.coupons.delete({
        where: { id }
    });
};
