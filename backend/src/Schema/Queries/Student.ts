import { GraphQLList, GraphQLString } from "graphql";
import { UserType } from "../TypeDefs/User";
import { Students } from "../../Entities/Students";
import { Like } from 'typeorm';

export const GET_STUDENTS = {
  type: new GraphQLList(UserType),
  args: {
    name: { type: GraphQLString },
    cpf: { type: GraphQLString },
    email: { type: GraphQLString },
  },
  resolve(parent: any, args: any) {
    const { name, cpf, email } = args;
    return Students.createQueryBuilder()
    // .where('1 = 1')
    .where('name like :name', { name: `%${name}%` })
    // .orWhere('cpf = like :cpf', { cpf: `%${cpf}%` })
    // .orWhere('email = like :email', { email: `%${email}%` })
    .getMany()

    return Students.find();
  },
};
