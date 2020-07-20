const router = require('express').Router();
const { db } = require('../dbs/pgp/psql');

router.get('/get-tablenames', (req, res) => {
  db.query("SELECT * FROM pg_catalog.pg_tables WHERE schemaname != 'pg_catalog' AND schemaname != 'information_schema'")
    .then((response) => {
      // console.log(response[0]);
      res.status(200).send(response);
    })
    .catch((err) => console.log(err))
});
//////
////
//
////
//////
router.get('/view-table', (req, res) => {
  // console.log(req.query.name)
  db.manyOrNone(`SELECT * FROM ${req.query.name};`)
    .then((response) => {
      let res = [];
      for (let i = 0; i < response.length; ++i) {
        res.push(response[i]);
      }
      console.log(res);
      res.status(200).send(res);
    })
    .catch(err => {
      res.status(200).end('no data')
    })
});
//////
////
//
////
//////
router.post('/create-table', (req, res) => {
  console.log(req);
  //db.none(`CREATE TABLE ${req.body.name} (name varchar(10))`);
  res.send('create table');
});
//////
////
//
////
//////

//////
////
//
////
//////

//////
////
//
////
//////

//////
////
//
////
//////
module.exports = router;