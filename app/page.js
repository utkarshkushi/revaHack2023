import Image from 'next/image'
import Web3 from 'web3'

import { connectToDB } from "@utils/database";

import User from '@models/user';

export default function Home() {
  let url = 'https://rpc.sepolia.org';
  let web3 = new Web3(url);
  function createAcc(){
      let newAcc = web3.eth.accounts.create()
      console.log(newAcc)
  }

  const database = async (userEmail) => {
    await connectToDB();

    const userExist = await User.findOne({
      email: userEmail
    })
  }

  return (
    <>
      <h1 className='text-4xl'>
        Home
      </h1>
      {createAcc()}
      {database()}
    </>
  )
}
