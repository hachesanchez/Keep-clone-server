const router = require('express').Router()

const {
    getAllUsers,
    getOneUser,
    editUser,
    deleteUser
} = require('./../controllers/user.controllers')


router.get('/getAllUsers', getAllUsers)
router.get('/getOneUser/:id', getOneUser)
router.put('/editUser/:id', editUser)
router.delete('/deleteUser/:id', deleteUser)


module.exports = router