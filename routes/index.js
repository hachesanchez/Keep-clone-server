const router = require('express').Router()

router.use('/notes', require('./note.routes'))

module.exports = router