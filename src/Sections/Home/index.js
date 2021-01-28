import { withStyles } from '@material-ui/core';
import React, { Component } from 'react';
import MenuDrawer from '../../Components/MenuDrawer';
import NavBar from '../../Components/NavBar';
import FullWidthTabs from '../../Components/Tab';

const styles = theme=>({
    tabD:{
        [theme.breakpoints.up('1025')]:{
            maxWidth:'70%',
            margin:'auto auto',
        }
    }
})

class HomeTab extends Component{
    render(){
        const {classes} = this.props
        return(
            <div>
                    <NavBar menuDrawer={<MenuDrawer/>}/>
                    <div className={classes.tabD}>
                        <FullWidthTabs/>
                    </div>
            </div>
        )
    }
}

export default withStyles(styles) (HomeTab)