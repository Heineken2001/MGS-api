import { db } from 'src/lib/db';

export const categoryNewses = () => {
    return db.categoryNews.findMany();
};

export const categoryNews = ({ id }) => {
    return db.categoryNews.findUnique({
        where: { id }
    });
};

export const createCategoryNews = ({ input }) => {
    return db.categoryNews.create({
        data: input
    });
};

export const updateCategoryNews = ({ id, input }) => {
    return db.categoryNews.update({
        data: input,
        where: { id }
    });
};

export const deleteCategoryNews = ({ id }) => {
    return db.categoryNews.delete({
        where: { id }
    });
};

export const CategoryNews = {
    category_news_translations: (_obj, { root }) => {
        return db.categoryNews
            .findUnique({ where: { id: root?.id } })
            .category_news_translations();
    }
};
