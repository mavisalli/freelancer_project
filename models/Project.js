const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const slugify = require("slugify");

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
  image: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  slug: {
    type: String,
    unique: true
  },
});


ProjectSchema.pre("validate", function(next){ 
  this.slug = slugify(this.name, {
      lower: true,  
      strict: true  
  })
  next();
})

const Project = mongoose.model("Project", ProjectSchema);

module.exports = Project;
