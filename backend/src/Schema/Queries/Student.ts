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

    if (name) {
      return Students.createQueryBuilder()    
      .where('name like :name', { name: `%${name}%` })
      .getMany()
    }

    if (cpf) {
      return Students.createQueryBuilder()    
      .where('cpf like :cpf', { cpf: `%${cpf}%` })
      .getMany()
    }

    if (email) {
      return Students.createQueryBuilder()    
      .where('email like :email', { email: `%${email}%` })
      .getMany()
    }

    if (name && cpf) {
      return Students.createQueryBuilder()    
      .where('name like :name', { name: `%${name}%` })
      .orWhere('cpf = like :cpf', { cpf: `%${cpf}%` })
      .getMany()
    }

    if (name && email) {
      return Students.createQueryBuilder()    
      .where('name like :name', { name: `%${name}%` })
      .orWhere('email = email :email', { cpf: `%${email}%` })
      .getMany()
    }

    if (cpf && email) {
      return Students.createQueryBuilder()    
      .where('cpf like :cpf', { cpf: `%${cpf}%` })
      .orWhere('email = email :email', { cpf: `%${email}%` })
      .getMany()
    }

    if (name && email && cpf) {
      return Students.createQueryBuilder()    
      .where('name like :name', { name: `%${name}%` })
      .orWhere('email = email :email', { cpf: `%${email}%` })
      .orWhere('cpf = like :cpf', { cpf: `%${cpf}%` })
      .getMany()
    }

    return Students.find();

    return Students.find();
  },
};
