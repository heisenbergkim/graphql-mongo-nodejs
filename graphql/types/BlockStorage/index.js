// BlockStorage GraphQL Types
// should map files in model to files in GraphQL types
export default `
  type Logs {
    logIndex:  Int
    transactionIndex: Int
    transactionHash: String
    blockHash: String
    blockNumber: Int
    address: String
    data: String
    topics: String
    type: String
    id: String

  }

  type BlockStorage {
    transactionHash: String!
    transactionIndex: Int!
    blockHash: String!
    blockNumber: Int!
    from: String!
    to: String!
    gasUsed: Int!
    cumulativeGasUsed: Int!
    contractAddress: String!
    logs: [Logs]!
    status: Boolean!
    logsBloom: String!
    v: String!
    r: String!
    s: String!
  }
  type Query {
    block(number: Int!): BlockStorage
    blocks: [BlockStorage]
  }
`;
