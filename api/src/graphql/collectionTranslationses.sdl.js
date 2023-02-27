export const schema = gql`
    type CollectionTranslations {
        id: BigInt!
        collection_id: BigInt!
        locale: String!
        slug: String!
        title: String!
        short_description: String
        long_description: String
        featured_image: String
        formdata: JSON
        jsonschema: JSON
        uischema: JSON
        Collections: Collections
    }

    type Query {
        collectionTranslationses: [CollectionTranslations!]! @requireAuth
        collectionTranslations(id: BigInt!): CollectionTranslations @requireAuth
    }

    input CreateCollectionTranslationsInput {
        collection_id: BigInt!
        locale: String!
        slug: String!
        title: String!
        short_description: String
        long_description: String
        featured_image: String
        formdata: JSON
        jsonschema: JSON
        uischema: JSON
    }

    input UpdateCollectionTranslationsInput {
        collection_id: BigInt
        locale: String
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
        createCollectionTranslations(
            input: CreateCollectionTranslationsInput!
        ): CollectionTranslations! @requireAuth
        updateCollectionTranslations(
            id: BigInt!
            input: UpdateCollectionTranslationsInput!
        ): CollectionTranslations! @requireAuth
        deleteCollectionTranslations(id: BigInt!): CollectionTranslations!
            @requireAuth
    }
`;
