export const schema = gql`
    type categories {
        id: BigInt!
        parent_id: BigInt
        position: BigInt
        is_searchable: Boolean!
        is_active: Boolean!
        created_at: DateTime
        updated_at: DateTime
        type: String
        parent: categories
        categories: [categories]
        category_translations: [CategoryTranslations]
    }

    type Query {
        categorieses(locale: String): [categories!]! @requireAuth
        categories(id: BigInt!): categories @requireAuth
    }

    input CreateCategoriesInput {
        parent_id: BigInt
        position: BigInt
        is_searchable: Boolean!
        is_active: Boolean!
        created_at: DateTime
        updated_at: DateTime
        type: String
    }

    input UpdateCategoriesInput {
        parent_id: BigInt
        position: BigInt
        is_searchable: Boolean
        is_active: Boolean
        created_at: DateTime
        updated_at: DateTime
        type: String
    }

    type Mutation {
        createCategories(input: CreateCategoriesInput!): categories!
            @requireAuth
        updateCategories(
            id: BigInt!
            input: UpdateCategoriesInput!
        ): categories! @requireAuth
        deleteCategories(id: BigInt!): categories! @requireAuth
    }
`;
