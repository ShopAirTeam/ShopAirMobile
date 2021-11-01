const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId;

const categorySchema = new Schema({
    id: { type: ObjectId },
    nameCategory: { type: String }
})

module.exports = mongoose.model('Category', categorySchema)