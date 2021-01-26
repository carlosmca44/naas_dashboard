import { Grid, withStyles } from '@material-ui/core';
import React, { Component } from 'react';
import LoginComp from '../../Components/LoginComp';
import NavBar from '../../Components/NavBar';
import DesktopBreakpoint from '../../Prueba_/Breackpoints/desktopBreakpoint';
import TabletBreakpoint from '../../Prueba_/Breackpoints/tabletBreakpoint'
import PhoneBreakpoint from '../../Prueba_/Breackpoints/phoneBreakpoint'

const styles = theme=>({

    //Login
    loginD:{
      marginTop: '10%',
      display:"flex",
      justifyContent:"center",
    },
    loginT:{
      display:"flex",
      justifyContent:"center",
      marginTop: '15%'
    },
    loginP:{
      display:"flex",
      justifyContent:"center",
      marginTop: '30%'
    },
    
  });

class LoginSection extends Component{
    render(){
        const {classes} = this.props
        return(
            <div>
                <NavBar/>
                <DesktopBreakpoint>
                    <Grid className={classes.loginD} container dorection={'column'} justify={'center'} alignItems={'center'}>
                        <Grid item>
                            <LoginComp/>
                        </Grid>
                    </Grid>
                </DesktopBreakpoint>

                <TabletBreakpoint>
                    <Grid className={classes.loginT} container dorection={'column'} justify={'center'} alignItems={'center'}>
                        <Grid item>
                            <LoginComp/>
                        </Grid>
                    </Grid>
                </TabletBreakpoint>

                <PhoneBreakpoint>
                    <Grid className={classes.loginP} container dorection={'column'} justify={'center'} alignItems={'center'}>
                        <Grid item>
                            <LoginComp/>
                        </Grid>
                    </Grid>
                </PhoneBreakpoint>

            </div>
        )
    }
}

export default withStyles(styles)(LoginSection)