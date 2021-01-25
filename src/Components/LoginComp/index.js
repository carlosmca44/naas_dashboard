import { Button, Divider, Grid, Paper, TextField, Typography, withStyles } from '@material-ui/core'
import React, { Component } from 'react'

const styles = theme=>({
    root:{
        padding: "15px",
        width: "max-content"
    },
    textFields:{
        maxWidth: "200px",
        heigth: "50px"
    },
    gridForm:{
        margin:'10px'
    },
    spacing:{
        margin: '10px 10px'
    }
})

class Login extends Component{
    render(){
        const {classes} = this.props
        return(
            <Paper className={classes.root}>
                <Typography align={'center'}>
                    <h4>Welcome Boss</h4>
                </Typography>

                <Divider/>

                <Grid className={classes.gridForm} container direction={"column"} spacing={3}>
                    <Grid item>
                        <TextField
                            className={classes.textFields}
                            placeholder="nombre"
                            type="text"
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            className={classes.textFields}
                            placeholder="contraseña"
                            type="password"
                        />
                    </Grid>
                </Grid>
                
                <a className={classes.spacing} href='#'>Forgot Password?</a>
                
                <Button className={classes.spacing}>Sign In</Button>
            </Paper>
        )
    }
}

export default withStyles(styles)(Login)