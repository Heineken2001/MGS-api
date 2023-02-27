export const schema = gql`
    type Templates {
        id: BigInt!
        is_active: Boolean!
        deleted_at: DateTime
        created_at: DateTime
        updated_at: DateTime
        template_translations: [TemplateTranslations]!
    }

    type Query {
        templateses: [Templates!]! @requireAuth
        templates(id: BigInt!): Templates @requireAuth
    }

    input CreateTemplatesInput {
        is_active: Boolean!
        deleted_at: DateTime
        created_at: DateTime
        updated_at: DateTime
    }

    input UpdateTemplatesInput {
        is_active: Boolean
        deleted_at: DateTime
        created_at: DateTime
        updated_at: DateTime
    }

    type Mutation {
        createTemplates(input: CreateTemplatesInput!): Templates! @requireAuth
        updateTemplates(id: BigInt!, input: UpdateTemplatesInput!): Templates!
            @requireAuth
        deleteTemplates(id: BigInt!): Templates! @requireAuth
    }
`;
