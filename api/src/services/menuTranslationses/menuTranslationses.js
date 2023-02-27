import { db } from 'src/lib/db';

export const menuTranslationses = () => {
    return db.menuTranslations.findMany();
};

export const menuTranslations = ({ id }) => {
    return db.menuTranslations.findUnique({
        where: { id }
    });
};

export const createMenuTranslations = ({ input }) => {
    return db.menuTranslations.create({
        data: input
    });
};

export const updateMenuTranslations = ({ id, input }) => {
    return db.menuTranslations.update({
        data: input,
        where: { id }
    });
};

export const deleteMenuTranslations = ({ id }) => {
    return db.menuTranslations.delete({
        where: { id }
    });
};

export const MenuTranslations = {
    menus: (_obj, { root }) => {
        return db.menuTranslations
            .findUnique({ where: { id: root?.id } })
            .menus();
    }
};
