// ReceiptStorage GraphQL Types
// should map files in model to files in GraphQL types
export default `



  type AbiStorage {

    contractName : String
    contractAddress : String
    coinName : String
    totalSupply:String!
    decimals:String!
    symbol:String!
    abi: [String]
   
  }

  type Query {
    token(contractAddress: String!): AbiStorage
    tokens: [AbiStorage]
  }
`;
