import { db } from 'src/lib/db'

export const tagses = ({ page, limit }) => {
  return db.tags
  .findMany({
    orderBy: { id: 'desc' },
    skip: limit * (page - 1),
    take: limit,
    include: {tag_translations: true}
  })
}

// export const tag_translations = () => {
//     return db.tag_translations.findMany({
//         orderBy: { id: 'desc' }
//     });
// };

export const tags = ({ id }) => {
  return db.tags.findUnique({
    where: { id },
  })
}

export const createTags = ({ input }) => {
  console.log(input);
  return db.tags.create({
    data: input,
  })
}

export const updateTags = ({ id, input }) => {
  return db.tags.update({
    data: input,
    where: { id },
  })
}

export const deleteTags = ({ id }) => {
  return db.tags.delete({
    where: { id },
  })
}
