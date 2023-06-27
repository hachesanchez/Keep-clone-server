const { Schema, model } = require('mongoose')

const tagSchema = new Schema(
    {
        name: {
            type: String,
            require: [true, 'Tag name is required'],
            unique: true,
            lowercase: true,
            trim: true
        },
        owner: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    },
    {
        timestamps: true
    }
)

const Tag = model('Tag', tagSchema)
module.exports = Tag