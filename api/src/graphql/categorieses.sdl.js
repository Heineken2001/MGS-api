export const schema = gql`
    type Categories {
        id: BigInt!
        parent_id: BigInt
        position: BigInt
        is_searchable: Boolean!
        is_active: Boolean!
        created_at: DateTime
        updated_at: DateTime
        type: String
        parent: Categories
        categories: [Categories]
        category_translations: [CategoryTranslations]
    }

    type Query {
        categorieses(locale: String): [Categories!]! @requireAuth
        categories(id: BigInt!): Categories @requireAuth
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
        createCategories(input: CreateCategoriesInput!): Categories!
            @requireAuth
        updateCategories(
            id: BigInt!
            input: UpdateCategoriesInput!
        ): Categories! @requireAuth
        deleteCategories(id: BigInt!): Categories! @requireAuth
    }
`;
