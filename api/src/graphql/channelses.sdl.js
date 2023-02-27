export const schema = gql`
    type Channels {
        id: BigInt!
        slug: String!
        is_active: Boolean!
        created_at: DateTime
        updated_at: DateTime
        channel_translations: [ChannelTranslations]!
    }

    type Query {
        channelses: [Channels!]! @requireAuth
        channels(id: BigInt!): Channels @requireAuth
    }

    input CreateChannelsInput {
        slug: String!
        is_active: Boolean!
        created_at: DateTime
        updated_at: DateTime
    }

    input UpdateChannelsInput {
        slug: String
        is_active: Boolean
        created_at: DateTime
        updated_at: DateTime
    }

    type Mutation {
        createChannels(input: CreateChannelsInput!): Channels! @requireAuth
        updateChannels(id: BigInt!, input: UpdateChannelsInput!): Channels!
            @requireAuth
        deleteChannels(id: BigInt!): Channels! @requireAuth
    }
`;
