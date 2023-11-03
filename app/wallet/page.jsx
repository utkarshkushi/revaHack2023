import React from 'react'
import css from '../wallet/wallet.css'

const Page = () => {
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
          }} placeholder="Balance: 0.0043 ETH" />
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

          <div className="Rectangle11" style={{
            width: 163, height: 37, background: '#ED8BFE',
            boxShadow: '0px 2px 2px rgba(237, 139, 254, 0.40)', borderRadius: 10, border: '1px black solid'
          }}>
            <div className="Predict" style={{
              marginLeft: 55, marginRight: 56, marginBottom: 8, marginTop: 9,
              color: 'black', fontSize: 15, fontFamily: 'Manrope', fontWeight: '600', wordWrap: 'break-word'
            }}>Predict</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page;
