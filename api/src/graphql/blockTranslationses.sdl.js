export const schema = gql`
    type BlockTranslations {
        id: BigInt!
        block_id: BigInt!
        locale: String!
        name: String!
        created_at: DateTime
        updated_at: DateTime
        blocks: Blocks!
    }

    type Query {
        blockTranslationses: [BlockTranslations!]! @requireAuth
        blockTranslations(id: BigInt!): BlockTranslations @requireAuth
    }

    input CreateBlockTranslationsInput {
        block_id: BigInt!
        locale: String!
        name: String!
        created_at: DateTime
        updated_at: DateTime
    }

    input UpdateBlockTranslationsInput {
        block_id: BigInt
        locale: String
        name: String
        created_at: DateTime
        updated_at: DateTime
    }

    type Mutation {
        createBlockTranslations(
            input: CreateBlockTranslationsInput!
        ): BlockTranslations! @requireAuth
        updateBlockTranslations(
            id: BigInt!
            input: UpdateBlockTranslationsInput!
        ): BlockTranslations! @requireAuth
        deleteBlockTranslations(id: BigInt!): BlockTranslations! @requireAuth
    }
`;
