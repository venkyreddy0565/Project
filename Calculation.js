const mongoose = require('mongoose');

const calculationSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    input: Number,
    result: Number,
    timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Calculation', calculationSchema);
