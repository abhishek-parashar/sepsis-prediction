import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
// import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
// import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { mainListItems, secondaryListItems } from './listItems';
// import Chart from './Chart';
// import Deposits from './Deposits';
import Orders from './Orders';
import Title from './Title';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(28, 0, 6),
  },  
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 140,
  },
}));

export default function Dashboard() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
          >
            <MenuIcon />
          </IconButton>
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>{mainListItems}</List>
      </Drawer>
      <main className={classes.content}>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textSecondry" gutterBottom>
              Hello Ankit
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Have a nice day
              Following are your details
            </Typography>
          </Container>
        </div>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            {/* Chart */}
            <Grid item xs={12} md={4} lg={4}>
              <Paper className={fixedHeightPaper}>
              <React.Fragment>
                <Title>Oxygen</Title>
                <Typography component="p" variant="h4">
                  89%
                </Typography>
                {/* <Typography color="textSecondary" className={classes.depositContext}>
                  on 15 March, 2019
                </Typography> */}
              </React.Fragment>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4} lg={4}>
              <Paper className={fixedHeightPaper}>
              <React.Fragment>
                <Title>Calories</Title>
                <Typography component="p" variant="h4">
                  2500
                </Typography>
                <Typography color="textSecondary" className={classes.depositContext}>
                  cal
                </Typography>
              </React.Fragment>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4} lg={4}>
              <Paper className={fixedHeightPaper}>
              <React.Fragment>
                <Title>Heart Rate</Title>
                <Typography component="p" variant="h4">
                  120 
                </Typography>
                <Typography color="textSecondary" className={classes.depositContext}>
                  bpm
                </Typography>
              </React.Fragment>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4} lg={4}>
              <Paper className={fixedHeightPaper}>
              <React.Fragment>
                <Title>Glucose</Title>
                <Typography component="p" variant="h4">
                  193
                </Typography>
                <Typography color="textSecondary" className={classes.depositContext}>
                  mg/dL
                </Typography>
              </React.Fragment>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4} lg={4}>
              <Paper className={fixedHeightPaper}>
              <React.Fragment>
                <Title>RESP</Title>
                <Typography component="p" variant="h4">
                  25
                </Typography>
                <Typography color="textSecondary" className={classes.depositContext}>
                  bpm
                </Typography>
              </React.Fragment>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4} lg={4}>
              <Paper className={fixedHeightPaper}>
              <React.Fragment>
                <Title>RESP</Title>
                <Typography component="p" variant="h4">
                  96.2
                </Typography>
                <Typography color="textSecondary" className={classes.depositContext}>
                  C
                </Typography>
              </React.Fragment>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4} lg={4}>
              <Paper className={fixedHeightPaper}>
              <React.Fragment>
                <Title>Platelets</Title>
                <Typography component="p" variant="h4">
                  317
                </Typography>
                <Typography color="textSecondary" className={classes.depositContext}>
                  count*10^3
                </Typography>
              </React.Fragment>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4} lg={4}>
              <Paper className={fixedHeightPaper}>
              <React.Fragment>
                <Title>Haemoglobin</Title>
                <Typography component="p" variant="h4">
                  12.5
                </Typography>
                <Typography color="textSecondary" className={classes.depositContext}>
                  g/dL
                </Typography>
              </React.Fragment>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4} lg={4}>
              <Paper className={fixedHeightPaper}>
              <React.Fragment>
                <Title>BUN</Title>
                <Typography component="p" variant="h4">
                  14
                </Typography>
                <Typography color="textSecondary" className={classes.depositContext}>
                  mg/dL
                </Typography>
              </React.Fragment>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </main>
    </div>
  );
}
