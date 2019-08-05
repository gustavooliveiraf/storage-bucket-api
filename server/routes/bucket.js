const router = require('express').Router()
const multer = require('multer')

const bucketController = require('../controllers/bucket')

router.post('/:bucket/:uuid', multer().single('image'), bucketController.create)
      .get ('/:bucket/:uuid', bucketController.read)
      .delete('/:bucket/:uuid', bucketController.deletes)

module.exports = router
