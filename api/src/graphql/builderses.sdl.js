export const schema = gql`
    type Builders {
        id: BigInt!
        slug: String!
        is_active: Boolean!
        is_captcha: Boolean!
        is_redirect: String
        site_key: String
        secret_key: String
        created_at: DateTime
        updated_at: DateTime
        builder_translations: [BuilderTranslations]!
    }

    type Query {
        builderses: [Builders!]! @requireAuth
        builders(id: BigInt!): Builders @requireAuth
    }

    input CreateBuildersInput {
        slug: String!
        is_active: Boolean!
        is_captcha: Boolean!
        is_redirect: String
        site_key: String
        secret_key: String
        created_at: DateTime
        updated_at: DateTime
    }

    input UpdateBuildersInput {
        slug: String
        is_active: Boolean
        is_captcha: Boolean
        is_redirect: String
        site_key: String
        secret_key: String
        created_at: DateTime
        updated_at: DateTime
    }

    type Mutation {
        createBuilders(input: CreateBuildersInput!): Builders! @requireAuth
        updateBuilders(id: BigInt!, input: UpdateBuildersInput!): Builders!
            @requireAuth
        deleteBuilders(id: BigInt!): Builders! @requireAuth
    }
`;
