export const schema = gql`
    type BuilderTranslations {
        id: BigInt!
        builder_id: BigInt!
        locale: String!
        name: String!
        body: String
        embedded: String!
        jsonschemaform: JSON!
        Builders: Builders
    }

    type Query {
        builderTranslationses: [BuilderTranslations!]! @requireAuth
        builderTranslations(id: BigInt!): BuilderTranslations @requireAuth
    }

    input CreateBuilderTranslationsInput {
        builder_id: BigInt!
        locale: String!
        name: String!
        body: String
        embedded: String!
        jsonschemaform: JSON!
    }

    input UpdateBuilderTranslationsInput {
        builder_id: BigInt
        locale: String
        name: String
        body: String
        embedded: String
        jsonschemaform: JSON
    }

    type Mutation {
        createBuilderTranslations(
            input: CreateBuilderTranslationsInput!
        ): BuilderTranslations! @requireAuth
        updateBuilderTranslations(
            id: BigInt!
            input: UpdateBuilderTranslationsInput!
        ): BuilderTranslations! @requireAuth
        deleteBuilderTranslations(id: BigInt!): BuilderTranslations!
            @requireAuth
    }
`;
