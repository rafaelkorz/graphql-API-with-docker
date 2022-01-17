import { GraphQLObjectType, GraphQLInt, GraphQLString } from "graphql";

export const UserType = new GraphQLObjectType({
  name: "User",
  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    cpf: { type: GraphQLString },
    email: { type: GraphQLString },
  }),
});
