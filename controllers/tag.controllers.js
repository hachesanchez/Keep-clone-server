const Tag = require('./../models/Tag.model')

const response = require('express')


const getAllTags = (req, res, next) => {

    Tag
        .find()
        .populate()
        .sort({ name: 1 })
        .then(response => res.json(response))
        .catch(err => next(err))
}


const getOneTag = (req, res, next) => {

    const { id } = req.params

    Tag
        .findById(id)
        .populate({
            path: 'owner'
        })
        .then(response => res.json(response))
        .catch(err => next(err))
}


const saveTag = (req, res, next) => {

    const { name } = req.body
    // const { _id: owner } = req.payload

    Tag
        .create({ name })
        .then(response => res.json(response))
        .catch(err => next(err))
}


const editTag = (req, res, next) => {

    const { id } = req.params
    const { name } = req.body
    const updatedTag = { name }

    Tag
        .findByIdAndUpdate(id, updatedTag, { new: true })
        .then(response => res.json(response))
        .catch(err => next(err))
}


const deleteTag = (req, res, next) => {

    const { id } = req.params

    Tag
        .findByIdAndDelete(id)
        .then(response => res.json(response))
        .catch(err => next(err))
}



module.exports = {
    getAllTags,
    getOneTag,
    saveTag,
    editTag,
    deleteTag
}