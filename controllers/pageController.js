const Project = require('../models/Project');




exports.getIndexPage = async (req, res) => {
  console.log(req.session.adminId)

  const projects = await Project.find({});

  res.status(200).render('index',{
    projects
  });
};

exports.getAboutPage = (req, res) => {
  res.status(200).render('about');
};

exports.getLoginPage = (req, res) => {
  res.status(200).render('login');
};



