import { db } from 'src/lib/db';

export const builderTranslationses = () => {
    return db.builderTranslations.findMany();
};

export const builderTranslations = ({ id }) => {
    return db.builderTranslations.findUnique({
        where: { id }
    });
};

export const createBuilderTranslations = ({ input }) => {
    return db.builderTranslations.create({
        data: input
    });
};

export const updateBuilderTranslations = ({ id, input }) => {
    return db.builderTranslations.update({
        data: input,
        where: { id }
    });
};

export const deleteBuilderTranslations = ({ id }) => {
    return db.builderTranslations.delete({
        where: { id }
    });
};

export const BuilderTranslations = {
    Builders: (_obj, { root }) => {
        return db.builderTranslations
            .findUnique({ where: { id: root?.id } })
            .Builders();
    }
};
