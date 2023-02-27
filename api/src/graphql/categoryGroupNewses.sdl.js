export const schema = gql`
    type CategoryGroupNews {
        id: BigInt!
        parent_id: BigInt
        slug: String!
        position: BigInt
        is_searchable: Boolean!
        is_active: Boolean!
        created_at: DateTime
        updated_at: DateTime
        category_group_news_translations: [CategoryGroupNewsTranslations]!
    }

    type Query {
        categoryGroupNewses: [CategoryGroupNews!]! @requireAuth
        categoryGroupNews(id: BigInt!): CategoryGroupNews @requireAuth
    }

    input CreateCategoryGroupNewsInput {
        parent_id: BigInt
        slug: String!
        position: BigInt
        is_searchable: Boolean!
        is_active: Boolean!
        created_at: DateTime
        updated_at: DateTime
    }

    input UpdateCategoryGroupNewsInput {
        parent_id: BigInt
        slug: String
        position: BigInt
        is_searchable: Boolean
        is_active: Boolean
        created_at: DateTime
        updated_at: DateTime
    }

    type Mutation {
        createCategoryGroupNews(
            input: CreateCategoryGroupNewsInput!
        ): CategoryGroupNews! @requireAuth
        updateCategoryGroupNews(
            id: BigInt!
            input: UpdateCategoryGroupNewsInput!
        ): CategoryGroupNews! @requireAuth
        deleteCategoryGroupNews(id: BigInt!): CategoryGroupNews! @requireAuth
    }
`;
