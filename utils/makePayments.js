import { ethers } from 'ethers'





export const makeTransaction = async (sendersPK, receiverPA, AMT) => {
    const privateKey = sendersPK;
const recipientAddress = receiverPA;

    const provider =  new ethers.JsonRpcProvider('https://aged-polished-arm.ethereum-sepolia.quiknode.pro/a86625a13699f5dac9d98353236f37a0af42bf5b/')
    const wallet = new ethers.Wallet(privateKey, provider);

    // let amountToSend = ethers.utils.parseEther('0.001')
    const transaction = {
        to: recipientAddress,
        value: AMT,
      };

    
      const sendTransaction = async () => {
        const tx = await wallet.sendTransaction(transaction);
        console.log('Transaction hash:', tx.hash);
      
        const receipt = await tx.wait();
        console.log('Transaction confirmed in block:', receipt.blockNumber);
      };
      
      sendTransaction();



}