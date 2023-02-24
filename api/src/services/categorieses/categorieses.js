import { db } from 'src/lib/db';

export const categorieses = () => {
  requireAuth({ roles: ['admin', 'guest', 'editor'] });
    return db.categories.findMany({
        include: {parent: true, categories: true}
    });
};

export const categories = ({ id }) => {
    requireAuth({ roles: ['admin', 'guest', 'editor'] });
    return db.categories.findUnique({
        where: { id }
    });
};

export const createCategories = ({ input }) => {
    requireAuth({ roles: ['admin', 'editor'] });
    return db.categories.create({
        data: input
    });
};

export const updateCategories = ({ id, input }) => {
    requireAuth({ roles: ['admin', 'editor'] });
    return db.categories.update({
        data: input,
        where: { id }
    });
};

export const deleteCategories = ({ id }) => {
    requireAuth({ roles: ['admin'] });
    return db.categories.delete({
        where: { id }
    });
};
