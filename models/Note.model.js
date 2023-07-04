const { Schema, model } = require('mongoose')

const noteSchema = new Schema(
    {
        title: {
            type: String,
            required: [true, 'El título de la nota es obligario']
        },
        body: {
            type: String,
            required: [true, 'Añadir texto es obligatorio']
        },
        image: {
            type: String
        },
        datePosted: {
            type: Date,
            default: Date.now
        },
        dateModified: {
            type: Date,
            default: Date.now
        },
        reminder: {
            date: {
                type: Date,
                default: null
            },
            location: {
                type: String,
                default: null
            }
        },
        owner: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
        collaborators: [{
            type: Schema.Types.ObjectId,
            ref: 'User'
        }],
        tag: [{
            type: Schema.Types.ObjectId,
            ref: "Tag",
            required: false
        }]

    },
    {
        timestamps: true
    }
)

const Note = model('Note', noteSchema)

module.exports = Note