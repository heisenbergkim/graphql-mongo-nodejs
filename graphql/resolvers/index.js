// The User schema.
import User from "../../models/User";

import BlockStorage from "../../models/BlockStorage";
import TransactionStorage from "../../models/TransactionStorage";
import ReceiptStorage from "../../models/ReceiptStorage";
import AbiStorage from "../../models/AbiStorage";

export default {
  Query: {
    user: (root, args) => {
      return new Promise((resolve, reject) => {
        User.findOne(args).exec((err, res) => {
          err ? reject(err) : resolve(res);
        });
      });
    },
    users: () => {
      return new Promise((resolve, reject) => {
        User.find({})
          .populate()
          .exec((err, res) => {
            err ? reject(err) : resolve(res);
          });
      });
    },
    block: (root, args) => {
      return new Promise((resolve, reject) => {
        BlockStorage.findOne(args).exec((err, res) => {
          err ? reject(err) : resolve(res);
        });
      });
    },
    blocks: () => {
      return new Promise((resolve, reject) => {
        BlockStorage.find({})
          .populate()
          .sort({ number: -1 })
          .exec((err, res) => {
            err ? reject(err) : resolve(res);
          });
      });
    },
    transaction: (root, args) => {
      return new Promise((resolve, reject) => {
        TransactionStorage.findOne(args).exec((err, res) => {
          err ? reject(err) : resolve(res);
        });
      });
    },
    transactions: () => {
      return new Promise((resolve, reject) => {
        TransactionStorage.find({})
          .populate()
          .sort({ blockNumber: -1 })
          .exec((err, res) => {
            err ? reject(err) : resolve(res);
          });
      });
    },
    token: (root, args) => {
      return new Promise((resolve, reject) => {
        AbiStorage.findOne(args).exec((err, res) => {
          err ? reject(err) : resolve(res);
        });
      });
    },
    tokens: () => {
      return new Promise((resolve, reject) => {
        AbiStorage.find({})
          .populate()
          .exec((err, res) => {
            // let newData = JSON.stringify(res.abi);
            // let insertObj = JSON.parse(newData);

            // console.log("ABI : ", insertObj);
            err ? reject(err) : resolve(res);
          });
      });
    },
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
            // res = res.toObject();
            err ? reject(err) : resolve(res);
          });
      });
    },
    async receiptsAwait(_, { filter = {} }) {
      const receiptsAwait = await ReceiptStorage.aggregate([
        {
          $lookup: {
            from: "abis",
            localField: "contractAddress",
            foreignField: "to",
            as: "contractInfoDoc"
          }
        },
        { $unwind: "$contractInfoDoc" }
      ]);
      // }
      // notice that I have ": any[]" after the "users" variable?
      // That is because I am using TypeScript but you can remove
      // this and it will work normally with pure JavaScript
      // console.log(receiptsAwait);
      // return receipts2.map(contractInfoDoc => contractInfoDoc.toObject());
      return receiptsAwait;
    }

    // receipts2: () => {
    //   return ReceiptStorage.find({});
    // }
  },
  Mutation: {
    addUser: (root, { id, name, email }) => {
      const newUser = new User({ id, name, email });

      return new Promise((resolve, reject) => {
        newUser.save((err, res) => {
          err ? reject(err) : resolve(res);
        });
      });
    },
    editUser: (root, { id, name, email }) => {
      return new Promise((resolve, reject) => {
        User.findOneAndUpdate({ id }, { $set: { name, email } }).exec(
          (err, res) => {
            err ? reject(err) : resolve(res);
          }
        );
      });
    },
    deleteUser: (root, args) => {
      return new Promise((resolve, reject) => {
        User.findOneAndRemove(args).exec((err, res) => {
          err ? reject(err) : resolve(res);
        });
      });
    }
  }
};
