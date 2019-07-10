const { storage } = require('../config')

const post = async (req, res) => {
	const file = storage.bucket(req.params.bucketName).file(req.params.uuid)

	file.createWriteStream({
		resumable: true,
		contentType: req.file.mimetype,
		predefinedAcl: 'publicRead',
	})
	.on('error', err => {
		console.log(err)
		return res.status(400).json(false)
	})
	.on('finish', () => {
		return res.status(201).json(true)
	})
	.end(req.file.buffer)
}

const read = async (req, res) => {
	try {
		const file = storage.bucket(req.params.bucketName).file(req.params.uuid)

		const contentType = (await file.getMetadata())[0].contentType
		const blob = await file.download()

		if (req.query.blob) return res.status(200).send(blob)
		
		return res.status(200).json('data:' + contentType + ';base64,' + blob[0].toString('base64'))
	} catch (err) {
		console.log(err)
		return res.status(400).json(false)
	}
}

module.exports = {
	post,
	read
}
