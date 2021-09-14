const auth = require('basic-auth');

const basicAuthCtx = ({ req }) => {
  // Auth package does the following:
  // * checks req.headers.authorization exist
  // * Matches Basic {token} with a regex
  // * Decodes the encoded user/pass string
  // * Returns a 'Credentials' class.
  const user = auth(req)

  if (!user) {
      throw new Error('must be authenticated!')
  }

  if (user.name !== 'user1@sideinc.com' || user.pass !== '676cfd34-e706-4cce-87ca-97f947c43bd4') {
      throw new Error('invalid credentials')
  }

  // We could use this in the future
  return { email: user.name }
}

module.exports = basicAuthCtx