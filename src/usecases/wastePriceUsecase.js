const WastePrice = require('../models/wastePriceModel')
const createError = require('http-errors')

function createWastePrice() {
  const data = {
    plastic_price: .75,
    carton_price: .5,
    glass_price: .75,
    oil_price: .75,
    cans_price: .5,
    grease_price: .75
  }
  const newWastePriceList = new WastePrice(data)
  return newWastePriceList.save()
}

function getWastePrice() {
  return WastePrice.find()
}

function getWastePriceId(id) {
  return WastePrice.findById(id)
}

function updateWastePrice(id, data) {
  return WastePrice.findByIdAndUpdate(id, data, { new: true })
}

function deleteWastePrice(id) {
  return WastePrice.findByIdAndDelete(id)
}

module.exports = {
  getWastePrice,
  getWastePriceId,
  createWastePrice,
  updateWastePrice,
  deleteWastePrice
}
