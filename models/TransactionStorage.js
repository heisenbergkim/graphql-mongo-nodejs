import mongoose from "mongoose";

const Schema = mongoose.Schema;

// Create the User Schema.
const TransactionStorageSchema = new Schema({
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
    required: false //in case of Transaction
  },
  to: {
    type: String,
    required: false //in case of Transaction
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
    required: false //in case of Transaction
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

const TransactionStorage = mongoose.model(
  "TransactionStorage",
  TransactionStorageSchema,
  "transactionStorage" //collection name in mongoDB
);

export default TransactionStorage;
