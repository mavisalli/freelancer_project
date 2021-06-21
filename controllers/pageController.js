const Project = require('../models/Project');
const nodemailer = require('nodemailer');



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

exports.getContactPage = (req, res) => {
  res.status(200).render('contact');
};

exports.getLoginPage = (req, res) => {
  res.status(200).render('login');
};


exports.sendEmail = async (req, res) => {

  const outputMessage = `
  <h1>A mail from freelancer contact page</h1>
  <ul>
    <li>Name: ${req.body.name}</li>
    <li>Email: ${req.body.email}</li>
  </ul>
  <h1>Message</h1>
  <p>${req.body.message}</p>
  `
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: "mavi.baris96@gmail.com", // Enter your gmail account
      pass: "zjzobjozerlezvhp", // Enter your gmail password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Freelancer Contact Form" <mavi.baris96@gmail.com>', // sender address
    to: 'salliseyhan2@gmail.com', // list of receivers
    subject: "Contact Form New Message ✔", // Subject line
    html: outputMessage, // html body
  });
  res.status(200).redirect('/');
};


