import { db } from 'src/lib/db';

export const menuses = () => {
    return db.menus.findMany();
};

export const menus = ({ id }) => {
    return db.menus.findUnique({
        where: { id }
    });
};

export const createMenus = ({ input }) => {
    return db.menus.create({
        data: input
    });
};

export const updateMenus = ({ id, input }) => {
    return db.menus.update({
        data: input,
        where: { id }
    });
};

export const deleteMenus = ({ id }) => {
    return db.menus.delete({
        where: { id }
    });
};
