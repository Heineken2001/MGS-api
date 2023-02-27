import { db } from 'src/lib/db';

export const channelTranslationses = () => {
    return db.channelTranslations.findMany();
};

export const channelTranslations = ({ id }) => {
    return db.channelTranslations.findUnique({
        where: { id }
    });
};

export const createChannelTranslations = ({ input }) => {
    return db.channelTranslations.create({
        data: input
    });
};

export const updateChannelTranslations = ({ id, input }) => {
    return db.channelTranslations.update({
        data: input,
        where: { id }
    });
};

export const deleteChannelTranslations = ({ id }) => {
    return db.channelTranslations.delete({
        where: { id }
    });
};

export const ChannelTranslations = {
    Channels: (_obj, { root }) => {
        return db.channelTranslations
            .findUnique({ where: { id: root?.id } })
            .Channels();
    }
};
