import { db } from 'src/lib/db';

export const blockTranslationses = () => {
    return db.blockTranslations.findMany();
};

export const blockTranslations = ({ id }) => {
    return db.blockTranslations.findUnique({
        where: { id }
    });
};

export const createBlockTranslations = ({ input }) => {
    return db.blockTranslations.create({
        data: input
    });
};

export const updateBlockTranslations = ({ id, input }) => {
    return db.blockTranslations.update({
        data: input,
        where: { id }
    });
};

export const deleteBlockTranslations = ({ id }) => {
    return db.blockTranslations.delete({
        where: { id }
    });
};

export const BlockTranslations = {
    blocks: (_obj, { root }) => {
        return db.blockTranslations
            .findUnique({ where: { id: root?.id } })
            .blocks();
    }
};
