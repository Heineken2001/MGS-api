import { db } from 'src/lib/db';

export const categorieses = () => {
    return db.categories.findMany({
        include: {parent: true, categories: true}
    });
};

export const categories = ({ id }) => {
    return db.categories.findUnique({
        where: { id }
    });
};

export const createCategories = ({ input }) => {
    return db.categories.create({
        data: input
    });
};

export const updateCategories = ({ id, input }) => {
    return db.categories.update({
        data: input,
        where: { id }
    });
};

export const deleteCategories = ({ id }) => {
    return db.categories.delete({
        where: { id }
    });
};
