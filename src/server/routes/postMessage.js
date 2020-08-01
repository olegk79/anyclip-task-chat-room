const express = require("express");
const router = express.Router();
const postMessageBL = require('../bl/postMessageBL');

router.post("/api/postMessage", async (req, res) => { 
    try {
// goto BL
        let postResult = await postMessageBL(req.body);

    
        res.json({
            success: true,
            data: postResult,
            error: null
        });
    }
    catch(error) {
        res.status(500).json({
            success: false,
            error: error.message,
            data: null
        });
    }
});

module.exports = router;