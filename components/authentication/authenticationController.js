const authenticationService = require('./authenticationService');
exports.register = async function (req, res) {
  await authenticationService.register(req.body.email, req.body.password);
  // login after registration

  // redirect to home
  res.redirect('/');
};

exports.registerShow = function (req, res) {
  res.render('authentication/register', {
    title: 'Register',
  });
};

exports.loginShow = function (req, res) {
  if (req.user) {
    res.redirect('/');
  } else {
    res.render('authentication/login', {
      title: 'Login',
    });
  }
};

exports.logout = function (req, res) {
  req.logout();
  res.redirect('/');
};