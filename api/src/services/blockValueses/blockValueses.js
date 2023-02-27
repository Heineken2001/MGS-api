import { db } from 'src/lib/db';

export const blockValueses = () => {
    return db.blockValues.findMany();
};

export const blockValues = ({ id }) => {
    return db.blockValues.findUnique({
        where: { id }
    });
};

export const createBlockValues = ({ input }) => {
    return db.blockValues.create({
        data: input
    });
};

export const updateBlockValues = ({ id, input }) => {
    return db.blockValues.update({
        data: input,
        where: { id }
    });
};

export const deleteBlockValues = ({ id }) => {
    return db.blockValues.delete({
        where: { id }
    });
};

export const BlockValues = {
    block_value_translations: (_obj, { root }) => {
        return db.blockValues
            .findUnique({ where: { id: root?.id } })
            .block_value_translations();
    }
};
