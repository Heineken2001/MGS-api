export const standard = defineScenario({
    blockTranslations: {
        one: {
            data: {
                locale: 'String',
                name: 'String',
                blocks: { create: { is_active: true } }
            }
        },
        two: {
            data: {
                locale: 'String',
                name: 'String',
                blocks: { create: { is_active: true } }
            }
        }
    }
});
