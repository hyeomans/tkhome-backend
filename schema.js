const { gql } = require('apollo-server-express');
const simplyretsTypes = require('./types');

//Import types defined by Side team and properly use them for our queries.
const typeDefs = gql`
${simplyretsTypes}
type Query {
    properties(city: String!): [Listing]
}
`

module.exports = typeDefs