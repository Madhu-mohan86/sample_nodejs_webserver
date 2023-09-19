const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const cookieParser = require("cookie-parser");
const expressSession = require("express-session");
const connectFlash = require("connect-flash");
const router = express.Router();

const indexroute = require("./routes/indexrouter");

const homepagecontroller = require("./controllers/homecontroller");
const usercontroller = require("./controllers/usercontroller");

mongoose.connect("mongodb://52.201.90.123:27017/", { useNewUrlParser: true });
mongoose.connection.once("open", (error) => {
  if (error) {
    console.log("connecting error with database");
  } else {
    console.log("connection was successful");
  }
});

app.use(
  methodOverride("_method", {
    methods: ["POST", "GET"],
  })
);

app.use(cookieParser("007forcookie"));

app.use(
  expressSession({
    secret: "007forcookie",
    cookie: {
      maxAge: 4000000,
    },
    resave: false,
    saveUninitialized: false,
  })
);

app.use(connectFlash());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set("view engine", "ejs");

app.use(router);

router.use("/", indexroute);

app.set("port", process.env.PORT || 5000);

app.listen(app.get("port"), () => {
  console.log(`server running on ${app.get("port")}`);
});
