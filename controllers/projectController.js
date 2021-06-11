// const Project = require("../models/Project");
// const fs = require("fs");


// exports.createProject = async (req, res) => {
//   const uploadDir = "public/uploads";

//   if (!fs.existsSync(uploadDir)) {
//     fs.mkdirSync(uploadDir);
//   }

//   let uploadeImage = req.files.image;
//   let uploadPath = __dirname + "/../public/uploads/" + uploadeImage.name;

//   uploadeImage.mv(uploadPath, async () => {
//     await Project.create({
//       title: req.body.title,
//       description: req.body.description,
//       image: "/uploads/" + uploadeImage.name,
//     });
//     res.redirect("/");
//   });
// };





