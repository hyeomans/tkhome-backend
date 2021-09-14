const axios = require('axios')

const simplyretsClient = (username, password) => {
  const client = axios.create({
    baseURL: 'https://api.simplyrets.com',
    auth: {
      username,
      password
    }
  })

  return client
}

module.exports = simplyretsClient