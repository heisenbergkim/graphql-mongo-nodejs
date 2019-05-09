// ReceiptStorage GraphQL Types
// import AbiStorage from "./AbiStorage/";
// should map files in model to files in GraphQL types
export default `



  type Logss {
    logIndex:  Int
    transactionIndex: Int
    transactionHash: String
    blockHash: String
    blockNumber: Int
    address: String
    data: String
    topics: [String]
    type: String
    id: String

  }

  type ReceiptStorage {
    
    transactionHash: String!
    transactionIndex: Int!
    blockHash: String!
    blockNumber: Int!
    from: String
    to: String
    gasUsed: Int
    cumulativeGasUsed: Int
    contractAddress: String
    logs: [Logss]
    status: Boolean
    logsBloom: String
    v: String
    r: String
    s: String

    
    contractInfoDoc: AbiStorage

  }
  type Query {
    receipt(transactionHash: String!): ReceiptStorage
    receipts: [ReceiptStorage]
    receiptsAwait: [ReceiptStorage]
  }
`;
