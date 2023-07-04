const router = require('express').Router()


const {
    saveTag,
    getAllTags,
    getOneTag,
    editTag,
    deleteTag,
} = require('./../controllers/tag.controllers')


router.get('/getAllTags', getAllTags)
router.get('/getOneTag/:id', getOneTag)
router.post('/saveTag', saveTag)
router.put('/editTag/:id', editTag)
router.delete('/deleteTag/:id', deleteTag)


module.exports = router