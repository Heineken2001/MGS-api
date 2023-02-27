import { db } from 'src/lib/db';

export const brandses = () => {
    return db.brands.findMany();
};

export const brands = ({ id }) => {
    return db.brands.findUnique({
        where: { id }
    });
};

export const createBrands = ({ input }) => {
    return db.brands.create({
        data: input
    });
};

export const updateBrands = ({ id, input }) => {
    return db.brands.update({
        data: input,
        where: { id }
    });
};

export const deleteBrands = ({ id }) => {
    return db.brands.delete({
        where: { id }
    });
};

export const Brands = {
    brand_translations: (_obj, { root }) => {
        return db.brands
            .findUnique({ where: { id: root?.id } })
            .brand_translations();
    }
};
