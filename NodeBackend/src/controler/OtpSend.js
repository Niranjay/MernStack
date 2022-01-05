const express = require('express')
const router = express.Router();
const mongo = require('mongoose')
router.use(express.json())
// router.use(express.json())

const Otp = require("../models/otpSystem");



module.exports = router;