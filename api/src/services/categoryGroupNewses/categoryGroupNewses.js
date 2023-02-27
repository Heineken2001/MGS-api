import { db } from 'src/lib/db';

export const categoryGroupNewses = () => {
    return db.categoryGroupNews.findMany();
};

export const categoryGroupNews = ({ id }) => {
    return db.categoryGroupNews.findUnique({
        where: { id }
    });
};

export const createCategoryGroupNews = ({ input }) => {
    return db.categoryGroupNews.create({
        data: input
    });
};

export const updateCategoryGroupNews = ({ id, input }) => {
    return db.categoryGroupNews.update({
        data: input,
        where: { id }
    });
};

export const deleteCategoryGroupNews = ({ id }) => {
    return db.categoryGroupNews.delete({
        where: { id }
    });
};

export const CategoryGroupNews = {
    category_group_news_translations: (_obj, { root }) => {
        return db.categoryGroupNews
            .findUnique({ where: { id: root?.id } })
            .category_group_news_translations();
    }
};
