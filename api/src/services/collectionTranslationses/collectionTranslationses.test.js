import {
    collectionTranslationses,
    collectionTranslations,
    createCollectionTranslations,
    updateCollectionTranslations,
    deleteCollectionTranslations
} from './collectionTranslationses';

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('collectionTranslationses', () => {
    scenario('returns all collectionTranslationses', async (scenario) => {
        const result = await collectionTranslationses();

        expect(result.length).toEqual(
            Object.keys(scenario.collectionTranslations).length
        );
    });

    scenario('returns a single collectionTranslations', async (scenario) => {
        const result = await collectionTranslations({
            id: scenario.collectionTranslations.one.id
        });

        expect(result).toEqual(scenario.collectionTranslations.one);
    });

    scenario('creates a collectionTranslations', async (scenario) => {
        const result = await createCollectionTranslations({
            input: {
                collection_id:
                    scenario.collectionTranslations.two.collection_id,
                locale: 'String',
                slug: 'String',
                title: 'String'
            }
        });

        expect(result.collection_id).toEqual(
            scenario.collectionTranslations.two.collection_id
        );

        expect(result.locale).toEqual('String');
        expect(result.slug).toEqual('String');
        expect(result.title).toEqual('String');
    });

    scenario('updates a collectionTranslations', async (scenario) => {
        const original = await collectionTranslations({
            id: scenario.collectionTranslations.one.id
        });
        const result = await updateCollectionTranslations({
            id: original.id,
            input: { locale: 'String2' }
        });

        expect(result.locale).toEqual('String2');
    });

    scenario('deletes a collectionTranslations', async (scenario) => {
        const original = await deleteCollectionTranslations({
            id: scenario.collectionTranslations.one.id
        });
        const result = await collectionTranslations({ id: original.id });

        expect(result).toEqual(null);
    });
});
