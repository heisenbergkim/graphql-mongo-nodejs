// The User schema.
import User from "../../models/User";

import BlockStorage from "../../models/BlockStorage";
import TransactionStorage from "../../models/TransactionStorage";
import ReceiptStorage from "../../models/ReceiptStorage";

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
          .exec((err, res) => {
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
            err ? reject(err) : resolve(res);
          });
      });
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
