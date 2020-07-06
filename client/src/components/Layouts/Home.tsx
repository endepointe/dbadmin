import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Drawer from '@material-ui/core/Drawer';
import React from 'react';
import {
  // Link,
  // Switch,
} from "react-router-dom";

const useStyles = makeStyles(() => ({
  home: {
    width: '100%',
    height: '100%',
    // position: 'absolute',
    // top: '50%',
    // left: '50%',
    // transform: 'translateX(-50%) translateY(-50%)',
  }
}))

const Home = (props: any) => {

  const classes = useStyles();

  return (
    <Box className={classes.home}>
      {props.user}
      <Drawer>
        <Typography>{props.user}</Typography>
      </Drawer>
    </Box>
  );
}

export default Home;