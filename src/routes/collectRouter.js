const express = require('express')
const collect = require('../usecases/collectUsecase')

const router = express.Router()

router.patch('/:id', async(request, response)=>{
  try {
    const updateWasteCollect = await collect.updateWasteCollect(request.params.id, request.body)
    response.json({
      ok:true,
      message: 'Recoleccion actualizada',
      updateWasteCollect: updateWasteCollect
    })
  } catch (error) {
    response.json({
      ok:false,
      error: error.message
    })
  }
})

module.exports = router