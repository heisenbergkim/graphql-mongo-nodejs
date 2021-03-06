import express from "express";
import expressGraphQL from "express-graphql";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";

import schema from "./graphql/";
import { models } from "./config/db/";

import createType from "mongoose-schema-to-graphql";

const app = express();
const PORT = process.env.PORT || "4000";
// const db = "Put your database URL here.";
const db = "mongodb://localhost:27017/graphql-mongodb-server";

const context = {
  models
};

// Connect to MongoDB with Mongoose.
mongoose
  .connect(db, {
    useCreateIndex: true,
    useNewUrlParser: true
  })
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

app.use(
  "/graphql",
  cors(),
  bodyParser.json(),
  expressGraphQL({
    schema,
    graphiql: true
  })
);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
