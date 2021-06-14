const Project = require('../models/Project');
const fs = require('fs');


exports.createProject = async (req, res) => {

    try{
      const project = await Project.create({
        title: req.body.title,
        description: req.body.description
      })

      res.status(201).redirect('/');
    } catch(error) {
      
      res.status(400).json({
        status: 'fail',
        error,
      });
    }
        
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

exports.getAllProjects = async (req, res) => {
  try {
   
    
    const projects = await Project.find();

    res.status(200).render('index',{
      projects,
    })
  } catch(error) {
    res.status(400).json({
      status: 'fail',
      error,
    });
  }
};