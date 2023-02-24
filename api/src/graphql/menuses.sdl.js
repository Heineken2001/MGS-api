export const schema = gql`
    type menus {
        id: BigInt!
        is_active: Boolean!
        created_at: DateTime
        updated_at: DateTime
        position: Int
    }

    type Query {
        menuses: [menus!]! @requireAuth
        menus(id: BigInt!): menus @requireAuth
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
        createMenus(input: CreateMenusInput!): menus! @requireAuth
        updateMenus(id: BigInt!, input: UpdateMenusInput!): menus! @requireAuth
        deleteMenus(id: BigInt!): menus! @requireAuth
    }
`;
