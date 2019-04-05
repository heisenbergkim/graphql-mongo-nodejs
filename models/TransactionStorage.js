import mongoose from "mongoose";

const Schema = mongoose.Schema;

// Create the User Schema.
const TransactionStorageSchema = new Schema({
  number: {
    type: Number,
    required: true
  },
  hash: {
    type: String,
    required: true
  },
  parentHash: {
    type: String,
    required: true
  },
  mixHash: {
    type: String,
    required: true
  },
  nonce: {
    type: String,
    required: true
  },
  sha3Uncles: {
    type: String,
    required: true
  },
  logsBloom: {
    type: String,
    required: true
  },
  transactionsRoot: {
    type: String,
    required: true
  },
  stateRoot: {
    type: String,
    required: true
  },
  receiptsRoot: {
    type: String,
    required: true
  },
  miner: {
    type: String,
    required: true
  },
  difficulty: {
    type: String,
    required: true
  },
  totalDifficulty: {
    type: String,
    required: true
  },
  extraData: {
    type: String,
    required: true
  },
  size: {
    type: Number,
    required: true
  },
  gasLimit: {
    type: Number,
    required: true
  },
  gasUsed: {
    type: Number,
    required: true
  },
  timestamp: {
    type: Number,
    required: true
  },
  transactions: {
    type: "Array",
    required: true
  },
  uncles: {
    type: "Array",
    required: true
  }
});

const TransactionStorage = mongoose.model(
  "TransactionStorage",
  TransactionStorageSchema,
  "TransactionStorage"
);

export default TransactionStorage;
