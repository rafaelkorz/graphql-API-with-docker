import express from "express";
import { graphqlHTTP } from "express-graphql";
import { schema } from "./Schema";
import cors from "cors";
import { createConnection } from "typeorm";
import { Students } from "./Entities/Students";

const main = async () => {
  await createConnection({
    type: "mysql",
    host: "locahost",
    port: 3306,
    database: "waproject",
    username: "root",
    password: "root",
    logging: true,
    synchronize: true,
    entities: [Students],
  });

  const app = express();
  app.use(cors());
  app.use(express.json());
  app.use(
    "/graphql",
    graphqlHTTP({
      schema,
      graphiql: true,
    })
  );

  app.listen(3002, '0.0.0.0',  () => {
    console.log("SERVER RUNNING ON PORT 3002");
  });
};

main().catch((err) => {
  console.log(err);
});
