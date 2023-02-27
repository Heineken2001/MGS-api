export const schema = gql`
    type TemplateTranslations {
        id: BigInt!
        template_id: BigInt!
        slug: String!
        title: String!
        locale: String!
        templates: Templates!
    }

    type Query {
        templateTranslationses: [TemplateTranslations!]! @requireAuth
        templateTranslations(id: BigInt!): TemplateTranslations @requireAuth
    }

    input CreateTemplateTranslationsInput {
        template_id: BigInt!
        slug: String!
        title: String!
        locale: String!
    }

    input UpdateTemplateTranslationsInput {
        template_id: BigInt
        slug: String
        title: String
        locale: String
    }

    type Mutation {
        createTemplateTranslations(
            input: CreateTemplateTranslationsInput!
        ): TemplateTranslations! @requireAuth
        updateTemplateTranslations(
            id: BigInt!
            input: UpdateTemplateTranslationsInput!
        ): TemplateTranslations! @requireAuth
        deleteTemplateTranslations(id: BigInt!): TemplateTranslations!
            @requireAuth
    }
`;
