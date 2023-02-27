import { db } from 'src/lib/db';

export const collectionTranslationses = () => {
    return db.collectionTranslations.findMany();
};

export const collectionTranslations = ({ id }) => {
    return db.collectionTranslations.findUnique({
        where: { id }
    });
};

export const createCollectionTranslations = ({ input }) => {
    return db.collectionTranslations.create({
        data: input
    });
};

export const updateCollectionTranslations = ({ id, input }) => {
    return db.collectionTranslations.update({
        data: input,
        where: { id }
    });
};

export const deleteCollectionTranslations = ({ id }) => {
    return db.collectionTranslations.delete({
        where: { id }
    });
};

export const CollectionTranslations = {
    Collections: (_obj, { root }) => {
        return db.collectionTranslations
            .findUnique({ where: { id: root?.id } })
            .Collections();
    }
};
