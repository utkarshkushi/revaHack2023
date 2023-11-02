import Image from 'next/image'
import Web3 from 'web3'

import { connectToDB } from "@utils/database";



import User from '@models/user';
import { makeTransaction } from '@utils/makePayments';

export default function Home() {
  let url = 'https://rpc.sepolia.org';
  let web3 = new Web3(url);
  let pb ;
  let pk ;
  function createAcc(){
      let newAcc = web3.eth.accounts.create()
      console.log(newAcc)
      pb = newAcc['address'];
      pk = newAcc['privateKey'];

  }

  const database = async (userEmail , pb, pk) => {
    await connectToDB();

    const userExist = await User.findOne({
      email: userEmail
    })

    if(!userExist){
      await User.create({
        email: userEmail,
        username: 'kushi',
        publicAddress: pb,
        privateKey: pk
      })
    }
  }

  return (
    <>
      <h1 className='text-4xl'>
        Home
      </h1>
      {/* creating eth accounts */}
      {createAcc()} 
      {/* saving things to db */}
      {database('utkarshkushi2002@gmail.com', pb, pk)}
      {/* making transaction */}
      {makeTransaction()}
    </>
  )
}
