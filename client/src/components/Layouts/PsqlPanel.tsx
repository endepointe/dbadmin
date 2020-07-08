import { makeStyles } from '@material-ui/core/styles';
import React,
{ useEffect } from 'react';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import axios from 'axios';

const useStyles = makeStyles(() => ({
  form: {
  },
  input: {
    marginBottom: '1rem'
  },
  button: {
    margin: '1rem auto'
  }
}));

const PsqlPanel = () => {

  const classes = useStyles();

  useEffect(() => {
    axios.get('/tables/psql')
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  // const handleSubmit = (e: any) => {
  //   e.preventDefault();
  // let db: string = e.target.elements.db.value;
  // axios.get('/connect/psql', {
  // host: 'localhost',
  // port: 5432,
  // database: db,
  // user: process.env.PSQLUSER,
  // password: process.env.PSQLPASS,
  // max: 1 // use up to 30 connections
  //   })
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }

  return (
    <Box>
      <Typography variant="h3">PostgreSQL Connection:</Typography>
      {/* <form
        className={classes.form}
        onSubmit={handleSubmit}>
        <TextField
          className={classes.input}
          name="db"
          autoFocus
          fullWidth
          required
          label="Database"
          type="text"
          placeholder="Database"
        ></TextField>
        <Button
          className={classes.button}
          type="submit"
          fullWidth
          variant="outlined"
          color="primary"
        >Connect</Button>
      </form> */}
    </Box>
  );
}

export default PsqlPanel;