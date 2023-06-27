const User = require('./../models/User.model')
const Note = require('./../models/Note.model')
const Tag = require('./../models/Tag.model')

const { response } = require('express')



const getAllUsers = (req, res, next) => {

    User
        .find()
        .select({ email: 1, username: 1, firstName: 1, lastName: 1, avatar: 1, notes: 1, tags: 1 })
        .sort({ username: 1 })
        .then(response => res.json(response))
        .catch(err => next(err))
}


const getOneUser = (req, res, next) => {

    const { id } = req.params

    User
        .findById(id)
        .populate({
            path: 'notes',
            select: 'title'
        })
        .populate({
            path: 'tags'
        })
        .then(response => res.json(response))
        .catch(err => next(err))
}


const editUser = (req, res, next) => {

    const { email, username, firstName, lastName, avatar, notes, tags } = req.body
    const { id } = req.params

    const updatedUser = { email, username, firstName, lastName, avatar, notes, tags }

    User
        .findByIdAndUpdate(id, updatedUser, { new: true })
        .then(response => res.json(response))
        .catch(err => next(err))
}


module.exports = {
    getAllUsers,
    getOneUser,
    editUser
}