import { db } from 'src/lib/db';

export const collectionses = () => {
    return db.collections.findMany();
};

export const collections = ({ id }) => {
    return db.collections.findUnique({
        where: { id }
    });
};

export const createCollections = ({ input }) => {
    return db.collections.create({
        data: input
    });
};

export const updateCollections = ({ id, input }) => {
    return db.collections.update({
        data: input,
        where: { id }
    });
};

export const deleteCollections = ({ id }) => {
    return db.collections.delete({
        where: { id }
    });
};

export const Collections = {
    collection_translations: (_obj, { root }) => {
        return db.collections
            .findUnique({ where: { id: root?.id } })
            .collection_translations();
    }
};
