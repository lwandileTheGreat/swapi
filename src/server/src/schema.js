import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLSchema
} from 'graphql';

import fetch from 'node-fetch';

import { BASE_URL } from './constants';

const PersonType = new GraphQLObjectType({
  name: 'Person',
  description: 'A star wars Character',
  fields: () => ({
    name: {
      type: GraphQLString,
      description: 'A characters  name',
      resolve: (person) => person.name
    },
    gender: {
      type: GraphQLString,
      description: 'A characters gender',
      resolve: (person) => person.gender
    },
    mass: {
      type: GraphQLString,
      description: 'The mass of a character',
      resolve: (person) => person.mass
    },
    height: {
      type: GraphQLString,
      description: 'The height of a character',
      resolve: (person) => person.height 
    },
    
    homeworld: { 
      type: GraphQLString,
      description: 'Home world',
      resolve: (person) => person.homeworld
    }
  })
});

const QueryType = new GraphQLObjectType({
  name: 'Query',
  description: 'Root query of all',
  fields: () => ({
    People: {
      type: new GraphQLList(PersonType),
      description: 'All Star Wars Characters',
      resolve: (root, args) => fetch(`${BASE_URL}/people`)
        .then(response => response.json())
        .then(data => data.results)
    },
    Person: {
      type: PersonType,
      args: {
        id: { 
          type: GraphQLString
        }
      },
      resolve: (root, args) => fetch(`${BASE_URL}/people/${args.id}`)
          .then(response => response.json())
          .then(data => data)
      }
  })
})

export default new GraphQLSchema({
  query: QueryType
});