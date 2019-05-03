import { mergeTypes } from "merge-graphql-schemas";

import User from "./User/";
import BlockStorage from "./BlockStorage/";
import TransactionStorage from "./TransactionStorage/";
import ReceiptStorage from "./ReceiptStorage/";
import AbiStorage from "./AbiStorage/";

const typeDefs = [
  User,
  BlockStorage,
  TransactionStorage,
  ReceiptStorage,
  AbiStorage
];

export default mergeTypes(typeDefs, { all: true });

//sample
// import { mergeResolvers } from "merge-graphql-schemas";

// import User from "./User/";
// import Post from "./Post/";
// import Comment from "./Comment/";

// const resolvers = [User, Post, Comment];

// export default mergeResolvers(resolvers);
