import { db } from 'src/lib/db';

export const brandTranslationses = () => {
    return db.brandTranslations.findMany();
};

export const brandTranslations = ({ id }) => {
    return db.brandTranslations.findUnique({
        where: { id }
    });
};

export const createBrandTranslations = ({ input }) => {
    return db.brandTranslations.create({
        data: input
    });
};

export const updateBrandTranslations = ({ id, input }) => {
    return db.brandTranslations.update({
        data: input,
        where: { id }
    });
};

export const deleteBrandTranslations = ({ id }) => {
    return db.brandTranslations.delete({
        where: { id }
    });
};

export const BrandTranslations = {
    Brands: (_obj, { root }) => {
        return db.brandTranslations
            .findUnique({ where: { id: root?.id } })
            .Brands();
    }
};
