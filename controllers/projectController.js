const Project = require("../models/Project");
const fs = require("fs");


exports.createProject = async (req, res) => {
  const uploadDir = "public/uploads";

  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
  }

  let uploadeImage = req.files.image;
  let uploadPath = __dirname + "/../public/uploads/" + uploadeImage.name;

  uploadeImage.mv(uploadPath, async () => {
    await Project.create({
      title: req.body.title,
      description: req.body.description,
      image: "/uploads/" + uploadeImage.name,
    });
    res.redirect("/");
  });
};




exports.UpdateProject = async (req, res) => {
  try {

    const project = await Project.findOne({slug: req.params.slug});
    project.title = req.body.title;
    project.description = req.body.description;
    project.save();

    res.status(200).redirect('/');
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      error,
    });
  }
};

