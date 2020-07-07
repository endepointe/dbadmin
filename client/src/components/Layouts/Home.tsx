import { makeStyles, useTheme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Hidden from '@material-ui/core/Hidden';
import React from 'react';
import {
  // Link,
  // Switch,
} from "react-router-dom";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  home: {
    display: 'flex',
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translateX(-50%) translateY(-50%)',
  },
  appbar: {
    backgroundColor: "#454545",
  },
  menuBtn: {
    color: 'white',
  },
  drawer: {
    width: `${drawerWidth}px`,
    height: '100%',
    backgroundColor: 'black',
    color: 'white',
  }
}))

const Home = (props: any) => {

  const classes = useStyles();

  const drawerToggle = () => {
    console.log('toggle drawer');
  }

  return (
    <Box className={classes.home}>
      <AppBar
        className={classes.appbar}
        position="fixed">
        <Toolbar>
          <IconButton
            onClick={drawerToggle}
            className={classes.menuBtn}>
            <MenuIcon />
          </IconButton>
          <Typography noWrap>
            {props.user}
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Home;