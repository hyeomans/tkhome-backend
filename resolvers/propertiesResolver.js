
//Here we could have logging and metrics reporting for production.
module.exports = (simplyRetsClient) => {
  return async (parent, input) => {
    try {
      const { data } = await simplyRetsClient.get('/properties', { params: { q: input.city } })

      return data
    } catch (e) {
      console.error(e)
      throw new Error('an error occurred while querying Simplyrets API')
    }
  }
}