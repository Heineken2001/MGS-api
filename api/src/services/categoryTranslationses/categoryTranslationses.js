import { db } from 'src/lib/db';

export const categoryTranslationses = () => {
    return db.categoryTranslations.findMany();
};

export const categoryTranslations = ({ id }) => {
    return db.categoryTranslations.findUnique({
        where: { id }
    });
};

export const createCategoryTranslations = ({ input }) => {
    return db.categoryTranslations.create({
        data: input
    });
};

export const updateCategoryTranslations = ({ id, input }) => {
    return db.categoryTranslations.update({
        data: input,
        where: { id }
    });
};

export const deleteCategoryTranslations = ({ id }) => {
    return db.categoryTranslations.delete({
        where: { id }
    });
};

export const CategoryTranslations = {
    categories: (_obj, { root }) => {
        return db.categoryTranslations
            .findUnique({ where: { id: root?.id } })
            .categories();
    }
};
