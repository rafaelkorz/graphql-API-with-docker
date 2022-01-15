import { GraphQLObjectType, GraphQLSchema } from "graphql";
import { GET_STUDENTS } from "./Queries/Student";
import { CREATE_STUDENT, DELETE_STUDENT, UPDATE_STUDENT } from "./Mutations/Student";

const Query = new GraphQLObjectType({
  name: "Query",
  fields: {
    getAllStudents: GET_STUDENTS,
  },
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    createStudent: CREATE_STUDENT,
    deleteStudent: DELETE_STUDENT,
    updateStudent: UPDATE_STUDENT,
  },
});

export const schema = new GraphQLSchema({
  query: Query,
  mutation: Mutation,
});
