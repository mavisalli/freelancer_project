const Admin = require("../models/Admin");

exports.createAdmin = async (req, res) => {
  const admin = await Admin.create(req.body);

  res.status(201).json({
    status: "success",
    admin,
  });
};

exports.loginAdmin = async (req, res) => {
  const { name, password } = req.body;

  await Admin.findOne({ name }, (err, admin) => {
    if (admin) {
      if (password === admin.password) {
        // ADMİN SESSİON
        req.session.adminId = admin._id;

        res.status(200).redirect("/");
      }
    }
  });
};

exports.logoutAdmin = (req, res) => {
  req.session.destroy(() => {
    res.redirect("/");
  });
};
