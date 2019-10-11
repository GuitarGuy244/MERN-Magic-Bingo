const Authentication = require("./controllers/authentication");
const passportService = require("./services/passport");
const passport = require("passport");

const requireAuth = passport.authenticate("jwt", { session: false });
const requireLogin = passport.authenticate("local", { session: false });

module.exports = function (app) {
  app.get("/dashboard", requireAuth, function (req, res) {
    res.send({ hi: "there" });
  });

  app.get("/game", requireAuth, function (req, res) {
    res.send({ Welcom: 'to the game' });
  });

  app.post("/", requireLogin, Authentication.login);
  app.post("/register", Authentication.register);
};
