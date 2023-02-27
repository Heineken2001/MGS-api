export const schema = gql`
    type MenuTranslations {
        id: BigInt!
        menu_id: BigInt!
        locale: String!
        name: String!
        menus: Menus!
    }

    type Query {
        menuTranslationses: [MenuTranslations!]! @requireAuth
        menuTranslations(id: BigInt!): MenuTranslations @requireAuth
    }

    input CreateMenuTranslationsInput {
        menu_id: BigInt!
        locale: String!
        name: String!
    }

    input UpdateMenuTranslationsInput {
        menu_id: BigInt
        locale: String
        name: String
    }

    type Mutation {
        createMenuTranslations(
            input: CreateMenuTranslationsInput!
        ): MenuTranslations! @requireAuth
        updateMenuTranslations(
            id: BigInt!
            input: UpdateMenuTranslationsInput!
        ): MenuTranslations! @requireAuth
        deleteMenuTranslations(id: BigInt!): MenuTranslations! @requireAuth
    }
`;
