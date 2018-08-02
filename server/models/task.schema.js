const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
    name: { type: String, required: true },
    complete: { type: Boolean, required: true, default: false }
});

module.exports = mongoose.model('task', TaskSchema);