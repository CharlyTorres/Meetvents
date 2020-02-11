exports.isAuth = (req, res, next) => {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.redirect("/");
  }
};

exports.isLogged = (req, res, next) => {
  if (req.isAuthenticated()) {
    res.redirect("/profile")
  } else {
    next()
  }
}

exports.isAdmin = (req, res, next) => {
  if (req.isAuthenticated() && req.user.role === "Admin") {
    next();
  } else {
    res.redirect("/profile");
  }
};