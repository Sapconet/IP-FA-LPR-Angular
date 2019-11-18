const express = require("express"),
  cors = require("cors");
// const bodyParser = require("body-parser");
// const { graphqlExpress, graphiqlExpress } = require("apollo-server-express");
// const { makeExecutableSchema } = require("graphql-tools");
const typeDefs = require("./gql/schema");
const resolvers = require("./gql/resolvers");
const { createServer } = require("http");
const { execute, subscribe } = require("graphql");
const { SubscriptionServer } = require("subscriptions-transport-ws");
const { getLastImg, getLabelTopic } = require("./kafka");
const { ApolloServer, gql } = require("apollo-server-express");

const PORT = 3000;

// Put together a schema
const schema = new ApolloServer({
  typeDefs,
  resolvers,
  playground: {
    endpoint: "graphql"
  }
});

// Initialize the app
const app = express();

var originsWhitelist = ["http://localhost:4200"];

var corsOptions = {
  origin: function(origin, callback) {
    var isWhitelisted = originsWhitelist.indexOf(origin) !== -1;
    callback(null, isWhitelisted);
  },
  credentials: true
};

// app.use("*", cors(corsOptions));

// The GraphQL endpoint
//app.use("/graphql", bodyParser.json(), graphqlExpress({ schema }));

// GraphiQL, a visual editor for queries
//app.use("/graphiql", graphiqlExpress({ endpointURL: "/graphql" }));

// const server = createServer(app);

// Start the server
/*app.listen(3000, () => {
  console.log('Go to http://localhost:3000/graphiql to run queries!');
});*/

schema.applyMiddleware({ app }, cors(corsOptions));

app.listen(PORT, () => {
  new SubscriptionServer(
    {
      execute,
      subscribe,
      schema
    },
    {
      server: app,
      path: "/graphql"
    }
  );
  console.log("Go to http://localhost:3000/graphql to run queries!");
});

//getLabelTopic();
