const express = require('express');

const pageController = require('../controllers/pageController');
const projectController = require('../controllers/projectController');

const router = express.Router();

//Page routes
router.route('/').get(pageController.getIndexPage);
router.route('/about').get(pageController.getAboutPage);
router.route('/contact').get(pageController.getContactPage);
router.route('/login').get(pageController.getLoginPage);
router.route('/contact').post(pageController.sendEmail);

router.route('/').post(projectController.createProject);
router.route('/:id').put(projectController.updateProject);
router.route('/:id').delete(projectController.deleteProject);


module.exports = router;