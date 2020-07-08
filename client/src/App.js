import { makeStyles } from '@material-ui/core/styles';
import './App.css';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import React,
{
  // createContext,
  // useContext,
  useState,
} from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import AuthForm from './components/Auth/AuthForm';
import AdminHome from './components/Layouts/AdminHome';

// const AdminContext = createContext({
//   admin: '',
//   authenticated: false,
// });

const useStyles = makeStyles(() => ({
  app: {
    width: '100%',
    height: '100%',
  }
}));

const App = () => {

  const classes = useStyles();
  // Context to be implemented
  // const adminContext = useContext(AdminContext);

  const [admin, setAdmin] = useState({ status: 0, msg: '' });
  const [login, allowLogin] = useState(false);

  const handleLogin = (obj) => {
    console.log('handleLogin: ', obj);
    setAdmin({
      status: obj.status, // for now
      msg: obj.msg
    });
    allowLogin(true);
  }

  // If user tries to access a router manually
  // without authentication, redirect user to 
  // the login page.
  // const checkAuthStatus = () => {}

  return (
    <Container className={classes.app}>
      <CssBaseline />
      <Router>
        <Route
          exact path="/"
          render={(props) =>
            <AuthForm
              {...props}
              handleLogin={handleLogin} />
          } />
        <Route
          path="/home"
          render={(props) =>
            <AdminHome
              login={login}
              user={admin.msg}
              {...props} />
          } />
      </Router>
    </Container>
  );
}

export default App;
