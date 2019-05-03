// BlockStorage GraphQL Types
// should map files in model to files in GraphQL types
export default `

 

  type BlockStorage {
      number: Int!
      hash: String!
      parentHash: String!
      mixHash: String
      nonce: String
      sha3Uncles: String
      logsBloom: String
      transactionsRoot: String
      stateRoot: String
      receiptsRoot: String
      miner: String
      difficulty: String
      totalDifficulty: String
      extraData: String
      size: Int
      gasLimit: Int
      gasUsed: Int
      timestamp: Int
      transactions: [String]
      uncles: [String]
  }
  type Query {
    block(number: Int!): BlockStorage
    blocks: [BlockStorage]
  }
`;
