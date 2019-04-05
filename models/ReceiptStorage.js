import mongoose from "mongoose";

const Schema = mongoose.Schema;

// Create the User Schema.
const ReceiptStorageSchema = new Schema({
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

const ReceiptStorage = mongoose.model(
  "ReceiptStorage",
  ReceiptStorageSchema,
  "receiptStorage"
);

export default ReceiptStorage;
