export const schema = gql`
    type BlockValueTranslations {
        id: BigInt!
        block_value_id: BigInt!
        locale: String!
        title: String!
        created_at: DateTime
        updated_at: DateTime
        block_values: BlockValues!
    }

    type Query {
        blockValueTranslationses: [BlockValueTranslations!]! @requireAuth
        blockValueTranslations(id: BigInt!): BlockValueTranslations @requireAuth
    }

    input CreateBlockValueTranslationsInput {
        block_value_id: BigInt!
        locale: String!
        title: String!
        created_at: DateTime
        updated_at: DateTime
    }

    input UpdateBlockValueTranslationsInput {
        block_value_id: BigInt
        locale: String
        title: String
        created_at: DateTime
        updated_at: DateTime
    }

    type Mutation {
        createBlockValueTranslations(
            input: CreateBlockValueTranslationsInput!
        ): BlockValueTranslations! @requireAuth
        updateBlockValueTranslations(
            id: BigInt!
            input: UpdateBlockValueTranslationsInput!
        ): BlockValueTranslations! @requireAuth
        deleteBlockValueTranslations(id: BigInt!): BlockValueTranslations!
            @requireAuth
    }
`;
