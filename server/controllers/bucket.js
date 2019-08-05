const { storage } = require('../config')

const create = async (req, res) => {
	const file = storage.bucket(req.params.bucket).file(req.params.uuid)

	file.createWriteStream({
		contentType: req.file.mimetype
	}).on('error', err => {
		console.log(err)
		return res.status(400).json(false)
	}).on('finish', () => {
		return res.status(201).json(true)
	}).end(req.file.buffer)
}

const read = async (req, res) => {
	try {
		const file = storage.bucket(req.params.bucket).file(req.params.uuid)

		if (req.query.blob) return res.status(200).send(blob)

		const contentType = (await file.getMetadata())[0].contentType
		
		return res.status(200).json('data:' + contentType + ';base64,' + (await file.download())[0].toString('base64'))
	} catch (err) {
		return res.status(400).json(false)
	}
}

const deletes = async (req, res) => {
	try {
		const file = storage.bucket(req.params.bucket).file(req.params.uuid)

		await file.delete()

		return res.status(200).json(true)
	} catch (err) {
		console.log(err)
		return res.status(400).json(false)
	}
}

module.exports = {
	create,
	read,
	deletes
}
