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
  // Questioning the need for context
  // const adminContext = useContext(AdminContext);

  const [admin, setAdmin] = useState({});
  const [login, allowLogin] = useState(false);

  const handleLogin = (obj) => {
    setAdmin(obj);
    if (admin.status === 1) {
      allowLogin(true);

    }
  }

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
            <div
            // {...props}
            // admin={admin}
            >home</div>
          } />

      </Router>
    </Container>
  );
}

export default App;
