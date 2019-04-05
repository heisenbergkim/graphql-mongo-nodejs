const fs = require("fs");
var data = fs.readFileSync("./schema.json", "utf8");

const mongoose = require("mongoose");
require("mongoose-schema-jsonschema")(mongoose);

const Schema = mongoose.Schema;

data = JSON.parse(data);

// var productJson = {};
// for (var i = 0; i < data.length; i++) {
//   // Changed .slug to .item here as I don't see slug in the JSON
//   productJson[data.default[i].item] = {
//     type: "String",
//     required: data.default[i].required,
//     default: "",
//     trim: true
//   };
// }

// 'use strict';

const BookSchema = new Schema({
  title: { type: String, required: true },
  year: Number,
  author: { type: String, required: true }
});

let jsonSchema = data.jsonSchema();

console.dir(jsonSchema, { depth: null });

// console.log(productJson);

import ReceiptStorage from "../../models/ReceiptStorage";

export default {
  Query: {
    receipt: (root, args) => {
      return new Promise((resolve, reject) => {
        ReceiptStorage.findOne(args).exec((err, res) => {
          err ? reject(err) : resolve(res);
        });
      });
    },
    receipts: () => {
      return new Promise((resolve, reject) => {
        ReceiptStorage.find({})
          .populate()
          .exec((err, res) => {
            err ? reject(err) : resolve(res);
          });
      });
    }
  }
};
