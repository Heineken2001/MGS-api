export const schema = gql`
    type tags {
        id: BigInt!
        type: String!
        created_at: DateTime
        updated_at: DateTime
        tag_group: String
        tag_translations: [tag_translations]
    }

    type Query {
        tagses(page: Int, limit: Int, locale: String): [tags] @requireAuth
        tags(id: BigInt!): tags @requireAuth
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
        createTags(input: CreateTagsInput!): tags! @requireAuth
        updateTags(id: BigInt!, input: UpdateTagsInput!): tags! @requireAuth
        deleteTags(id: BigInt!): tags! @requireAuth
    }
`;
