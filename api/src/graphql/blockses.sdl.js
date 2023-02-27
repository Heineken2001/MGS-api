export const schema = gql`
    type Blocks {
        id: BigInt!
        is_active: Boolean!
        html: String
        scss: String
        image_feature: String
        mobile: String
        amp: String
        created_at: DateTime
        updated_at: DateTime
        deleted_at: DateTime
        block_translation: [BlockTranslations]!
    }

    type Query {
        blockses: [Blocks!]! @requireAuth
        blocks(id: BigInt!): Blocks @requireAuth
    }

    input CreateBlocksInput {
        is_active: Boolean!
        html: String
        scss: String
        image_feature: String
        mobile: String
        amp: String
        created_at: DateTime
        updated_at: DateTime
        deleted_at: DateTime
    }

    input UpdateBlocksInput {
        is_active: Boolean
        html: String
        scss: String
        image_feature: String
        mobile: String
        amp: String
        created_at: DateTime
        updated_at: DateTime
        deleted_at: DateTime
    }

    type Mutation {
        createBlocks(input: CreateBlocksInput!): Blocks! @requireAuth
        updateBlocks(id: BigInt!, input: UpdateBlocksInput!): Blocks!
            @requireAuth
        deleteBlocks(id: BigInt!): Blocks! @requireAuth
    }
`;
