
export const schema = gql`
    type tag_translations {
        id: BigInt!
        tag_id: BigInt!
        locale: String
        slug: String
        title: String
        short_description: String
        long_description: String
        futured_image: String
        formdata: JSON
        jsonschema: JSON
        uischema: JSON
    }`