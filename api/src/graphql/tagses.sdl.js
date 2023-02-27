export const schema = gql`
    type Tags {
        id: BigInt!
        type: String!
        created_at: DateTime
        updated_at: DateTime
        tag_group: String
        tag_translations: [TagTranslations]
    }

    type Query {
        tagses(page: Int, limit: Int, locale: String): [Tags] @requireAuth
        tags(id: BigInt!): Tags @requireAuth
    }
    input CreateTagsInput {
        type: String!
        tag_group: String
    }

    input UpdateTagsInput {
        type: String
        tag_group: String
    }

    type Mutation {
        createTags(input: CreateTagsInput!): Tags! @requireAuth
        updateTags(id: BigInt!, input: UpdateTagsInput!): Tags! @requireAuth
        deleteTags(id: BigInt!): Tags! @requireAuth
    }
`;
