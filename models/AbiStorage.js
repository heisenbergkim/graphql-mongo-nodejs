import mongoose from "mongoose";

const Schema = mongoose.Schema;
// var ObjectId = mongoose.Schema.Types.ObjectId;

const AbiStorageSchema = new Schema({
  contractName: {
    type: String,
    required: true
  },
  contractAddress: {
    type: String,
    required: true
  },
  coinName: {
    type: String,
    required: true
  },
  totalSupply: {
    type: String,
    required: true
  },
  decimals: {
    type: String,
    required: true
  },
  symbol: {
    type: String,
    required: true
  },

  abi: {
    type: Array,
    required: true
  }
});

AbiStorageSchema.set("toObject", { getters: true, virtuals: true });

const AbiStorage = mongoose.model(
  "AbiStorage",
  AbiStorageSchema,
  "abis" // collection in mongodb
);

export default AbiStorage;
