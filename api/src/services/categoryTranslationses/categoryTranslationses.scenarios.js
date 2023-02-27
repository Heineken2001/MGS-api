export const standard = defineScenario({
    categoryTranslations: {
        one: {
            data: {
                locale: 'String',
                name: 'String',
                slug: 'String',
                categories: { create: { is_searchable: true, is_active: true } }
            }
        },
        two: {
            data: {
                locale: 'String',
                name: 'String',
                slug: 'String',
                categories: { create: { is_searchable: true, is_active: true } }
            }
        }
    }
});
