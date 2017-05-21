const isAuthenticated = (req, res, next) => {
  const user = firebase.auth().currentUser;
  if (user !== null) {
    req.user = user;
    return next();
  }
  return res.redirect('/login');
};

module.exports = isAuthenticated;
