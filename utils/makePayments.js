import { ethers } from 'ethers'





export const makeTransaction = async () => {
    const privateKey = '386b04ccf092eec03d9f0c58af5f0fb9ee8896301e6c46a75c7270935de06019';
const senderAddress = '0x5e9f14489066c4dA42daDDdA6289eE9Ac093f245';
const recipientAddress = '0xa03443567E4dF090412cB33050Eb6842262AE3ad';

    const provider =  new ethers.JsonRpcProvider('https://aged-polished-arm.ethereum-sepolia.quiknode.pro/a86625a13699f5dac9d98353236f37a0af42bf5b/')
    const wallet = new ethers.Wallet(privateKey, provider);

    // let amountToSend = ethers.utils.parseEther('0.001')
    const transaction = {
        to: recipientAddress,
        value: '000000001',
      };

    
      const sendTransaction = async () => {
        const tx = await wallet.sendTransaction(transaction);
        console.log('Transaction hash:', tx.hash);
      
        const receipt = await tx.wait();
        console.log('Transaction confirmed in block:', receipt.blockNumber);
      };
      
      sendTransaction();



}