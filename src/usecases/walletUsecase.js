const Wallet = require('../models/walletUserModel')
const wastePrice = require('../usecases/wastePriceUsecase')

function walletUser(id){
  return Wallet.findById(id)
}

async function amountDollar(data){
  let {
    plastic_amount,
    carton_amount,
    glass_amount,
    oil_amount,
    cans_amount,
    grease_amount
  } = data.waste_amounts

  const price = await wastePrice.getWastePrice()

  plastic_amount *= price[0].plastic_price
  carton_amount *= price[0].carton_price
  glass_amount *= price[0].glass_price
  oil_amount *= price[0].oil_price
  cans_amount *= price[0].cans_price
  grease_amount *= price[0].grease_price

  let amountDollar = {
    plastic_wallet: plastic_amount,
    carton_wallet: carton_amount,
    glass_wallet: glass_amount,
    oil_wallet: oil_amount,
    cans_wallet: cans_amount,
    grease_wallet: grease_amount
  }
  return amountDollar
}

async function updateWallet(id, data){
  const walletObj = await walletUser(id)
  let {
    plastic_wallet,
    carton_wallet,
    glass_wallet,
    oil_wallet,
    cans_wallet,
    grease_wallet
  } = walletObj

  plastic_wallet += data.plastic_wallet
  carton_wallet += data.carton_wallet
  glass_wallet += data.glass_wallet
  oil_wallet += data.oil_wallet
  cans_wallet += data.cans_wallet
  grease_wallet += data.grease_wallet

  let wallet = {
    plastic_wallet,
    carton_wallet,
    glass_wallet,
    oil_wallet,
    cans_wallet,
    grease_wallet
  }
  console.log(wallet);
  return Wallet.findByIdAndUpdate(id, wallet, {new: true})
}

module.exports = {
  walletUser,
  amountDollar,
  updateWallet
}