const fs = require('fs');
const bcrypt = require('bcryptjs')

const loginController = {
  loginPage: (req, res) => {
    res.render("login");
  },
  postLogin: (req, res) => {
    let { email, password } = req.body
    const usersJson = fs.readFileSync("./src/db/users.json", "utf8");
    const users = JSON.parse(usersJson);

    if (email == users.email) {
      res.send("Usuario logado")
    } else {
      let msg = "Email invalido"
      res.render("login", { msg: msg })
    }

  }
};

module.exports = loginController