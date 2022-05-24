const express = require("express");
const mongoose = require("mongoose");
const bodyParser =require("body-parser");
const cors = require("cors");
 require("dotenv").config();
const app = express();

const PORT = process.env.PORT || 8070;

app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;

mongoose.connect(URL,{
    
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once("open", () =>{
    console.log("Mongodb connection success!");
})


const paymentRouter = require("./routes/payments.js");
app.use(paymentRouter);


const travelPackageRouter=require("./routes/travelPackage.js");
app.use("/travelpackages",travelPackageRouter);


const packageBookingRouter=require("./routes/Packagebooking.js");
app.use("/packagebooking",packageBookingRouter);

const AddRouter = require("./routes/Registers.js");
app.use("/user",AddRouter);

const Inquiry = require("./routes/Inquiry");
app.use("/inquiry",Inquiry);


const UserRoute = require("./routes/UserProfile.js");
app.use("/User",UserRoute);



app.listen(PORT, () =>{
    console.log(`The port is : ${PORT}`);
})