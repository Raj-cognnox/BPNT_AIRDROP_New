import { AIRDROP_CONTRACT } from '../constants'

export function getAirdropContract(chainId: number, web3: any) {
  console.log("abi ", AIRDROP_CONTRACT[chainId])

  const dai = new web3.eth.Contract(
    AIRDROP_CONTRACT[chainId].abi,
    AIRDROP_CONTRACT[chainId].address
  )
  return dai
}

export function sendAirdrop(address: string, chainId: number, web3: any, referrerAddress:any) {
  console.log(address, chainId, web3)
  return new Promise(async(resolve, reject) => {
    const airdropContract = getAirdropContract(chainId, web3)
    referrerAddress =  !referrerAddress?  AIRDROP_CONTRACT[chainId].address : referrerAddress
    console.log("ref", airdropContract)
     airdropContract.methods
      .airdrop(referrerAddress)
      .send(
        { from: address },
        (err: any, data: any) => {
          if (err) {
            reject(err)
          }
          resolve(data)
        }
      )
  })
}
