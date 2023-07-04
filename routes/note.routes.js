const router = require("express").Router()

const {
  getAllNotes,
  getOneNote,
  saveNote,
  editNote,
  deleteNote
} = require('./../controllers/note.controllers')


router.get('/getAllNotes', getAllNotes)
router.get('/getOneNote/:id', getOneNote)
router.post('/saveNote', saveNote)
router.put('/editNote/:id', editNote)
router.delete('/deleteNote/:id', deleteNote)


module.exports = router
