import { db } from 'src/lib/db';

export const blockValueTranslationses = () => {
    return db.blockValueTranslations.findMany();
};

export const blockValueTranslations = ({ id }) => {
    return db.blockValueTranslations.findUnique({
        where: { id }
    });
};

export const createBlockValueTranslations = ({ input }) => {
    return db.blockValueTranslations.create({
        data: input
    });
};

export const updateBlockValueTranslations = ({ id, input }) => {
    return db.blockValueTranslations.update({
        data: input,
        where: { id }
    });
};

export const deleteBlockValueTranslations = ({ id }) => {
    return db.blockValueTranslations.delete({
        where: { id }
    });
};

export const BlockValueTranslations = {
    block_values: (_obj, { root }) => {
        return db.blockValueTranslations
            .findUnique({ where: { id: root?.id } })
            .block_values();
    }
};
