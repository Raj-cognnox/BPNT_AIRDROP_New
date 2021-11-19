import abi from './abi.js';
export interface ContractSetup {
  address: string;
  abi: any[];
}

export const AIRDROP_CONTRACT: { [chainId: number]: ContractSetup } = {
  97: {
    address: "0xE7094FFD34A1BF37d69D94795169478b6e0f421A",
    abi: abi,
  },
  56: {
    address: "0x6b175474e89094c44da98b954eedeac495271d0f",
    abi: abi,
  },
};