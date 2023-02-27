export const schema = gql`
    type Collections {
        id: BigInt!
        target: String!
        conditions: JSON
        type: String!
        is_active: Boolean!
        deleted_at: DateTime
        created_at: DateTime
        updated_at: DateTime
        post_type: String
        collection_translations: [CollectionTranslations]!
    }

    type Query {
        collectionses: [Collections!]! @requireAuth
        collections(id: BigInt!): Collections @requireAuth
    }

    input CreateCollectionsInput {
        target: String!
        conditions: JSON
        type: String!
        is_active: Boolean!
        deleted_at: DateTime
        created_at: DateTime
        updated_at: DateTime
        post_type: String
    }

    input UpdateCollectionsInput {
        target: String
        conditions: JSON
        type: String
        is_active: Boolean
        deleted_at: DateTime
        created_at: DateTime
        updated_at: DateTime
        post_type: String
    }

    type Mutation {
        createCollections(input: CreateCollectionsInput!): Collections!
            @requireAuth
        updateCollections(
            id: BigInt!
            input: UpdateCollectionsInput!
        ): Collections! @requireAuth
        deleteCollections(id: BigInt!): Collections! @requireAuth
    }
`;
