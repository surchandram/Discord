const express = require('express');
const http = require("http");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const authRoutes = require('./routes/authRoutes');

const PORT = process.env.PORT || process.env.API_PORT;

const app = express();
app.use(express.json());
app.use(cors());

// register the route
//app.use("/api/auth", authRoutes);

console.log("Starting our server");

const server = http.createServer(app);

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    server.listen(PORT, ()=>{
        console.log("Succesfully connect to mongo");
        console.log(`Server is Listening on ${PORT}`);
    });
})
.catch(err => {
    console.log('database connection failed. Server not started');
    console.error(err);
});