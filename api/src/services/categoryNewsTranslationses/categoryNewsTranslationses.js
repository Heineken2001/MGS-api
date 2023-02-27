import { db } from 'src/lib/db';

export const categoryNewsTranslationses = () => {
    return db.categoryNewsTranslations.findMany();
};

export const categoryNewsTranslations = ({ id }) => {
    return db.categoryNewsTranslations.findUnique({
        where: { id }
    });
};

export const createCategoryNewsTranslations = ({ input }) => {
    return db.categoryNewsTranslations.create({
        data: input
    });
};

export const updateCategoryNewsTranslations = ({ id, input }) => {
    return db.categoryNewsTranslations.update({
        data: input,
        where: { id }
    });
};

export const deleteCategoryNewsTranslations = ({ id }) => {
    return db.categoryNewsTranslations.delete({
        where: { id }
    });
};

export const CategoryNewsTranslations = {
    CategoryNews: (_obj, { root }) => {
        return db.categoryNewsTranslations
            .findUnique({ where: { id: root?.id } })
            .CategoryNews();
    }
};
