import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Box from '@material-ui/core/Box';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import React,
{
  useState,
} from 'react';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(() => ({
  psqlForm: {
    width: '100%',
    maxWidth: '500px',
  },
  inputField: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  tableName: {
    // marginTop: '2rem',
    // marginLeft: '1rem',
    // marginRight: '1rem',
    // marginBottom: '1rem'
    width: '50%',
    margin: '1rem auto',
  },
  input: {
    width: '90%',
    marginLeft: '1rem',
    marginRight: '1rem',
    marginBottom: '1rem'
  },
  formControl: {
    // width: '20%',
    minWidth: 80,
  },
  add: {
    margin: '1rem auto',
  },
  create: {
    margin: '3rem auto 1rem auto',
    backgroundColor: '#6f6f6f'
  },
}));

const CreateTable = (props: any) => {

  const classes = useStyles();
  const [type, setType] = useState('');
  const [tableData, setTableData] = useState({});

  const createTable = (e: any) => {
    e.preventDefault();
    console.log('create table');
  }

  const addColumn = (e: any) => {
    e.preventDefault();
    let tablename = e.target.elements.tablename.value;
    let key = e.target.elements.key.value;
    let value = e.target.elements.value.value;
    let type = e.target.elements.type.value;
    let data = { tablename, key, value, type };
    e.target.elements.key.value = null;
    e.target.elements.value.value = null;
    e.target.elements.type.value = null;
    // setTableData(data);
    // console.log(tableData)
  }

  const changeType = (e: React.ChangeEvent<{ value: unknown }>) => {
    setType(e.target.value as string);
  }

  return (
    <Box>
      <form
        className={classes.psqlForm}
        onSubmit={addColumn}>
        <div className={classes.inputField}>
          <TextField
            required
            type="text"
            name="tablename"
            label="Table name"
            className={classes.tableName} />
        </div>
        <div className={classes.inputField}>
          <TextField
            label="Column name"
            required
            type="text"
            name="key"
            className={classes.input} />
          <TextField
            label="Column value"
            required
            type="text"
            name="value"
            className={classes.input} />
          <FormControl
            className={classes.formControl}>
            {/* // className={classes.input}> */}
            <InputLabel id="type">Type</InputLabel>
            <Select
              labelId="type"
              onChange={changeType}
              name="type"
              value={type}
              label='Type'>
              <MenuItem value='string'>string</MenuItem>
              <MenuItem value='number'>number</MenuItem>
            </Select>
          </FormControl>

        </div>
        <div>
          <Button
            variant="outlined"
            type="submit"
            className={classes.add}>Add column</Button>
        </div>
      </form>
      <Divider />
      <Button
        fullWidth
        variant="contained"
        color="primary"
        onClick={createTable}
        className={classes.create}
        type="button">Create table</Button>
    </Box>

  );
}

export default CreateTable;