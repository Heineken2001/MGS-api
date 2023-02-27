export const standard = defineScenario({
    builders: {
        one: { data: { slug: 'String', is_active: true, is_captcha: true } },
        two: { data: { slug: 'String', is_active: true, is_captcha: true } }
    }
});
