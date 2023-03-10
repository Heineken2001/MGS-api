
export const schema = gql`
    type TagTranslations {
        id: BigInt!
        tag_id: BigInt!
        locale: String
        slug: String
        title: String
        short_description: String
        long_description: String
        featured_image: String
        formdata: JSON
        jsonschema: JSON
        uischema: JSON
    }`