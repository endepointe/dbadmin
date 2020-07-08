import {
  makeStyles,
  // useTheme, 
  Theme,
  createStyles
} from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import StorageIcon from '@material-ui/icons/Storage';
import Hidden from '@material-ui/core/Hidden';
import React,
{
  useState,
} from 'react';
import {
  Link,
  Switch,
  Route,
} from "react-router-dom";
import PsqlPanel from './PsqlPanel';
import MongoDBPanel from './MongoDBPanel';

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    home: {
      display: 'flex',
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
    drawerList: {
      marginTop: '6rem',
    },
    nested: {
      marginTop: theme.spacing(1),
      paddingLeft: theme.spacing(4),
    },
    link: {
      textDecoration: 'none',
    }
  }),
);

const DrawerList = (props: any) => {

  const [open, setOpen] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(1);
  const classes = useStyles();

  const showDatabases = () => {
    setOpen(!open);
  }

  const selectIndexListItem = (
    event: React.MouseEvent<HTMLElement, MouseEvent>,
    index: number
  ) => {
    setSelectedIndex(index);
  }

  return (
    <List
      className={classes.drawerList}
      component="nav">
      <Divider />
      <ListItem button onClick={showDatabases}>
        <ListItemIcon>
          <StorageIcon />
        </ListItemIcon>
        <ListItemText primary="Databases" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <Link
            className={classes.link}
            to="/home/postgresql">
            <ListItem
              button
              selected={selectedIndex === 1}
              onClick={(event) => selectIndexListItem(event, 1)}
              className={classes.nested}>
              <ListItemIcon>
                {'PostgreSQL'}
              </ListItemIcon>
            </ListItem>
          </Link>
          <Link
            className={classes.link}
            to="/home/mongodb">
            <ListItem
              button
              selected={selectedIndex === 2}
              onClick={(event) => selectIndexListItem(event, 2)}
              className={classes.nested}>
              <ListItemIcon>
                {'MongoDB'}
              </ListItemIcon>
            </ListItem>
          </Link>
        </List>
      </Collapse>
    </List>
  );
};

const AdminHome = (props: any) => {

  const classes = useStyles();
  // const theme = useTheme();
  const { window } = props;
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
            ModalProps={{ keepMounted: true }}
            classes={{ paper: classes.drawerPaper }}>
            <DrawerList />
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="js">
          <Drawer
            variant="permanent"
            open
            classes={{ paper: classes.drawerPaper }}>
            <DrawerList />
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Switch>
          <Route path="/home/postgresql">
            <PsqlPanel />
          </Route>
          <Route path="/home/mongodb">
            <MongoDBPanel />
          </Route>
        </Switch>
      </main>
    </Box>
  );
}

export default AdminHome;