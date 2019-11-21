// import { gql } from "apollo-server-express"
// const gql = require("apollo-server-express");
const gql = require("graphql-tag");

// The GraphQL schema in string form
const typeDefs = gql`
  type Query {
    licenceplates: [LicencePlate]
    licenceplate(prediction: String): LicencePlate
    startPlateGrab: String
    stopPlateGrab: String
    resumePlateGrab: String
    suspendPlateGrab: String
  }

  type Subscription {
    licenceplateSub: LicencePlate
    stateSub: String
  }

  type LicencePlate {
    id: Int
    image: String
    prediction: String
    value: Float
  }

  schema {
    query: Query
    subscription: Subscription
  }
`;

module.exports = typeDefs;
