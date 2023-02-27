export const schema = gql`
    type CategoryNews {
        id: BigInt!
        parent_id: BigInt
        slug: String!
        position: BigInt
        is_searchable: Boolean!
        is_active: Boolean!
        created_at: DateTime
        updated_at: DateTime
        category_news_translations: [CategoryNewsTranslations]!
    }

    type Query {
        categoryNewses: [CategoryNews!]! @requireAuth
        categoryNews(id: BigInt!): CategoryNews @requireAuth
    }

    input CreateCategoryNewsInput {
        parent_id: BigInt
        slug: String!
        position: BigInt
        is_searchable: Boolean!
        is_active: Boolean!
        created_at: DateTime
        updated_at: DateTime
    }

    input UpdateCategoryNewsInput {
        parent_id: BigInt
        slug: String
        position: BigInt
        is_searchable: Boolean
        is_active: Boolean
        created_at: DateTime
        updated_at: DateTime
    }

    type Mutation {
        createCategoryNews(input: CreateCategoryNewsInput!): CategoryNews!
            @requireAuth
        updateCategoryNews(
            id: BigInt!
            input: UpdateCategoryNewsInput!
        ): CategoryNews! @requireAuth
        deleteCategoryNews(id: BigInt!): CategoryNews! @requireAuth
    }
`;
