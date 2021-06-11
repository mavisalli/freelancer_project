const express = require("express");

const pageController = require("../controllers/pageController");

const router = express.Router();

router.route("/").post(pageController.createProject);
router.route("/").get(pageController.getIndexPage);
router.route("/about").get(pageController.getAboutPage);
// router.route("/").get(pageController.getAllProjects);
// router.route("/:slug").put(pageController.updateProject);




module.exports = router;