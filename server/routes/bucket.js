const router = require('express').Router()
const multer = require('multer')

const bucketController = require('../controllers/bucket')

router.post('/bucket/:bucketName/files/:uuid', multer().single('image'), bucketController.post)
      .get ('/bucket/:bucketName/files/:uuid', bucketController.read)

module.exports = router
