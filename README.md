# Bug on Alchemy Flow mainnet RPC
```
 thdev  ~  os  alchemy-flow  npx hardhat ignition deploy ignition/modules/Lock.ts --network flow
(node:182848) ExperimentalWarning: CommonJS module /home/thdev/.nvm/versions/node/v23.1.0/lib/node_modules/npm/node_modules/debug/src/node.js is loading ES Module /home/thdev/.nvm/versions/node/v23.1.0/lib/node_modules/npm/node_modules/supports-color/index.js using require().
Support for loading ES Module in require() is an experimental feature and might change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
WARNING: You are currently using Node.js v23.1.0, which is not supported by Hardhat. This can lead to unexpected behavior. See https://hardhat.org/nodejs-versions


✔ Confirm deploy to network flow (747)? … yes
Hardhat Ignition 🚀

Resuming existing deployment from ./ignition/deployments/chain-747

Deploying [ LockModule ]

Batch #1
  Executing LockModule#Lock...

An unexpected error occurred:

ProviderError: internal error
    at HttpProvider.request (/home/thdev/os/alchemy-flow/node_modules/hardhat/src/internal/core/providers/http.ts:107:21)
    at processTicksAndRejections (node:internal/process/task_queues:105:5)
    at async EIP1193JsonRpcClient.sendTransaction (/home/thdev/os/alchemy-flow/node_modules/@nomicfoundation/ignition-core/src/internal/execution/jsonrpc-client.ts:424:24)
    at async sendTransactionForOnchainInteraction (/home/thdev/os/alchemy-flow/node_modules/@nomicfoundation/ignition-core/src/internal/execution/future-processor/helpers/network-interaction-execution.ts:204:18)
    at async sendTransaction (/home/thdev/os/alchemy-flow/node_modules/@nomicfoundation/ignition-core/src/internal/execution/future-processor/handlers/send-transaction.ts:85:18)
    at async FutureProcessor.processFuture (/home/thdev/os/alchemy-flow/node_modules/@nomicfoundation/ignition-core/src/internal/execution/future-processor/future-processor.ts:117:9)
    at async ExecutionEngine._executeBatch (/home/thdev/os/alchemy-flow/node_modules/@nomicfoundation/ignition-core/src/internal/execution/execution-engine.ts:155:30)
    at async ExecutionEngine.executeModule (/home/thdev/os/alchemy-flow/node_modules/@nomicfoundation/ignition-core/src/internal/execution/execution-engine.ts:116:25)
    at async Deployer.deploy (/home/thdev/os/alchemy-flow/node_modules/@nomicfoundation/ignition-core/src/internal/deployer.ts:196:25)
    at async SimpleTaskDefinition.action (/home/thdev/os/alchemy-flow/node_modules/@nomicfoundation/hardhat-ignition/src/index.ts:319:24)
 thdev  ~  os  alchemy-flow  git remote add origin git@github.com:polus-arcticus/alchemy-flow-bug.git

```
but when commenting out the alchemy rpc in the hardhat config file it works fine

```
 thdev  ~  os  alchemy-flow  npx hardhat ignition deploy ignition/modules/Lock.ts --network flow
(node:183611) ExperimentalWarning: CommonJS module /home/thdev/.nvm/versions/node/v23.1.0/lib/node_modules/npm/node_modules/debug/src/node.js is loading ES Module /home/thdev/.nvm/versions/node/v23.1.0/lib/node_modules/npm/node_modules/supports-color/index.js using require().
Support for loading ES Module in require() is an experimental feature and might change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
WARNING: You are currently using Node.js v23.1.0, which is not supported by Hardhat. This can lead to unexpected behavior. See https://hardhat.org/nodejs-versions


✔ Confirm deploy to network flow (747)? … yes
Hardhat Ignition 🚀

Resuming existing deployment from ./ignition/deployments/chain-747

Deploying [ LockModule ]

Batch #1
  Executed LockModule#Lock

[ LockModule ] successfully deployed 🚀

Deployed Addresses

LockModule#Lock - 0xca0296EFC305ba8f2A3035e2846d389A8617c4cf

```

Note that deployment on Alchemy Testnet RPC is operational

```
 thdev  ~  os  alchemy-flow  npx hardhat ignition deploy ignition/modules/Lock.ts --network flow-testnet
(node:183863) ExperimentalWarning: CommonJS module /home/thdev/.nvm/versions/node/v23.1.0/lib/node_modules/npm/node_modules/debug/src/node.js is loading ES Module /home/thdev/.nvm/versions/node/v23.1.0/lib/node_modules/npm/node_modules/supports-color/index.js using require().
Support for loading ES Module in require() is an experimental feature and might change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
WARNING: You are currently using Node.js v23.1.0, which is not supported by Hardhat. This can lead to unexpected behavior. See https://hardhat.org/nodejs-versions


✔ Confirm deploy to network flow-testnet (545)? … yes
Hardhat Ignition 🚀

Deploying [ LockModule ]

Batch #1
  Executed LockModule#Lock

[ LockModule ] successfully deployed 🚀

Deployed Addresses

LockModule#Lock - 0xca0296EFC305ba8f2A3035e2846d389A8617c4cf

```




