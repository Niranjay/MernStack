const express = require ('express');
const router = express.Router()

const greterThen = require("../controler/Greterthen")
router.get("/greterthen", greterThen.GraterThen )

const MyNodMailer = require("../controler/NodeMailer")
router.post("/mail", MyNodMailer.mailer)


const allData= require("../controler/AllData")
router.get("/getstu", allData.AllData)

const LessThen = require("../controler/LessThen")
router.get("/lessthen", LessThen.LessThen)

const greterthenEqual = require("../controler/GreterThenEqual")
router.get("/greterthenequal", greterthenEqual.greterthenEqual)

const InUse = require("../controler/InUse")
router.get("/inuse",InUse.InUse)

const notInUse= require("../controler/NotInUse")
router.get("/notinuse", notInUse.notInUse)

const stuDataById = require("../controler/StuDataById")
router.get("getstu/:id", stuDataById.stuDataById)


module.exports = router;