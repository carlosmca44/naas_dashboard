import { Grid, withStyles } from '@material-ui/core';
import React, { Component } from 'react';
import LoginComp from '../../Components/LoginComp';
import NavBar from '../../Components/NavBar';

const styles = theme=>({
    login:{
        display:"flex",
        justifyContent:"center",

        [theme.breakpoints.up('1025')]:{
            marginTop: '10%',
        },
        [theme.breakpoints.between('768','1025')]:{
            marginTop: '15%'
        },
        [theme.breakpoints.down('768')]:{
            marginTop: '30%'
        },
    }    
  });

class LoginSection extends Component{
    render(){
        const {classes} = this.props
        return(
            <div>
                <NavBar/>
                    <Grid className={classes.login} container dorection={'column'} justify={'center'} alignItems={'center'}>
                        <Grid item>
                            <LoginComp/>
                        </Grid>
                    </Grid>

            </div>
        )
    }
}

export default withStyles(styles)(LoginSection)