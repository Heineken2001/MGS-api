import { db } from 'src/lib/db';

export const categoryGroupNewsTranslationses = () => {
    return db.categoryGroupNewsTranslations.findMany();
};

export const categoryGroupNewsTranslations = ({ id }) => {
    return db.categoryGroupNewsTranslations.findUnique({
        where: { id }
    });
};

export const createCategoryGroupNewsTranslations = ({ input }) => {
    return db.categoryGroupNewsTranslations.create({
        data: input
    });
};

export const updateCategoryGroupNewsTranslations = ({ id, input }) => {
    return db.categoryGroupNewsTranslations.update({
        data: input,
        where: { id }
    });
};

export const deleteCategoryGroupNewsTranslations = ({ id }) => {
    return db.categoryGroupNewsTranslations.delete({
        where: { id }
    });
};

export const CategoryGroupNewsTranslations = {
    CategoryGroupNews: (_obj, { root }) => {
        return db.categoryGroupNewsTranslations
            .findUnique({ where: { id: root?.id } })
            .CategoryGroupNews();
    }
};
