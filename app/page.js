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
      <div>
        hell
      </div>
      {/* {hello()} */}
      {/* {arr = createAccount()} */}
      {/* {makeTransaction('0x10a73be037571e80a4422329b2d1ba731e168ed98ecf19d9f15fdbcbc6ccd81e','0x5e9f14489066c4dA42daDDdA6289eE9Ac093f245','000001')} */}
    </>
  )
}
