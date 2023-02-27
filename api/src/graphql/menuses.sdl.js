export const schema = gql`
    type Menus {
        id: BigInt!
        is_active: Boolean!
        created_at: DateTime
        updated_at: DateTime
        position: Int
        menu_translations: [MenuTranslations]
    }

    type Query {
        menuses(locale: String): [Menus!]! @requireAuth
        menus(id: BigInt!): Menus @requireAuth
    }

    input CreateMenusInput {
        is_active: Boolean!
        position: Int
    }

    input UpdateMenusInput {
        is_active: Boolean
        created_at: DateTime
        updated_at: DateTime
        position: Int
    }

    type Mutation {
        createMenus(input: CreateMenusInput!): Menus! @requireAuth
        updateMenus(id: BigInt!, input: UpdateMenusInput!): Menus! @requireAuth
        deleteMenus(id: BigInt!): Menus! @requireAuth
    }
`;
