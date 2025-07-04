const express = require('express');
const router = express.Router();
const Calculation = require('./Calculation');
const auth = require('./authMiddleware');

function sumDigits(n) {
    return n * (n + 1) / 2;
}

router.post('/sum', auth, async (req, res) => {
    const { number } = req.body;

    const result = sumDigits(number);
    await new Calculation({ userId: req.user.id, input: number, result }).save();

    res.json({ result });
});

router.get('/history', auth, async (req, res) => {
    const history = await Calculation.find({ userId: req.user.id })
        .sort({ timestamp: -1 })
        .limit(5);
    res.json(history);
});

module.exports = router;
