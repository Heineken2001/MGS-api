import { tagses, tags, createTags, updateTags, deleteTags } from './tagses'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('tagses', () => {
  scenario('returns all tagses', async (scenario) => {
    const result = await tagses()

    expect(result.length).toEqual(Object.keys(scenario.tags).length)
  })

  scenario('returns a single tags', async (scenario) => {
    const result = await tags({ id: scenario.tags.one.id })

    expect(result).toEqual(scenario.tags.one)
  })

  scenario('creates a tags', async () => {
    const result = await createTags({
      input: { type: 'String', tag_group: 'String' },
    })

    expect(result.type).toEqual('String')
    expect(result.tag_group).toEqual('String')
  })

  scenario('updates a tags', async (scenario) => {
    const original = await tags({ id: scenario.tags.one.id })
    const result = await updateTags({
      id: original.id,
      input: { type: 'String2' },
    })

    expect(result.type).toEqual('String2')
  })

  scenario('deletes a tags', async (scenario) => {
    const original = await deleteTags({ id: scenario.tags.one.id })
    const result = await tags({ id: original.id })

    expect(result).toEqual(null)
  })
})
