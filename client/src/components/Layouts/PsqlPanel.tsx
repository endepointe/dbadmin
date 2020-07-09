import { makeStyles } from '@material-ui/core/styles';
import React,
{
  useEffect,
  useState,
} from 'react';
import {
  Link
} from 'react-router-dom';
import Box from '@material-ui/core/Box';
import Crud from './Forms/Psql/Crud';
import axios from 'axios';
/*
  Pre-conditions: 
    - the user has ownership of only one database
    - the user has zero or many tables
  Post-conditions:
    - no new databases are created
    - the user has zero or many tables
  Tasks:
    - view all tables in database
    - create a new table with pre-determined values
      -- pre-determined values will be based on user input
    - select a table to update
    - delete a table
    - {...more as needed...}
*/

const useStyles = makeStyles(() => ({
  psqlNav: {
    display: 'flex',
    flexWrap: 'nowrap',
    width: '100%',
    backgroundColor: '#454545',
  },
  psqlUl: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    padding: 0,
    margin: 0,
  },
  psqlLi: {
    flex: 1,
    display: 'flex',
    textDecoration: 'none',
    listStyle: 'none',
    textAlign: 'center',
    padding: 0,
  },
  psqlLink: {
    marginTop: '1rem',
    flex: 1,
    color: 'white',
    padding: 0,
    fontSize: '1.2rem',
    borderBottom: '3px solid #454545',
    textDecoration: 'none',
    '&:focus': {
      borderBottom: '3px solid #CFCFCF',
    },
    '&:active': {
      borderBottom: '3px solid #CFCFCF',
    },
  },
}));

const PsqlPanel = () => {

  const classes = useStyles();
  const [tables, setTables] = useState([]);

  useEffect(() => {
    axios.get('/tables/view-tables')
      .then((response) => {
        console.log(response);
        setTables(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // const viewAllTables = (e: any) => {
  //   e.preventDefault();
  //   console.log(tables);
  // axios.get('/tables/view-tables')
  //   .then((response) => {
  //     console.log(response);
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });
  // }

  console.log(tables)

  return (
    <Box>
      <nav className={classes.psqlNav}>
        <ul className={classes.psqlUl}>
          <li className={classes.psqlLi}>
            <Link
              className={classes.psqlLink}
              to="/home/postgresql/view-tables">View Tables</Link>
          </li>
          <li
            className={classes.psqlLi}>
            <Link
              className={classes.psqlLink}
              to="/home/postgresql/create-table">Create Table</Link>
          </li>
        </ul>
      </nav>
      <main>
        <Crud />
      </main>
    </Box>
  );
}

export default PsqlPanel;