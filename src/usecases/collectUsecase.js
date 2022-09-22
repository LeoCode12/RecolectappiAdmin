const Collect = require('../models/collectModel')
const Business = require('../models/businessModel')
const wallet = require('../usecases/walletUsecase')
const User = require('../models/userModel')

function updateStatusCollect(id){
  return Collect.findByIdAndUpdate(id, {collect_status: true})
}

async function walletUser(id){
  const business = await Business.findById(id)
  const user = await User.findById(business.user)
  return user.walletUser
}


async function updateWasteCollect(id, data){
  await updateStatusCollect(id)
  const walletObj = await walletUser(data.business)
  const amountDollar = await wallet.amountDollar(data)
  await wallet.updateWallet(walletObj, amountDollar)

  return Collect.findByIdAndUpdate(id, data, {new: true}) 
}

module.exports = {
  updateWasteCollect
}