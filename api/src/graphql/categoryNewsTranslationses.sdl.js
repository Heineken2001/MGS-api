export const schema = gql`
    type CategoryNewsTranslations {
        id: BigInt!
        category_news_id: BigInt!
        locale: String!
        name: String!
        description: String
        CategoryNews: CategoryNews
    }

    type Query {
        categoryNewsTranslationses: [CategoryNewsTranslations!]! @requireAuth
        categoryNewsTranslations(id: BigInt!): CategoryNewsTranslations
            @requireAuth
    }

    input CreateCategoryNewsTranslationsInput {
        category_news_id: BigInt!
        locale: String!
        name: String!
        description: String
    }

    input UpdateCategoryNewsTranslationsInput {
        category_news_id: BigInt
        locale: String
        name: String
        description: String
    }

    type Mutation {
        createCategoryNewsTranslations(
            input: CreateCategoryNewsTranslationsInput!
        ): CategoryNewsTranslations! @requireAuth
        updateCategoryNewsTranslations(
            id: BigInt!
            input: UpdateCategoryNewsTranslationsInput!
        ): CategoryNewsTranslations! @requireAuth
        deleteCategoryNewsTranslations(id: BigInt!): CategoryNewsTranslations!
            @requireAuth
    }
`;
