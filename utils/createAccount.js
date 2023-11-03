import web3 from 'web3'  


export const createAccount = async () => {
    let newAcc = web3.eth.accounts.create()
      console.log(newAcc)
      let pb = newAcc['address'];
      let pk = newAcc['privateKey'];
      let arr = []
      arr.push(pb)
      arr.push(pk)

      return arr
  }