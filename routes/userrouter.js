const express = require("express");

const router = express.Router();

const usercontroller = require("../controllers/usercontroller");

const homecontroller = require("../controllers/homecontroller");

router.get("/signup", homecontroller.getuserpage);

router.post("/signup", usercontroller.postdetails);

router.get("/login", homecontroller.getloginpage);

router.post("/login", usercontroller.loginchecker);

router.get("/viewusers", usercontroller.showdetails);

router.get("/:id/edit", usercontroller.editdetails);

router.put("/:id/update", usercontroller.updatedetails);

router.delete("/:id/delete", usercontroller.deletedetails);

module.exports = router;
