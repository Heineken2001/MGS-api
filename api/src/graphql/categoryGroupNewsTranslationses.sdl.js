export const schema = gql`
    type CategoryGroupNewsTranslations {
        id: BigInt!
        category_group_news_id: BigInt!
        locale: String!
        name: String!
        description: String
        title_2: String!
        CategoryGroupNews: CategoryGroupNews
    }

    type Query {
        categoryGroupNewsTranslationses: [CategoryGroupNewsTranslations!]!
            @requireAuth
        categoryGroupNewsTranslations(
            id: BigInt!
        ): CategoryGroupNewsTranslations @requireAuth
    }

    input CreateCategoryGroupNewsTranslationsInput {
        category_group_news_id: BigInt!
        locale: String!
        name: String!
        description: String
        title_2: String!
    }

    input UpdateCategoryGroupNewsTranslationsInput {
        category_group_news_id: BigInt
        locale: String
        name: String
        description: String
        title_2: String
    }

    type Mutation {
        createCategoryGroupNewsTranslations(
            input: CreateCategoryGroupNewsTranslationsInput!
        ): CategoryGroupNewsTranslations! @requireAuth
        updateCategoryGroupNewsTranslations(
            id: BigInt!
            input: UpdateCategoryGroupNewsTranslationsInput!
        ): CategoryGroupNewsTranslations! @requireAuth
        deleteCategoryGroupNewsTranslations(
            id: BigInt!
        ): CategoryGroupNewsTranslations! @requireAuth
    }
`;
