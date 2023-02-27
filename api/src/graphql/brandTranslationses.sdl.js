export const schema = gql`
    type BrandTranslations {
        id: BigInt!
        brand_id: BigInt!
        locale: String!
        name: String!
        Brands: Brands
    }

    type Query {
        brandTranslationses: [BrandTranslations!]! @requireAuth
        brandTranslations(id: BigInt!): BrandTranslations @requireAuth
    }

    input CreateBrandTranslationsInput {
        brand_id: BigInt!
        locale: String!
        name: String!
    }

    input UpdateBrandTranslationsInput {
        brand_id: BigInt
        locale: String
        name: String
    }

    type Mutation {
        createBrandTranslations(
            input: CreateBrandTranslationsInput!
        ): BrandTranslations! @requireAuth
        updateBrandTranslations(
            id: BigInt!
            input: UpdateBrandTranslationsInput!
        ): BrandTranslations! @requireAuth
        deleteBrandTranslations(id: BigInt!): BrandTranslations! @requireAuth
    }
`;
