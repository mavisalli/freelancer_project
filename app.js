const mongoose = require("mongoose");
const express = require("express");

const ejs = require("ejs");
const methodOverride = require("method-override");
const fileUpload = require('express-fileupload');
const session = require('express-session');
const MongoStore = require('connect-mongo');


const pageRoute = require("./routes/pageRoute");
const adminRoute = require("./routes/adminRoute");


const app = express();

// Connect DB

mongoose
  .connect("mongodb+srv://mavibaris:Kitaptek12@cluster0.qr0gv.mongodb.net/freelancer-db?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("DB Connected Successfully");
  })
  .catch((err) => {
    console.log(err);
  });

//TEMPLATE ENGİNE
app.set("view engine", "ejs");

//GLOBAL VARIABLE
global.adminIN = null;

// MİDDLEWARES
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(fileUpload()); 
app.use(
  methodOverride("_method", {
    methods: ["POST", "GET"],
  })
);
app.use(
  session({
    secret: 'my_keyboard_cat',
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({ mongoUrl: 'mongodb+srv://mavibaris:Kitaptek12@cluster0.qr0gv.mongodb.net/freelancer-db?retryWrites=true&w=majority' }),
  }) 
);
// ROUTES
app.use("*", (req,res,next)=> {
  adminIN = req.session.adminId;
  next();

})
app.use("/", pageRoute);
app.use("/admins", adminRoute);


const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Sunucu ${port} portunda başlatıldı..`);
});
