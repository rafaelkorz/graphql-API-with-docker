import { GraphQLID, GraphQLString } from "graphql";
import { UserType } from "../TypeDefs/User";
import { MessageType } from "../TypeDefs/Messages";
import { Students } from "../../Entities/Students";

export const CREATE_STUDENT = {
  type: UserType,
  args: {
    name: { type: GraphQLString },
    cpf: { type: GraphQLString },
    email: { type: GraphQLString },
  },
  async resolve(parent: any, args: any) {
    const { name, cpf, email } = args;
    await Students.insert({ name, cpf, email });
    return args;
  },
};

export const UPDATE_STUDENT = {
  type: MessageType,
  args: {
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    cpf: { type: GraphQLString },
    email: { type: GraphQLString },
  },
  async resolve(parent: any, args: any) {
    const { id, name, cpf, email } = args;

    const student = await Students.findOne({ id });

    if (!student) {
      throw new Error("ID DOESN'T EXIST");
    }

    if (name) {
      await Students.update({ id }, { name });
    }

    if (cpf) {
      await Students.update({ id }, { cpf });
    }

    if (email) {
      await Students.update({ id }, { email });
    }
  
    return { successful: true, message: "STUDENT UPDATED" };
  }
};

export const DELETE_STUDENT = {
    type: MessageType,
  args: {
    id: { type: GraphQLID },
  },
  async resolve(parent: any, args: any) {
    const id = args.id;

    const student = await Students.findOne({ id });

    if (!student) {
      throw new Error("ID DOESNT EXIST");
    }
    await Students.delete(id);

    return { successful: true, message: "DELETE WORKED" };
  },
};
