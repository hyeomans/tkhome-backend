const propertiesResolverInit = require('./propertiesResolver')
const mockedPropertiesData = require('./properties.mock.json')

test('should fetch empty properties', async () => {
  const mockedGet = jest.fn()
  mockedGet.mockResolvedValue({data: []})
  const client = {
    get: mockedGet
  }
  const propertiesResolver = propertiesResolverInit(client)
  
  const result = await propertiesResolver(null, {city: 'Houston'})
  
  expect(result).toEqual([])
})

test('should fetch properties', async () => {
  const mockedGet = jest.fn()
  mockedGet.mockResolvedValue({data: mockedPropertiesData})
  const client = {
    get: mockedGet
  }
  const propertiesResolver = propertiesResolverInit(client)
  
  const result = await propertiesResolver(null, {city: 'Houston'})
  
  expect(result.length).toEqual(13)
})