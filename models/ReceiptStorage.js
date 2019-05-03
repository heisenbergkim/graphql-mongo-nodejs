import mongoose from "mongoose";
import AbiStorage from "../graphql/types/AbiStorage/";
var assert = require("assert");

const Schema = mongoose.Schema;
// var ObjectId = mongoose.Schema.Types.ObjectId;
// import ObjectId = Types.ObjectId;

// Create the User Schema.
const ReceiptStorageSchema = new Schema({
  // workspaceId: [
  //   {
  //     type: mongoose.Schema.Types.ObjectId,
  //     // required: true,
  //     ref: "AbiStorage" // this must match the name we assigned to the workspace model
  //   }
  // ],
  transactionHash: {
    type: String,
    required: true
  },
  transactionIndex: {
    type: Number,
    required: true
  },
  blockHash: {
    type: String,
    required: true
  },
  blockNumber: {
    type: Number,
    required: true
  },
  from: {
    type: String,
    required: true
  },
  to: {
    type: String,
    required: true
  },
  gasUsed: {
    type: Number,
    required: true
  },
  cumulativeGasUsed: {
    type: Number,
    required: true
  },
  contractAddress: {
    type: String,
    required: false
  },
  logs: {
    type: Array,
    required: false
  },
  status: {
    type: Boolean,
    required: false
  },
  logsBloom: {
    type: String,
    required: false
  },
  v: {
    type: String,
    required: false
  },
  r: {
    type: String,
    required: false
  },
  s: {
    type: String,
    required: false
  }
});

ReceiptStorageSchema.set("toObject", { getters: true, virtuals: true });

const ReceiptStorage = mongoose.model(
  "ReceiptStorage",
  ReceiptStorageSchema,
  "receiptStorage" //collection name in mongodb
);

export default ReceiptStorage;
