import { withStyles } from '@material-ui/core';
import React, { Component } from 'react';
import DesktopBreakpoint from '../../Prueba_/Breackpoints/desktopBreakpoint';
import PhoneBreakpoint from '../../Prueba_/Breackpoints/phoneBreakpoint';
import TabletBreakpoint from '../../Prueba_/Breackpoints/tabletBreakpoint';
import LoginComp from '../../Components/LoginComp';
import Navbar from '../../Components/NavBar';

const styles = theme=>({

    //Login
    loginD:{
      display:"flex",
      justifyContent:"center",
      marginTop: '10%'
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
                <DesktopBreakpoint>
                    <Navbar/>
                    <div className={classes.loginD}>
                        <LoginComp/>
                    </div>
                </DesktopBreakpoint>

                <TabletBreakpoint>
                    <Navbar/>
                    <div className={classes.loginT}>

                    <LoginComp/>

                    </div>
                </TabletBreakpoint>

                <PhoneBreakpoint>
                    <Navbar/>
                    <div className={classes.loginP}>

                    <LoginComp/>

                    </div>
                </PhoneBreakpoint>

            </div>
        )
    }
}

export default withStyles(styles)(LoginSection)