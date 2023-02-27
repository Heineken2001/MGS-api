import { db } from 'src/lib/db';

export const templateTranslationses = () => {
    return db.templateTranslations.findMany();
};

export const templateTranslations = ({ id }) => {
    return db.templateTranslations.findUnique({
        where: { id }
    });
};

export const createTemplateTranslations = ({ input }) => {
    return db.templateTranslations.create({
        data: input
    });
};

export const updateTemplateTranslations = ({ id, input }) => {
    return db.templateTranslations.update({
        data: input,
        where: { id }
    });
};

export const deleteTemplateTranslations = ({ id }) => {
    return db.templateTranslations.delete({
        where: { id }
    });
};

export const TemplateTranslations = {
    templates: (_obj, { root }) => {
        return db.templateTranslations
            .findUnique({ where: { id: root?.id } })
            .templates();
    }
};
