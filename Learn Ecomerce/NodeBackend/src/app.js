
const  connectDb =require("../src/db/connectDb")
const express = require('express')
const router= express.Router();
const route = require("../src/route/route")

const app = express()
const mongo =require("mongoose");

const cors = require("cors");
app.use(cors());
app.use(route)
connectDb();

app.use(express.json());
app.use(require('./controler/ProductsApi/addProducts'))

app.listen(5000, () => {
    console.log(`server is runnig at port no 5000`);
})