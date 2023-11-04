"use client";

import React, { useEffect } from 'react'
import css from '../wallet/wallet.css'
import { useState } from 'react'
// import { useRouter } from 'next/router';

// import User from '@models/user';
import { ethers } from 'ethers';





const Page = () => {
  // const router = useRouter()
  // const { email } = router.query || {};
  const [balanceInput, setBalanceInput] = useState('0.0043 ETH');
  const [Reciepent, setReciepent] = useState('');
  const [predictionResult, setPredictionResult] = useState(null);
  const [address, setAddress] = useState();
  const [pKey, setPKey] = useState();

  const provider = new ethers.JsonRpcProvider('https://aged-polished-arm.ethereum-sepolia.quiknode.pro/a86625a13699f5dac9d98353236f37a0af42bf5b/');

  // useEffect(()=>{
  //   findUser()
  // }, [])

  // const findUser = async () => {
  //   const user = await User.findOne({ email })

  //   setAddress(user.publicAddress);
  //   setPKey(user.privateKey);
  //   const balance1 = await provider.getBalance(address);
  //   setBalanceInput(balance1);

  // }

  const handlePredictClick = () => {
    // Add any code you want to execute when the "Predict" button is clicked here.

    // Clear the input fields by resetting their values to their initial values.
    setMainnet('');
    setReciepent('');

    // Perform the prediction and update predictionResult.
    // For example, you can set predictionResult based on the input values.
    const prediction = performPrediction(input15, input14);
    setPredictionResult(prediction);
  };

  const performPrediction = (input1, input2) => {
    // Replace this with your actual prediction logic.
    // For now, just returning a placeholder result.
    return `Prediction Result: ${input1} - ${input2}`;
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div className="Rectangle14" style={{
        width: 498, height: 430, background: '#18191C', borderRadius: 20,
        display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'
      }}>
        <div className='mainDiv'>
          <div className="mainnet" style={{ width: 147.43, height: 36.46, background: 'black', borderRadius: 10 }}>
            <div className="EthereumMainnet" style={{ fontSize: "small", alignText: 'center', marginLeft: 8, marginTop: 6 }}>Ethereum Mainnet </div>
          </div>
          <input className="Rectangle13" style={{
            width: 147.43, height: 36.46, background: 'black', borderRadius: 10,
            color: '#EFEFEF', fontSize: 11, fontFamily: 'Manrope', fontWeight: '430',
            wordWrap: 'break-word', textAlign: 'center', marginLeft: 7, marginTop: 6
          }} placeholder={balanceInput} />
        </div>
        <div className='breakthrough'>
          <input className="Rectangle15" style={{
            width: 294, height: 35, background: 'black', borderRadius: 10, border: '1px #191919 solid',
            textAlign: 'center'
          }} placeholder="Recipient’s address  0xabe123..." />

          <input className="Rectangle14" style={{
            width: 294, height: 35, background: 'black', borderRadius: 10, border: '1px #191919 solid',
            textAlign: 'center'
          }} placeholder="enter amount to send" />

          <input className="Rectangle13" style={{
            width: 294, height: 35, background: 'black', borderRadius: 10, border: '1px #191919 solid',
            textAlign: 'center'
          }} placeholder="Time slot" />

          <button className="Rectangle11" style={{
            width: 163, height: 37, background: '#ED8BFE',
            boxShadow: '0px 2px 2px rgba(237, 139, 254, 0.40)', borderRadius: 10, border: '1px black solid'
          }}>
            <div className="Predict" style={{
              marginLeft: 55, marginRight: 56, marginBottom: 8, marginTop: 9,
              color: 'black', fontSize: 15, fontFamily: 'Manrope', fontWeight: '600', wordWrap: 'break-word'
            }}>Predict</div>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Page;
