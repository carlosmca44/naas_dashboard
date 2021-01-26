import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Grid } from '@material-ui/core';
import { cardApps } from './cardApps';
import CardView from '../Cards Apps'
import DesktopBreakpoint from '../../Prueba_/Breackpoints/desktopBreakpoint'
import TabletBreakpoint from '../../Prueba_/Breackpoints/tabletBreakpoint'
import PhoneBreakpoint from '../../Prueba_/Breackpoints/phoneBreakpoint'
import CardDispApp from '../Cards Disp';
import { cardDisp } from './cardDisp';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    boxShadow:'none',
  },
  gridPort:{
    display:'flex',
    justifyContent:'center'
  },
  appBarD:{
    boxShadow:'none',
    backgroundColor:'white',
    margin:'auto auto',
    marginTop:'6%',
    position:'sticky',
    top:'9%',
  },
  appBarT:{
    boxShadow:'none',
    backgroundColor:'white',
    maxWidth:'60%',
    margin:'auto auto',
    marginTop:'10%',
    position:'sticky',
    top:'12%',
  },
  appBarP:{
    boxShadow:'none',
    backgroundColor:'white',
    maxWidth:'100%',
    margin:'auto auto',
    marginTop:'20%',
    position:'sticky',
    top:'10%',
  },
}));

export default function FullWidthTabs() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = index => {
    setValue(index);
  };

  return (
    <div className={classes.root}>
      <DesktopBreakpoint>
        <AppBar className={classes.appBarD} position="static" color="default">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
            aria-label="full width tabs example"
          >
            <Tab label="Aplicaciones" {...a11yProps(0)} />
            <Tab label="Disponibles" {...a11yProps(1)} />
            <Tab label="Usuarios" {...a11yProps(2)} />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
          <Grid
              className={classes.gridPort}
              container 
              direction={'row'}
              spacing={1}
              >
                  {
                    cardApps.map((key,value) => (
                      <Grid item>
                        <CardView appname={key.appname} image={key.images}/>
                      </Grid>
                    ))
                  }
            </Grid>
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
          <Grid
              className={classes.gridPort}
              container 
              direction={'column'}
              spacing={1}
              justify="flex-start"
              alignItems="stretch"
              >
                  {
                    cardDisp.map((key,value) => (
                      <Grid item>
                        <CardDispApp image={key.images} description={key.appdescription}/>
                      </Grid>
                    ))
                  }
            </Grid>
          </TabPanel>
          <TabPanel value={value} index={2} dir={theme.direction}>
            Item Three
          </TabPanel>
        </SwipeableViews>
      </DesktopBreakpoint>

      <TabletBreakpoint>
        <AppBar className={classes.appBarT} position="static" color="default">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
            aria-label="full width tabs example"
          >
            <Tab label="Aplicaciones" {...a11yProps(0)} />
            <Tab label="Disponibles" {...a11yProps(1)} />
            <Tab label="Usuarios" {...a11yProps(2)} />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
          <Grid
              className={classes.gridPort}
              container 
              direction={'row'}
              spacing={1}
              alignContent={'center'}
              >
                  {
                    cardApps.map((key,value) => (
                      <Grid item >
                        <CardView appname={key.appname} image={key.images}/>
                      </Grid>
                    ))
                  }
            </Grid>
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
          <Grid
              className={classes.gridPort}
              container 
              direction={'column'}
              spacing={1}
              justify="flex-start"
              alignItems="stretch"
              >
                  {
                    cardDisp.map((key,value) => (
                      <Grid item>
                        <CardDispApp direction={'row'} image={key.images} description={key.appdescription}/>
                      </Grid>
                    ))
                  }
            </Grid>
          </TabPanel>
          <TabPanel value={value} index={2} dir={theme.direction}>
            Item Three
          </TabPanel>
        </SwipeableViews>
      </TabletBreakpoint>

      <PhoneBreakpoint>
        <AppBar className={classes.appBarP} position="static" color="default">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
            aria-label="full width tabs example"
          >
            <Tab label="Aplicaciones" {...a11yProps(0)} />
            <Tab label="Disponibles" {...a11yProps(1)} />
            <Tab label="Usuarios" {...a11yProps(2)} />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
            <Grid
              className={classes.gridPort}
              container 
              direction={'row'}
              spacing={1}
              justify="center"
              alignItems="flex-start"
              >
                  {
                    cardApps.map((key,value) => (
                      <Grid item>
                        <CardView appname={key.appname} image={key.images}/>
                      </Grid>
                    ))
                  }
            </Grid>
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            <Grid
              className={classes.gridPort}
              container 
              direction={'column'}
              spacing={1}
              justify="center"
              alignItems="center"
              >
                  {
                    cardDisp.map((key,value) => (
                      <Grid item>
                        <CardDispApp direction={'column'} image={key.images} description={key.appdescription}/>
                      </Grid>
                    ))
                  }
            </Grid>
          </TabPanel>
          <TabPanel value={value} index={2} dir={theme.direction}>
            Item Three
          </TabPanel>
        </SwipeableViews>
      </PhoneBreakpoint>
    </div>
  );
}