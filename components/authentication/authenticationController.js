const authenticationService = require('./authenticationService');
exports.register = async function (req, res) {
  const { email, password } = req.body;
  const user = await authenticationService.isUserExist(email);
  if (user) {
    res.render('authentication/register', {
      title: 'Register',
      error: 'User already exist',
    });
    return;
  }
  await authenticationService.register(email, password);
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

exports.checkEmailExist= async (req, res) => {
  const user = await authenticationService.isUserExist(req.params.email);
  res.json(!!user);
}