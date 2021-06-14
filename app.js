const mongoose = require("mongoose");
const express = require("express");

const ejs = require("ejs");
const methodOverride = require("method-override");

const pageRoute = require("./routes/pageRoute");


const app = express();

// Connect DB

mongoose
  .connect("mongodb://localhost/freelancer-db", {
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

// MİDDLEWARES
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  methodOverride("_method", {
    methods: ["POST", "GET"],
  })
);

// ROUTES

app.use("/", pageRoute);


const port = 3000;
app.listen(port, () => {
  console.log(`Sunucu ${port} portunda başlatıldı..`);
});
