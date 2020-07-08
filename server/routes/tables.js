const router = require('express').Router();
const { db } = require('../dbs/pgp/psql');

router.get('/psql', (req, res) => {
  console.log(req);
  res.send('tables');
});

module.exports = router;