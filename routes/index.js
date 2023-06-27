const router = require('express').Router()

router.use('/auth', require('./auth.routes'))
router.use('/user', require('./user.routes'))
// router.use('/notes', require('./note.routes'))
// router.use('/tag', require('./tag.routes'))

module.exports = router