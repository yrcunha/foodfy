const express = require("express");
const {
  onlyUsers,
  isLoggedRedirectToProfile,
} = require("../app/middlewares/sessions");
const main = require("./main");
const recipes = require("./recipes");
const chefs = require("./chefs");
const users = require("./users");

const routes = express.Router();

routes.use(main);
routes.use("/admin/recipes", recipes);
routes.use("/admin/chefs", chefs);
routes.use("/admin/users", users);

routes.get("/login", isLoggedRedirectToProfile, (req, res) =>
  res.redirect("/admin/users/login")
);
routes.get("/admin", onlyUsers, (req, res) => res.redirect("/admin/recipes"));

module.exports = routes;