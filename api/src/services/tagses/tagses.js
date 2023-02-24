import { requireAuth } from 'src/lib/auth';
import { db } from 'src/lib/db'

export const tagses = async ({ page, limit, locale }) => {
  requireAuth({ roles: ['admin', 'guest', 'editor'] });
  const tagses = await db.tags.findMany({
      orderBy: { id: 'desc' },
      skip: (page!=undefined && limit!=undefined)?Number(limit) * (Number(page) - 1):undefined,
      take: limit,
      include: {
          tag_translations: {
              where: {
                  locale: locale
              }
          }
      }
  });
  const total = await db.tags.count()
  console.log(total);
  return tagses
}

// export const tag_translations = () => {
//     return db.tag_translations.findMany({
//         orderBy: { id: 'desc' }
//     });
// };

export const tags = ({ id }) => {
  requireAuth({ roles: ['admin', 'guest', 'editor'] });
  return db.tags.findUnique({
    where: { id },
  })
}

export const createTags = ({ input }) => {
  requireAuth({ roles: ['admin', 'editor'] });
  console.log(input);
  return db.tags.create({
    data: input,
  })
}

export const updateTags = ({ id, input }) => {
  requireAuth({ roles: ['admin', 'editor'] });
  return db.tags.update({
    data: input,
    where: { id },
  })
}

export const deleteTags = ({ id }) => {
  requireAuth({ roles: ['admin'] });
  return db.tags.delete({
    where: { id },
  })
}
