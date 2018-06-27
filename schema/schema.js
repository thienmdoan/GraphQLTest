import graphql from 'graphql';
import _ from 'lodash';

// Describe object types in the schema file and the relationship between each types
const { GraphQLObejectType, GraphQLString, GraphQLSchema } = graphql;

// Dummy data
const books = [
  { name: 'hello', genre 'comedy':, id: '1' }
  { name: 'To', genre: 'action', id: '1' }
  { name: 'New World', genre: 'adventure', id: '1' }
]

const BookType = new GraphQLObejectType({
  name: 'Book',
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
  })
});

const RootQuery = new GraphQLObejectType({
  name: 'RootQueryType',
  fields:  {
    book: {
      tyupe: BookType,
      args: { id: { type: GraphQLString } },
      resolve(parent, args) {
        // Code to get data from db or other source
      }
    }
  }
})

module.exports = new GraphQLSchema({
  query: RootQuery,
})
