const express = require("express");
const router = express.Router();
const getMessagesBL = require('../bl/getMessagesBL');

router.get("/api/messages", async (req, res) => { 
    try {
// goto BL
        let queryResult = await getMessagesBL();

    
        res.json({
            success: true,
            data: queryResult,
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