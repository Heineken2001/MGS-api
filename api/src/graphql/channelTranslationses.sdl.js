export const schema = gql`
    type ChannelTranslations {
        id: BigInt!
        channel_id: BigInt!
        locale: String!
        name: String!
        body: String
        Channels: Channels
    }

    type Query {
        channelTranslationses: [ChannelTranslations!]! @requireAuth
        channelTranslations(id: BigInt!): ChannelTranslations @requireAuth
    }

    input CreateChannelTranslationsInput {
        channel_id: BigInt!
        locale: String!
        name: String!
        body: String
    }

    input UpdateChannelTranslationsInput {
        channel_id: BigInt
        locale: String
        name: String
        body: String
    }

    type Mutation {
        createChannelTranslations(
            input: CreateChannelTranslationsInput!
        ): ChannelTranslations! @requireAuth
        updateChannelTranslations(
            id: BigInt!
            input: UpdateChannelTranslationsInput!
        ): ChannelTranslations! @requireAuth
        deleteChannelTranslations(id: BigInt!): ChannelTranslations!
            @requireAuth
    }
`;
