import { requireAuth } from 'src/lib/auth';
import { db } from 'src/lib/db';

export const blockses = ({ page, limit, locale }) => {

    // Require roles
    requireAuth({ roles: ['admin', 'editor', 'guest'] })

    return db.blocks.findMany({
        orderBy: { id: 'desc' },
        skip:
            page != undefined && limit != undefined
                ? Number(limit) * (Number(page) - 1)
                : undefined,
        take: limit,
        include: {
            block_translation: {
                where: {
                    locale: locale
                }
            }
        }
    });
};

export const blocks = ({ id }) => {
    return db.blocks.findUnique({
        where: { id }
    });
};

export const createBlocks = ({ input }) => {
    return db.blocks.create({
        data: input
    });
};

export const updateBlocks = ({ id, input }) => {
    return db.blocks.update({
        data: input,
        where: { id }
    });
};

export const deleteBlocks = ({ id }) => {
    return db.blocks.delete({
        where: { id }
    });
};

export const Blocks = {
    block_translation: (_obj, { root }) => {
        return db.blocks
            .findUnique({ where: { id: root?.id } })
            .block_translation();
    }
};
