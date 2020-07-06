import React, { useEffect } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import {
    Home,
    Drafts,
    MoreHoriz,
    FindInPage,
    ArrowBackIos,
    DeveloperBoard,
    ArrowForwardIos,
} from '@material-ui/icons/';
import {
    Box,
    Tab,
    Tabs,
    List,
    Grid,
    Card,
    Drawer,
    AppBar,
    Divider,
    Toolbar,
    IconButton,
    CardContent,
    CssBaseline,
    Typography,
    CardHeader,
    ListItem,
    ListItemIcon,
    ListItemText
} from '@material-ui/core/';
import logo from '../../assets/byjusLogo.PNG'
import CustomList from '../../CommonComponents/List';

const drawerWidth = 180;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  paper: {
    background: "#833589"
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'none',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
}

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }


export default function Dashboard(props) {
  console.log(props)
  const { courseData: { courseDetails } } = props
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(0);

  useEffect(() => {
    console.log(courseDetails)
  }, [courseDetails]);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const getMenuItems = (menuName) => {
    if (menuName === 'Home') {
      return <Home />
    } else if (menuName === 'Search') {
      return <FindInPage />
    } else if (menuName === 'Drafts') {
      return <Drafts />
    } else if (menuName === 'Courses') {
      return <DeveloperBoard />
    }
  }
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
        style={{ backgroundColor: '#fafafa', color: '#000', boxShadow: '0px 1px 1px -1px' }}
      >
        <Toolbar style={{ padding: 10, alignItems: 'inherit' }}>
          <img src={logo} alt="logo" className={classes.logo} />
          <div style={{ flexDirection: 'row', textAlign: 'start', marginLeft: 50 }}>
            <Typography style={{ fontWeight: 600 }} variant="subtitle1" noWrap>
                CBSC: Grade 5 Maths - Algebra
            </Typography>
            <Tabs TabIndicatorProps={{style: {background:'#833589'}}} value={value} onChange={handleChange} aria-label="simple tabs example" style={{ minHeight: 24, paddingTop: 5 }}>
                <Tab label="Task" {...a11yProps(0)} style={{ margin: 0, padding: 0, minHeight: 10, minWidth: 55, fontSize: 10 }} />
                <Tab label="Conversation" {...a11yProps(1)} style={{ margin: 0, padding: 0, minHeight: 10, minWidth: 55, fontSize: 10, marginLeft: 20 }} />
                <Tab label="Files" {...a11yProps(2)} style={{ margin: 0, padding: 0, minHeight: 10, minWidth: 55, fontSize: 10, marginLeft: 20 }} />
                <Tab label="Resources" {...a11yProps(2)} style={{ margin: 0, padding: 0, minHeight: 10, minWidth: 55, fontSize: 10, marginLeft: 20 }} />
                <Tab label="Status" {...a11yProps(2)} style={{ margin: 0, padding: 0, minHeight: 10, minWidth: 55, fontSize: 10, marginLeft: 20 }} />
            </Tabs>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(`${classes.drawer} ${classes.drawerPaper}`, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [`${classes.drawerOpen} ${classes.paper}`]: open,
            [`${classes.drawerClose} ${classes.paper}`]: !open,
          }),
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
        <Divider />
        <List>
          {['Home', 'Courses', 'Search', 'Drafts'].map((menuName, index) => (
            <ListItem button key={menuName}>
              <ListItemIcon>
                {getMenuItems(menuName)}
              </ListItemIcon>
              <ListItemText primary={menuName} />
            </ListItem>
          ))}
        </List>
        </div>
      </Drawer>
      <div className={classes.paperAnchorLeft8}>
          {
              !open && (
                <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start" 
                style={{ marginTop: 300, marginLeft: 0, height: 70, width: 20, backgroundColor: '#d8d6d8', borderRadius: 0 }}
              >
                <ArrowForwardIos />
              </IconButton>
              )
          }
            {
              open && (
                <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerClose}
                edge="start" 
                style={{ marginTop: 300, marginLeft: 0, height: 70, width: 20, backgroundColor: '#d8d6d8', borderRadius: 0 }}
              >
                <ArrowBackIos />
              </IconButton>
              )
          }
      </div>
      <main className={classes.content} style={{ padding: 0, marginLeft: 11, marginTop: 10 }}>
        <div className={classes.toolbar} />
        <Tabs TabIndicatorProps={{style: {background:'#833589'}}} value={value} onChange={handleChange} aria-label="simple tabs example" style={{ minHeight: 24, paddingTop: 5 }}>
            <Tab label="List" {...a11yProps(0)} style={{ margin: 0, padding: 0, minHeight: 10, minWidth: 55, fontSize: 10 }} />
            <Tab label="Gantt" {...a11yProps(1)} style={{ margin: 0, padding: 0, minHeight: 10, minWidth: 55, fontSize: 10, marginLeft: 20 }} />
            <Tab label="Board" {...a11yProps(2)} style={{ margin: 0, padding: 0, minHeight: 10, minWidth: 55, fontSize: 10, marginLeft: 20 }} />
            <Tab label="Calendar" {...a11yProps(3)} style={{ margin: 0, padding: 0, minHeight: 10, minWidth: 55, fontSize: 10, marginLeft: 20 }} />
            <Tab label="Pivot" {...a11yProps(4)} style={{ margin: 0, padding: 0, minHeight: 10, minWidth: 55, fontSize: 10, marginLeft: 20 }} />
            <Tab label="Process" {...a11yProps(5)} style={{ margin: 0, padding: 0, minHeight: 10, minWidth: 55, fontSize: 10, marginLeft: 20 }} />
        </Tabs>
        <TabPanel value={value} index={0}>
            <Grid
                    container
                    spacing={2}
                    direction="row"
                    justify="flex-start"
                    alignItems="flex-start"
                >
                    {courseDetails && courseDetails.map(list => (
                        <Grid item xs={12} sm={6} md={4} key={courseDetails.indexOf(list)}>
                            <Card style={{backgroundColor: "#efededde"}}>
                                <CardHeader
                                    action={
                                    <IconButton aria-label="settings">
                                        <MoreHoriz />
                                    </IconButton>
                                    }
                                    title={list.type}
                                    titleTypographyProps={{variant:'subtitle2' }}
                                    style={{ margin: 0, paddingTop: 0, paddingRight: 25, paddingLeft: 25, paddingBottom: 0, textAlign: 'start' }}
                                />
                                <CardContent style={{ marginTop: 0, paddingTop: 0 }}>
                                    <CustomList listData={list.data} type={list.type} />
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
        </TabPanel>
        <TabPanel value={value} index={1} style={{ justifyContent: 'center', textAlign: 'center' }}>
            Coming Soon...
        </TabPanel>
        <TabPanel value={value} index={2}>
            Coming Soon...
        </TabPanel>
        <TabPanel value={value} index={3}>
            Coming Soon...
        </TabPanel>
        <TabPanel value={value} index={4}>
            Coming Soon...
        </TabPanel>
        <TabPanel value={value} index={5}>
            Coming Soon...
        </TabPanel>
      </main>
    </div>
  );
}