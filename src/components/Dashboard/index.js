import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import {
    Home,
    Search,
    PermMedia,
    Assignment,
    MoreHoriz,
    Assessment,
    FindInPage,
    TrackChanges,
    ArrowBackIos,
    DeveloperBoard,
    ArrowForwardIos,
    RadioButtonChecked
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
import logo from '../../assets/byjusLogo.PNG';
import malePP from '../../assets/malePP.png';
import CustomList from '../../CommonComponents/List';

const drawerWidth = 180;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  paper: {
    background: "#833589",
    borderRight: 'none'
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
    // [theme.breakpoints.up('sm')]: {
    //   width: theme.spacing(9) + 1,
    // },
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
      id: `scrollable-force-tab-${index}`,
      'aria-controls': `scrollable-force-tabpanel-${index}`,
    };
}

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`scrollable-force-tabpanel-${index}`}
        aria-labelledby={`scrollable-force-tab-${index}`}
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
  const [open, setOpen] = useState(false);
  const [mainTabValue, setMainTabValue] = useState(0);
  const [subTabValue, setSubTabValue] = useState(2);
  const [tabsWidth, setTabsWidth] = useState(window.innerWidth + 'px')
  const [selected, setSelected] = useState(2)

  useEffect(() => {
    console.log(courseDetails)
  }, [courseDetails]);


  useEffect(() => {
    window.addEventListener("resize", updateTabsWidth);
    return () => window.removeEventListener("resize", updateTabsWidth);
  });

  const updateTabsWidth = () => {
    setTabsWidth(window.innerWidth);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleChange = (event, newValue) => {
    setSubTabValue(newValue)
  };

  const getMenuItems = (menuName, index) => {
    if (menuName === 'Home') {
        return <Home style={selected === index ? {fill: "#833589"} : {fill : "#fff"}}/>
    } else if (menuName === 'Search') {
        return <FindInPage style={selected === index ? {fill: "#833589"} : {fill : "#fff"}}/>
    } else if (menuName === 'Courses') {
        return <DeveloperBoard style={selected === index ? {fill: "#833589"} : {fill : "#fff"}}/>
    } else if (menuName === 'Assignment') {
        return <Assignment style={selected === index ? {fill: "#833589"} : {fill : "#fff"}}/>
    } else if (menuName === 'Assessment') {
        return <Assessment style={selected === index ? {fill: "#833589"} : {fill : "#fff"}}/>
    } else if (menuName === 'Share') {
      return <PermMedia style={selected === index ? {fill: "#833589"} : {fill : "#fff"}}/>
    } else if (menuName === 'Track') {
      return <TrackChanges style={selected === index ? {fill: "#833589"} : {fill : "#fff"}}/>
    }
  }

  const updateSelected = (index) => {
    console.log(index)
    setSelected(index);
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
        <Toolbar style={{ padding: 10, alignItems: 'inherit', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <img src={logo} alt="logo" className={classes.logo} style={{ marginLeft: -5 }} />
            <div style={{ flexDirection: 'row', textAlign: 'start' }}>
              <Typography style={{ fontWeight: 600, marginLeft: 40 }} variant="subtitle1" noWrap>
                  CBSE: Grade 5 Maths - Algebra
              </Typography>
              <Tabs variant="scrollable" scrollButtons="on" inkBarStyle={{background: 'blue'}} TabIndicatorProps={{style: {background:'#833589'}}} value={mainTabValue} aria-label="scrollable force tabs example" style={ tabsWidth <= 760 || window.innerWidth <= 524 ? { minHeight: 24, paddingTop: 5, width: 150 } : { minHeight: 24, paddingTop: 5, width: 475 }}>
                  <Tab label="Task" {...a11yProps(0)} style={{ margin: 0, padding: 0, minHeight: 10, minWidth: 55, fontSize: 10, color: '#000', fontWeight: 'bold' }} />
                  <Tab label="Conversation" {...a11yProps(1)} style={{ margin: 0, padding: 0, minHeight: 10, minWidth: 55, fontSize: 10, marginLeft: 20 }} />
                  <Tab label="Files" {...a11yProps(2)} style={{ margin: 0, padding: 0, minHeight: 10, minWidth: 55, fontSize: 10, marginLeft: 20 }} />
                  <Tab label="Resources" {...a11yProps(2)} style={{ margin: 0, padding: 0, minHeight: 10, minWidth: 55, fontSize: 10, marginLeft: 20 }} />
                  <Tab label="Status" {...a11yProps(2)} style={{ margin: 0, padding: 0, minHeight: 10, minWidth: 55, fontSize: 10, marginLeft: 20 }} />
              </Tabs>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Search style={{fill: "#833589"}}/>
            <RadioButtonChecked style={{fill: "#833589", marginLeft: 20}}/>
            <img src={malePP} alt="logo" className={classes.logo} style={{ width: 20, height: 20, marginLeft: 20 }} />
            <text style={{ marginLeft: 5 }}>Amit Kumar</text>
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
          {['Home', 'Search', 'Courses', 'Assignment', 'Share', 'Track', 'Assessment'].map((menuName, index) => (
            <ListItem button key={menuName} onClick={() => updateSelected(index)} selected={selected === index} style={ selected === index ? { backgroundColor: '#fff', borderTopLeftRadius: 5, borderBottomLeftRadius: 5, padding: 15} : {padding: 15}}>
              <ListItemIcon>
                {getMenuItems(menuName, index)}
              </ListItemIcon>
              <ListItemText primary={menuName} style={ selected === index ? { color: '#000' } : { color: '#fff' } } />
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
                style={{ marginTop: 300, marginLeft: 0, height: 70, width: 20, backgroundColor: '#d8d6d8', borderRadius: 5 }}
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
        <Tabs scrollable={true} scrollButtons="on" TabIndicatorProps={{style: {background:'#833589'}}} value={subTabValue} onChange={handleChange} aria-label="simple tabs example" style={{ minHeight: 24, paddingTop: 15 }}>
            <Tab label="List" {...a11yProps(0)} style={subTabValue === 0 ? { color: '#000', fontWeight: 'bold', margin: 0, padding: 0, minHeight: 10, minWidth: 55, fontSize: 10 } : { margin: 0, padding: 0, minHeight: 10, minWidth: 55, fontSize: 10 }} />
            <Tab label="Gantt" {...a11yProps(1)} style={subTabValue === 1 ? { color: '#000', fontWeight: 'bold', margin: 0, padding: 0, minHeight: 10, minWidth: 55, fontSize: 10, marginLeft: 20 } : { margin: 0, padding: 0, minHeight: 10, minWidth: 55, fontSize: 10, marginLeft: 20 }} />
            <Tab label="Board" {...a11yProps(2)} style={subTabValue === 2 ? { color: '#000', fontWeight: 'bold', margin: 0, padding: 0, minHeight: 10, minWidth: 55, fontSize: 10, marginLeft: 20 } : { margin: 0, padding: 0, minHeight: 10, minWidth: 55, fontSize: 10, marginLeft: 20 }} />
            <Tab label="Calendar" {...a11yProps(3)} style={subTabValue === 3 ? { color: '#000', fontWeight: 'bold', margin: 0, padding: 0, minHeight: 10, minWidth: 55, fontSize: 10, marginLeft: 20 } : { margin: 0, padding: 0, minHeight: 10, minWidth: 55, fontSize: 10, marginLeft: 20 }} />
            <Tab label="Pivot" {...a11yProps(4)} style={subTabValue === 4 ? { color: '#000', fontWeight: 'bold', margin: 0, padding: 0, minHeight: 10, minWidth: 55, fontSize: 10, marginLeft: 20 } : { margin: 0, padding: 0, minHeight: 10, minWidth: 55, fontSize: 10, marginLeft: 20 }} />
            <Tab label="Process" {...a11yProps(5)} style={subTabValue === 5 ? { color: '#000', fontWeight: 'bold', margin: 0, padding: 0, minHeight: 10, minWidth: 55, fontSize: 10, marginLeft: 20 } : { margin: 0, padding: 0, minHeight: 10, minWidth: 55, fontSize: 10, marginLeft: 20 }} />
        </Tabs>
        <TabPanel value={subTabValue} index={0}>
            Coming Soon...
        </TabPanel>
        <TabPanel value={subTabValue} index={1} style={{ justifyContent: 'center', textAlign: 'center' }}>
            Coming Soon...
        </TabPanel>
        <TabPanel value={subTabValue} index={2}>
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
        <TabPanel value={subTabValue} index={3}>
            Coming Soon...
        </TabPanel>
        <TabPanel value={subTabValue} index={4}>
            Coming Soon...
        </TabPanel>
        <TabPanel value={subTabValue} index={5}>
            Coming Soon...
        </TabPanel>
      </main>
    </div>
  );
}