const Collect = require('../models/collectModel')
const Business = require('../models/businessModel')
const Wallet = require('../models/walletUserModel')
const User = require('../models/userModel')

function updateStatusCollect(id){
  return Collect.findByIdAndUpdate(id, {collect_status: true})
}

async function walletUser(id){
  const business = await Business.findById(id)
  const user = await User.findById(business.user)
  return user.walletUser
}

function updateWallet(id, data){

}

async function updateWasteBussines(id, data){
  const businessFound = await Business.findById(data.business)
  let {
    business_plastic,
    business_carton,
    business_glass,
    business_oil,
    business_cans,
    business_grease,
  } = businessFound.business_wastes_amounts

  business_plastic += data.waste_amounts.plastic_amount;
  business_carton += data.waste_amounts.carton_amount;
  business_glass += data.waste_amounts.glass_amount;
  business_oil += data.waste_amounts.oil_amount;
  business_cans += data.waste_amounts.cans_amount;
  business_grease += data.waste_amounts.grease_amount;


  const business_wastes_amounts = {
    business_plastic: business_plastic,
    business_carton: business_carton,
    business_glass: business_glass,
    business_oil: business_oil,
    business_cans: business_cans,
    business_grease: business_grease,
  }
  return Business.findByIdAndUpdate(id, {business_wastes_amounts: business_wastes_amounts})
}

async function updateWasteCollect(id, data){
  await updateStatusCollect(id)

  await updateWasteBussines(data.business, data)
  return Collect.findByIdAndUpdate(id, data) 
}

module.exports = {
  updateWasteCollect
}