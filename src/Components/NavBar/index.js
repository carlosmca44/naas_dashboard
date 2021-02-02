import { Typography, withStyles, AppBar, Toolbar } from '@material-ui/core'
import React, { Component } from 'react'

const styles = theme=>({
    root:{
        height: "100px",
        boxShadow:'none',
        backgroundColor:'white',
    },
    menu:{
      position:'relative',
      marginLeft:'auto'
    }
})

class Navbar extends Component{
    render(){
        const {classes} = this.props
        return(
            <AppBar className={classes.root}>
              <Toolbar>
                <Typography color="primary">
                  <h1>NaaS</h1>
                </Typography>
                <div className={classes.menu}>
                  {this.props.menuDrawer}
                </div>
              </Toolbar>
            </AppBar>
        )
    }
}

export default withStyles(styles)(Navbar)