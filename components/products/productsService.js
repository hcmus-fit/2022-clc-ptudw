const { db } = require('../../models/db');

exports.list = async () => {
  return await db().collection('products').find().toArray();
};