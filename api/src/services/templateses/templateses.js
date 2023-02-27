import { db } from 'src/lib/db';

export const templateses = () => {
    return db.templates.findMany();
};

export const templates = ({ id }) => {
    return db.templates.findUnique({
        where: { id }
    });
};

export const createTemplates = ({ input }) => {
    return db.templates.create({
        data: input
    });
};

export const updateTemplates = ({ id, input }) => {
    return db.templates.update({
        data: input,
        where: { id }
    });
};

export const deleteTemplates = ({ id }) => {
    return db.templates.delete({
        where: { id }
    });
};

export const Templates = {
    template_translations: (_obj, { root }) => {
        return db.templates
            .findUnique({ where: { id: root?.id } })
            .template_translations();
    }
};
