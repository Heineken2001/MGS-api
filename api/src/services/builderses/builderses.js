import { db } from 'src/lib/db';

export const builderses = () => {
    return db.builders.findMany();
};

export const builders = ({ id }) => {
    return db.builders.findUnique({
        where: { id }
    });
};

export const createBuilders = ({ input }) => {
    return db.builders.create({
        data: input
    });
};

export const updateBuilders = ({ id, input }) => {
    return db.builders.update({
        data: input,
        where: { id }
    });
};

export const deleteBuilders = ({ id }) => {
    return db.builders.delete({
        where: { id }
    });
};

export const Builders = {
    builder_translations: (_obj, { root }) => {
        return db.builders
            .findUnique({ where: { id: root?.id } })
            .builder_translations();
    }
};
