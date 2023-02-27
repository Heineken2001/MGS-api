export const schema = gql`
    type Coupons {
        id: BigInt!
        code: String!
        value: Float
        is_percent: Boolean!
        free_shipping: Boolean!
        minimum_spend: Float
        maximum_spend: Float
        usage_limit_per_coupon: BigInt
        usage_limut_per_customer: BigInt
        used: BigInt!
        is_active: Boolean!
        start_date: DateTime
        end_date: DateTime
        deleted_at: DateTime
        created_at: DateTime
        updated_at: DateTime
    }

    type Query {
        couponses: [Coupons!]! @requireAuth
        coupons(id: BigInt!): Coupons @requireAuth
    }

    input CreateCouponsInput {
        code: String!
        value: Float
        is_percent: Boolean!
        free_shipping: Boolean!
        minimum_spend: Float
        maximum_spend: Float
        usage_limit_per_coupon: BigInt
        usage_limut_per_customer: BigInt
        used: BigInt!
        is_active: Boolean!
        start_date: DateTime
        end_date: DateTime
        deleted_at: DateTime
        created_at: DateTime
        updated_at: DateTime
    }

    input UpdateCouponsInput {
        code: String
        value: Float
        is_percent: Boolean
        free_shipping: Boolean
        minimum_spend: Float
        maximum_spend: Float
        usage_limit_per_coupon: BigInt
        usage_limut_per_customer: BigInt
        used: BigInt
        is_active: Boolean
        start_date: DateTime
        end_date: DateTime
        deleted_at: DateTime
        created_at: DateTime
        updated_at: DateTime
    }

    type Mutation {
        createCoupons(input: CreateCouponsInput!): Coupons! @requireAuth
        updateCoupons(id: BigInt!, input: UpdateCouponsInput!): Coupons!
            @requireAuth
        deleteCoupons(id: BigInt!): Coupons! @requireAuth
    }
`;
