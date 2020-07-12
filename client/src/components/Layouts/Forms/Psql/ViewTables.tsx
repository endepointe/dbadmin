import { makeStyles } from '@material-ui/core/styles';
// import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import React,
{
  useState,
  useEffect,
} from 'react';
import axios from 'axios';

const useStyles = makeStyles({
  table: {
    display: 'flex',
    flexWrap: 'wrap',
    minWidth: '100%',
  },
});

const ViewTables = () => {

  const classes = useStyles();
  //https://www.typescriptlang.org/docs/handbook/generics.html
  const [tableNames, setTableNames] = useState<string[]>([]);

  useEffect(() => {
    axios.get('/tables/view-tables')
      .then((res) => {
        const names: Array<string> = [];
        const iterator = res.data.values();
        for (const value of iterator) {
          names.push(value.tablename);
        }
        setTableNames(names);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Table Cell</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableNames.map((name, index) => (
            <TableRow key={index}>
              <TableCell component='th' scope='row'>
                {name}
              </TableCell>
              <TableCell align="right">{'table info'}</TableCell>
              <TableCell align="right">{'table info'}</TableCell>
              <TableCell align="right">{'table info'}</TableCell>
              <TableCell align="right">{'table info'}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
export default ViewTables;