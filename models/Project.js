const mongoose = require("mongoose");
const Schema = mongoose.Schema;


//Create Schema

const ProjectSchema = new Schema({
  title: {
    type: String,
    unique: true,
    required: true
  },
  description: {
    type: String,
    unique: true,
    trim: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
 
});



const Project = mongoose.model("Project", ProjectSchema);

module.exports = Project;
