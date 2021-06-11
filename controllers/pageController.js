const Project = require("../models/Project");

exports.getIndexPage = async (req, res) => {

  const projects = await Project.find();
  res.status(200).render("index", {
    projects
  })
};

exports.getAboutPage = (req, res) => {
  res.status(200).render("about")
};


exports.getContactPage = (req, res) => {
  res.render("add");
};

exports.getAllProjects = async (req, res) => {
  try {

   
    const projects = await Project.find().sort("-createdAt");

    res.status(200).render("index", {
      projects

    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error,
    });
  }
};




