import 'dotenv/config';
import type { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox-viem";

const config: HardhatUserConfig = {
	solidity: "0.8.27",
	networks: {
		flow: {
			url: `https://flow-mainnet.g.alchemy.com/v2/${process.env.ALCHEMY}`,
			//url: `https://mainnet.evm.nodes.onflow.org`,
				chainId: 747,
			ignition: {
				gasPrice: 100n,
			},
			accounts: {
				mnemonic: process.env.MNEMONIC
			}
		},
		'flow-testnet': {
			url: `https://flow-testnet.g.alchemy.com/v2/${process.env.ALCHEMY}`,
				chainId: 545,
			ignition: {
				gasPrice: 10000n,
			},
			gasPrice: 10000,
			accounts: {
				mnemonic: process.env.MNEMONIC
			}
		},

	}
};

export default config;



