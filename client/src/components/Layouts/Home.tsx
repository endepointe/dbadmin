import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Hidden from '@material-ui/core/Hidden';
import React,
{
  useState,
} from 'react';
import {
  // Link,
  // Switch,
} from "react-router-dom";

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    home: {
      display: 'flex',
      // width: '100%',
      // height: '100%',
      // position: 'absolute',
      // top: '50%',
      // left: '50%',
      // transform: 'translateX(-50%) translateY(-50%)',
    },
    appbar: {
      backgroundColor: "#454545",
      [theme.breakpoints.up('sm')]: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
      },
    },
    menuBtn: {
      color: 'white',
      marginRight: theme.spacing(2),
      [theme.breakpoints.up('sm')]: {
        display: 'none' 
      },
    },
    drawer: {
      [theme.breakpoints.up('sm')]: {
        width: drawerWidth,
        flexShrink: 0, 
      },
    },
    drawerPaper: {
      width: drawerWidth,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3), 
    }, 
    toolbar: theme.mixins.toolbar,
  }),
);

const Home = (props: any) => {

  const classes = useStyles();
  const theme = useTheme();
  const {window} = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const container = window !== undefined ? () => window().document.body : undefined;

  const drawerToggle = () => {
    setMobileOpen(!mobileOpen);
  }

  return (
    <Box className={classes.home}>
      <AppBar
        className={classes.appbar}
        position="fixed">
        <Toolbar>
          <IconButton
            edge="start"
            onClick={drawerToggle}
            className={classes.menuBtn}>
            <MenuIcon />
          </IconButton>
          <Typography noWrap>
            {props.user}
          </Typography>
        </Toolbar>
      </AppBar>
      <nav
        className={classes.drawer}>
        <Hidden smUp implementation="js">
          <Drawer
            container={container}
            variant="temporary"
            anchor="left"
            open={mobileOpen}
            onClose={drawerToggle}
            ModalProps={{keepMounted: true}}
            classes={{paper: classes.drawerPaper}}>
            {'drawer contents'} 
          </Drawer> 
        </Hidden>
        <Hidden xsDown implementation="js">
          <Drawer
            variant="permanent"
            open
            classes={{paper: classes.drawerPaper}}>
          </Drawer>
          {'second drawer contents'} 
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar}/>
        {'main content'}
      </main>
    </Box>
  );
}

export default Home;