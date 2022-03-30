const bcrypt = require('bcryptjs');
const { users } = require('../../models');

exports.register = function (email, password) {
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password, salt);
  return users.create({
    email: email,
    password: hash,
  });
};

exports.verifyUser = async function (email, password) {
  const user = await users.findOne({
    where: {
      email: email,
    },
    raw: true,
  });
  if (!user) {
    return false;
  }
  if (bcrypt.compareSync(password, user.password))
    return user;
  return false;
};
