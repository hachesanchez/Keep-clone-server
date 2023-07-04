const Note = require('./../models/Note.model')
const User = require('./../models/User.model')
const Tag = require('./../models/Tag.model')


const { response } = require('express')


const getAllNotes = (req, res, next) => {

    Note
        .find()
        .select({ title: 1, body: 1, datePosted: 1, dateModified: 1, reminder: 1, reminder: 1, owner: 1, collaborators: 1, tag: 1 })
        .sort({ title: 1 })
        .then(response => res.json(response))
        .catch(err => next(err))
}


const getOneNote = (req, res, next) => {

    const { id } = req.params
    Note
        .findById(id)
        .populate({
            path: 'owner'
        })
        .populate({
            path: 'tag'
        })
        .populate({
            path: 'collaborators',
            select: 'username avatar'
        })
        .then(response => res.json(response))
        .catch(err => next(err))
}


const saveNote = (req, res, next) => {

    const { title, body, image, reminder, collaborators, tag } = req.body
    // const { _id: owner } = req.payload

    Note
        .create({ title, body, image, reminder, collaborators, tag })
        .then(response => res.json(response))
        .catch(err => next(err))

}


const editNote = (req, res, next) => {

    const { id: noteId } = req.params
    const { title, body, image, reminder, collaborators, tag } = req.body

    Note
        .findByIdAndUpdate(noteId, { title, body, image, reminder, collaborators, tag }, { new: true })
        .then(response => res.json(response))
        .catch(err => next(err))
}


const deleteNote = (req, res, next) => {

    const { id } = req.params

    Note
        .findByIdAndDelete(id)
        .then(() => res.sendStatus(204))
        .catch(err => next(err))
}



module.exports = {
    getAllNotes,
    getOneNote,
    saveNote,
    editNote,
    deleteNote
}