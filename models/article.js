const db = require('../db.js');

const findMany = async () => {
  return db.query('SELECT * FROM article');
};

const findOne = async (id, failIfNotFound = true) => {
  const rows = await db.query(`SELECT * FROM article WHERE id = ?`, [id]);
  if (rows.length) {
    return rows[0];
  }
  if (failIfNotFound) throw new RecordNotFoundError('contacts', id);
  return null;
};

module.exports = {
  findMany,
  findOne,
};
