import { db } from 'src/lib/db';

export const channelses = () => {
    return db.channels.findMany();
};

export const channels = ({ id }) => {
    return db.channels.findUnique({
        where: { id }
    });
};

export const createChannels = ({ input }) => {
    return db.channels.create({
        data: input
    });
};

export const updateChannels = ({ id, input }) => {
    return db.channels.update({
        data: input,
        where: { id }
    });
};

export const deleteChannels = ({ id }) => {
    return db.channels.delete({
        where: { id }
    });
};

export const Channels = {
    channel_translations: (_obj, { root }) => {
        return db.channels
            .findUnique({ where: { id: root?.id } })
            .channel_translations();
    }
};
