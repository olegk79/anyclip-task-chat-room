const express = require("express");
const router = express.Router();
const loginUserBL = require('../bl/loginUserBL');

router.post("/api/login", async (req, res) => { 
    try {
// goto BL
        let loginResult = await loginUserBL(req.body.username);

    
        res.json({
            success: true,
            data: loginResult,
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