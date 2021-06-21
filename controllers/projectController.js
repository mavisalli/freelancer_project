const Project = require('../models/Project');
const fs = require('fs');


exports.createProject = async (req, res) => {


  const uploadDir = "public/uploads";

  if(!fs.existsSync(uploadDir)) {  
    fs.mkdirSync(uploadDir);
  }

  
  let uploadeImage = req.files.image;
  let uploadPath = __dirname + "/../public/uploads/" + uploadeImage.name;  

  uploadeImage.mv(uploadPath, async ()=> {
    await Project.create({
      ...req.body,
      image: "/uploads/" + uploadeImage.name
    });
    res.redirect("/");
  });
        
};


exports.updateProject = async (req, res) => {
  try{

    const project = await Project.findOne({ _id: req.params.id });
    project.title = req.body.title
    project.description = req.body.description
    project.save()

  res.redirect('/')
  } catch {
    res.status(400).json({
      status: 'fail',
    
    });
  }
};

exports.deleteProject = async (req, res) => {
  await Project.findByIdAndRemove(req.params.id);
  res.redirect('/');
  
}

