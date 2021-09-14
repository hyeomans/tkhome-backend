
// We pass the Simplyrets client as a dependency so we can easily mock it
// in our tests.
const resolvers = (simplyretsClient) => ({
  Query: {
      properties: require('./propertiesResolver')(simplyretsClient)
  }
})

module.exports = resolvers