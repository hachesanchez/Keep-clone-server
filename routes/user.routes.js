const router = require('express').Router()

const {
    getAllUsers,
    getOneUser,
    editUser
} = require('./../controllers/user.controllers')


router.get('/getAllUsers', getAllUsers)
router.get('/getOneUser/:id', getOneUser)
router.put('/editUser/:id', editUser)


module.exports = router