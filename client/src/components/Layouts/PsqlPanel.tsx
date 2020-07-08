import { makeStyles, Theme } from '@material-ui/core/styles';
import React,
{
  useEffect,
  useState,
} from 'react';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import CreateTable from './Forms/Psql/CreateTable';
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

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}>
      {value === index && (
        <Box p={3}>
          <Typography>
            {children}
          </Typography>
        </Box>
      )}
    </div>
  );
}

function allyProps(index: any) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
const useStyles = makeStyles(() => ({
  form: {
  },
  input: {
    marginBottom: '1rem'
  },
  button: {
    margin: '1rem auto'
  },
  tabs: {
    flexGrow: 1,
    color: 'white',
    backgroundColor: '#454545'
  },
  tab: {
    indicator: {
      backgroundColor: '#555'
    }
  },
}));

const PsqlPanel = () => {

  const classes = useStyles();
  const [value, setValue] = useState(0);
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

  const changeTab = (e: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  }

  const viewAllTables = (e: any) => {
    e.preventDefault();
    console.log(tables);
    // axios.get('/tables/view-tables')
    //   .then((response) => {
    //     console.log(response);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  }
  const createTable = (e: any) => {
    e.preventDefault();
    console.log('create table');
    // axios.post('/tables/create-table', {
    //   //values as an object
    // }).then((response) => {
    //   console.log(response);
    // }).catch((error) => {
    //   console.log(error);
    // });
  }

  console.log(tables)

  return (
    <Box>
      <Typography variant="h5">PostgreSQL database:</Typography>
      <Typography variant="h6">Choose your operation:</Typography>
      <AppBar
        className={classes.tabs}
        position="static">
        <Tabs
          TabIndicatorProps={{ style: { backgroundColor: 'white' } }}
          value={value} onChange={changeTab} aria-label="database tabs">
          <Tab
            label="View tables" {...allyProps(0)} />
          <Tab
            label="Create table" {...allyProps(1)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        {'show all tables'}
      </TabPanel>
      <TabPanel
        value={value} index={1}>
        <CreateTable createTable={createTable} />
      </TabPanel>
    </Box>
  );
}

export default PsqlPanel;