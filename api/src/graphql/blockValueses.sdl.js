export const schema = gql`
    type BlockValues {
        id: BigInt!
        code: String
        block_id: BigInt
        position: BigInt!
        key: String!
        type: String!
        created_at: DateTime
        updated_at: DateTime
        block_value_translations: [BlockValueTranslations]!
    }

    type Query {
        blockValueses: [BlockValues!]! @requireAuth
        blockValues(id: BigInt!): BlockValues @requireAuth
    }

    input CreateBlockValuesInput {
        code: String
        block_id: BigInt
        position: BigInt!
        key: String!
        type: String!
        created_at: DateTime
        updated_at: DateTime
    }

    input UpdateBlockValuesInput {
        code: String
        block_id: BigInt
        position: BigInt
        key: String
        type: String
        created_at: DateTime
        updated_at: DateTime
    }

    type Mutation {
        createBlockValues(input: CreateBlockValuesInput!): BlockValues!
            @requireAuth
        updateBlockValues(
            id: BigInt!
            input: UpdateBlockValuesInput!
        ): BlockValues! @requireAuth
        deleteBlockValues(id: BigInt!): BlockValues! @requireAuth
    }
`;
