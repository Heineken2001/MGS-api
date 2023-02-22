export const schema = gql`
    type tags {
        id: BigInt!
        type: String!
        created_at: DateTime
        updated_at: DateTime
        tag_group: String
        tag_translations: tag_translations
    }

    type tag_translations {
        id: BigInt!
        tag_id: BigInt!
        locale: String
        slug: String
        title: String
        short_description: String
        long_description: String
        futured_image: String
        formdata: JSON
        jsonschema: JSON
        uischema: JSON
    }

    type Query {
        tagses(page: Int, limit: Int): [tags] @requireAuth
        tags(id: BigInt!): tags @requireAuth
        tag_translations: [tag_translations] @requireAuth
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
