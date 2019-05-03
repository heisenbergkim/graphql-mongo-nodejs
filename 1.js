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



<Grid>
  <TextField
    id="standard-read-only-input"
    label="hash"
    value={data.block.hash}
    className={classes.textField}
    margin="normal"
    InputProps={{
      readOnly: true
    }}
  />
</Grid>
<Grid>
  <TextField
    id="standard-read-only-input"
    label="parentHash"
    value={data.block.parentHash}
    className={classes.textField}
    margin="normal"
    InputProps={{
      readOnly: true
    }}
  />
</Grid>
<Grid>
  <TextField
    id="standard-read-only-input"
    label="mixHash"
    value={data.block.mixHash}
    className={classes.textField}
    margin="normal"
    InputProps={{
      readOnly: true
    }}
  />
</Grid>
<Grid>
  <TextField
    id="standard-read-only-input"
    label="nonce"
    value={data.block.nonce}
    className={classes.textField}
    margin="normal"
    InputProps={{
      readOnly: true
    }}
  />
</Grid>
<Grid>
  <TextField
    id="standard-read-only-input"
    label="sha3Uncles"
    value={data.block.sha3Uncles}
    className={classes.textField}
    margin="normal"
    InputProps={{
      readOnly: true
    }}
  />
</Grid>

<Grid>
  <TextField
    id="standard-read-only-input"
    label="logsBloom"
    value={data.block.logsBloom}
    className={classes.textField}
    margin="normal"
    InputProps={{
      readOnly: true
    }}
  />
</Grid>



//



<Grid>
  <TextField
    id="standard-read-only-input"
    label="transactionsRoot"
    value={data.block.transactionsRoot}
    className={classes.textField}
    margin="normal"
    InputProps={{
      readOnly: true
    }}
  />
</Grid>


<Grid>
  <TextField
    id="standard-read-only-input"
    label="stateRoot"
    value={data.block.stateRoot}
    className={classes.textField}
    margin="normal"
    InputProps={{
      readOnly: true
    }}
  />
</Grid>

<Grid>
  <TextField
    id="standard-read-only-input"
    label="receiptsRoot"
    value={data.block.receiptsRoot}
    className={classes.textField}
    margin="normal"
    InputProps={{
      readOnly: true
    }}
  />
</Grid>


<Grid>
  <TextField
    id="standard-read-only-input"
    label="miner"
    value={data.block.miner}
    className={classes.textField}
    margin="normal"
    InputProps={{
      readOnly: true
    }}
  />
</Grid>
//

<Grid>
  <TextField
    id="standard-read-only-input"
    label="difficulty"
    value={data.block.difficulty}
    className={classes.textField}
    margin="normal"
    InputProps={{
      readOnly: true
    }}
  />
</Grid>
<Grid>
  <TextField
    id="standard-read-only-input"
    label="totalDifficulty"
    value={data.block.totalDifficulty}
    className={classes.textField}
    margin="normal"
    InputProps={{
      readOnly: true
    }}
  />
</Grid>
<Grid>
  <TextField
    id="standard-read-only-input"
    label="extraData"
    value={data.block.extraData}
    className={classes.textField}
    margin="normal"
    InputProps={{
      readOnly: true
    }}
  />
</Grid>
<Grid>
  <TextField
    id="standard-read-only-input"
    label="size"
    value={data.block.size}
    className={classes.textField}
    margin="normal"
    InputProps={{
      readOnly: true
    }}
  />
</Grid>

<Grid>
  <TextField
    id="standard-read-only-input"
    label="gasLimit"
    value={data.block.gasLimit}
    className={classes.textField}
    margin="normal"
    InputProps={{
      readOnly: true
    }}
  />
</Grid>
<Grid>
  <TextField
    id="standard-read-only-input"
    label="gasUsed"
    value={data.block.gasUsed}
    className={classes.textField}
    margin="normal"
    InputProps={{
      readOnly: true
    }}
  />
</Grid><Grid>
  <TextField
    id="standard-read-only-input"
    label="timestamp"
    value={data.block.timestamp}
    className={classes.textField}
    margin="normal"
    InputProps={{
      readOnly: true
    }}
  />
</Grid>

