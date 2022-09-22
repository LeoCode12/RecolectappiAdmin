const wastePrice = require('../usecases/wastePriceUsecase')
const express = require('express')

const router = express.Router()


router.get('/', async (request, response) => {
  try {
    const getWastePrices = await wastePrice.getWastePrice()
    response.json({
      ok: true,
      message: 'Todos los resultados',
      getWastePrices: getWastePrices
    })
  } catch (error) {
    response.status(400)
    response.json({
      ok: false,
      message: error.message
    })
  }
})

router.get('/:id', async (request, response) => {
  try {
    const getWastePriceId = await wastePrice.getWastePriceId(request.params.id)
    response.json({
      ok: true,
      message: 'Resultado por Id',
      getWastePriceId: getWastePriceId
    })
    
  } catch (error) {
    response.status(400)
    response.json({
      ok: false,
      error: error.message
    })
  }
})

router.post('/', async (request, response) => {
  try {
    const newWastePriceList = await wastePrice.createWastePrice()
    response.json({
      ok: true,
      message: 'Nuevo objeto',
      newWastePriceList: newWastePriceList
    })
  } catch (error) {
    response.status(400)
    response.json({
      ok: false,
      message: error.message
    })

  }
})

router.patch('/:id', async (request, response) => {
  try {
    const updatePriceList = await wastePrice.updateWastePrice(request.params.id, request.body)
    response.json({
      ok: true,
      message: 'Datos actualizados',
      updatePriceList: updatePriceList
    })
  } catch (error) {
    response.status(400),
      response.json({
        ok: false,
        message: error.message
      })
  }
})

router.delete('/:id', async (request, response) => {
  try {
    const deleteWastePrice = await wastePrice.deleteWastePrice(request.params.id)
    response.json({
      ok: true,
      message: 'Datos eliminados',
      deleteWastePrice: deleteWastePrice
    })
  } catch (error) {
    response.status(400)
    response.json({
      ok: false,
      message: error.message
    })
  }
})

module.exports = router