export const schema = gql`
    type CategoryTranslations {
        id: BigInt!
        category_id: BigInt!
        locale: String!
        name: String!
        content: String
        description: String
        slug: String!
        title: String
        short_description: String
        long_description: String
        featured_image: String
        formdata: JSON
        jsonschema: JSON
        uischema: JSON
        categories: categories!
    }

    type Query {
        categoryTranslationses: [CategoryTranslations!]! @requireAuth
        categoryTranslations(id: BigInt!): CategoryTranslations @requireAuth
    }

    input CreateCategoryTranslationsInput {
        category_id: BigInt!
        locale: String!
        name: String!
        content: String
        description: String
        slug: String!
        title: String
        short_description: String
        long_description: String
        featured_image: String
        formdata: JSON
        jsonschema: JSON
        uischema: JSON
    }

    input UpdateCategoryTranslationsInput {
        category_id: BigInt
        locale: String
        name: String
        content: String
        description: String
        slug: String
        title: String
        short_description: String
        long_description: String
        featured_image: String
        formdata: JSON
        jsonschema: JSON
        uischema: JSON
    }

    type Mutation {
        createCategoryTranslations(
            input: CreateCategoryTranslationsInput!
        ): CategoryTranslations! @requireAuth
        updateCategoryTranslations(
            id: BigInt!
            input: UpdateCategoryTranslationsInput!
        ): CategoryTranslations! @requireAuth
        deleteCategoryTranslations(id: BigInt!): CategoryTranslations!
            @requireAuth
    }
`;
