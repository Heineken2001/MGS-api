export const schema = gql`
    type CouponTranslations {
        id: BigInt!
        coupon_id: BigInt!
        locale: String!
        name: String!
    }

    type Query {
        couponTranslationses: [CouponTranslations!]! @requireAuth
        couponTranslations(id: BigInt!): CouponTranslations @requireAuth
    }

    input CreateCouponTranslationsInput {
        coupon_id: BigInt!
        locale: String!
        name: String!
    }

    input UpdateCouponTranslationsInput {
        coupon_id: BigInt
        locale: String
        name: String
    }

    type Mutation {
        createCouponTranslations(
            input: CreateCouponTranslationsInput!
        ): CouponTranslations! @requireAuth
        updateCouponTranslations(
            id: BigInt!
            input: UpdateCouponTranslationsInput!
        ): CouponTranslations! @requireAuth
        deleteCouponTranslations(id: BigInt!): CouponTranslations! @requireAuth
    }
`;
