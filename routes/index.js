const express = require('express');
const router = express.Router();

const SERVER_UPTIME = new Date();

router.get('/', (req, res) => {
    res.json({ uptime: new Date() - SERVER_UPTIME });
});

module.exports = router;
