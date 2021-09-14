const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const { ApolloServerPluginDrainHttpServer, ApolloServerPluginLandingPageGraphQLPlayground } = require('apollo-server-core')
const http = require('http')

const expressApp = express();
const httpServer = http.createServer(expressApp)
const simplyretsClient = require('./simplyrets-client')('simplyrets', 'simplyrets')

const resolvers = require('./resolvers')(simplyretsClient)

const graphqlServer = new ApolloServer({
    typeDefs: require('./schema'),
    resolvers,
    plugins: [
        ApolloServerPluginDrainHttpServer({ httpServer }), //Plugin to avoid sending request when we send the SIGNINT signal to stop.
        ApolloServerPluginLandingPageGraphQLPlayground()
    ],
    context: require('./basicAuthCtx')
})

graphqlServer.start()
    .then(() => {
        graphqlServer.applyMiddleware({ app: expressApp, path: '/graphql' })
        return new Promise(resolve => httpServer.listen({ port: 4000 }, resolve))
    }).then(() => {
        console.log(`Listening on http://localhost:4000/graphql`)
    })

