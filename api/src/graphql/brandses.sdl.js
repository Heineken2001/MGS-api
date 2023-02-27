export const schema = gql`
    type Brands {
        id: BigInt!
        slug: String!
        is_active: Boolean!
        created_at: DateTime
        updated_at: DateTime
        brand_translations: [BrandTranslations]!
    }

    type Query {
        brandses: [Brands!]! @requireAuth
        brands(id: BigInt!): Brands @requireAuth
    }

    input CreateBrandsInput {
        slug: String!
        is_active: Boolean!
        created_at: DateTime
        updated_at: DateTime
    }

    input UpdateBrandsInput {
        slug: String
        is_active: Boolean
        created_at: DateTime
        updated_at: DateTime
    }

    type Mutation {
        createBrands(input: CreateBrandsInput!): Brands! @requireAuth
        updateBrands(id: BigInt!, input: UpdateBrandsInput!): Brands!
            @requireAuth
        deleteBrands(id: BigInt!): Brands! @requireAuth
    }
`;
