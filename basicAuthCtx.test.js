const basicAuthCtx = require('./basicAuthCtx')

test('allows hardcoded values', () => {
  const username = 'user1@sideinc.com'
  const password = '676cfd34-e706-4cce-87ca-97f947c43bd4'
  const encoded = Buffer.from(`${username}:${password}`).toString('base64')

  const req = {
    headers: {
      'authorization': `Basic ${encoded}`
    }
  }

  const result = basicAuthCtx({req})

  expect(result).toEqual({email: 'user1@sideinc.com'})
})

test('throws when user/pass is not correct', () => {
  const username = 'user1@sideinc.com'
  const password = 'incorrect password'
  const encoded = Buffer.from(`${username}:${password}`).toString('base64')

  const req = {
    headers: {
      'authorization': `Basic ${encoded}`
    }
  }
  expect(basicAuthCtx.bind(null, {req})).toThrowError('invalid credentials')
})

test('throws when authorization header is not correct', () => {
  const req = {
    headers: {
      'authorization': `Basic empty`
    }
  }
  expect(basicAuthCtx.bind(null, {req})).toThrowError('must be authenticated!')
})