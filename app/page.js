import Image from 'next/image'
import Web3 from 'web3'

import { connectToDB } from "@utils/database";




import User from '@models/user';
import { makeTransaction } from '@utils/makePayments';
import NavBar from '@components/NavBar';
import Main from '@components/Main'
import { createAccount } from '@utils/createAccount';

export default function Home() {
  let arr
  return (
    <>
      <NavBar />
      <Main />
      {/* {arr = createAccount()} */}
    </>
  )
}
