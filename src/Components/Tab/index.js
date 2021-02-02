import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme, AppBar, Tab, Tabs, Typography, Box, Grid } from '@material-ui/core';
import { cardApps } from './cardApps';
import CardView from '../Cards Apps'
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
  swiparea:{
    margin:'10% 10%',
    marginTop:'1%'
  },
  gridPort:{
    display:'flex',
    justifyContent:'center'
  },
  appBar:{
    boxShadow:'none',
    backgroundColor:'white',
    borderTop:'1px black solid',
    borderBottom:'1px black solid',

    [theme.breakpoints.up('1025')]:{
      marginTop:'6%',
      position:'sticky',
      top:'9%',
    },
    [theme.breakpoints.between('768','1025')]:{
      marginTop:'10%',
      position:'sticky',
      top:'12%',
    },
    [theme.breakpoints.down('768')]:{
      maxWidth:'100%',
      marginTop:'20%',
      position:'sticky',
      top:'10%',
    }
  },
  tab:{
    
  }
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
        <AppBar className={classes.appBar} position="static" color="default">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant='standard'
            aria-label="full width tabs example"
          >
            <Tab label="Aplicaciones" {...a11yProps(0)} />
            <Tab label="Disponibles" {...a11yProps(1)} />
            <Tab label="Usuarios" {...a11yProps(2)} />
          </Tabs>
        </AppBar>
        <SwipeableViews
          className={classes.swiparea}
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
          <Grid
              className={classes.gridPort}
              container 
              direction={'row'}
              spacing={3}
              >
                  {
                    cardApps.map((key,value) => (
                      <Grid item lg={4} md={6}>
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

    </div>
  );
}