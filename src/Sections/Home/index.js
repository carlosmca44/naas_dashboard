import { withStyles } from '@material-ui/core';
import React, { Component } from 'react';
import MenuDrawer from '../../Components/MenuDrawer';
import NavBar from '../../Components/NavBar';
import FullWidthTabs from '../../Components/Tab';
import DesktopBreakpoint from '../../Prueba_/Breackpoints/desktopBreakpoint';
import PhoneBreakpoint from '../../Prueba_/Breackpoints/phoneBreakpoint';
import TabletBreakpoint from '../../Prueba_/Breackpoints/tabletBreakpoint';

const styles = theme=>({
    root:{

    },
    tabD:{
        maxWidth:'70%',
        margin:'auto auto',
    },
    tabT:{      
    },
    tabP:{
        
    }
})

class HomeTab extends Component{
    render(){
        const {classes} = this.props
        return(
            <div>
                <DesktopBreakpoint>
                    <NavBar menuDrawer={<MenuDrawer/>}/>
                    <div className={classes.tabD}>
                        <FullWidthTabs/>
                    </div>
                </DesktopBreakpoint>

                <TabletBreakpoint>
                    <NavBar menuDrawer={<MenuDrawer/>}/>
                    <div className={classes.tabT}>
                        <FullWidthTabs/>
                    </div>
                </TabletBreakpoint>

                <PhoneBreakpoint>
                    <NavBar menuDrawer={<MenuDrawer/>}/>
                    <div className={classes.tabP}>
                        <FullWidthTabs/>
                    </div>
                </PhoneBreakpoint>
            </div>
        )
    }
}

export default withStyles(styles) (HomeTab)