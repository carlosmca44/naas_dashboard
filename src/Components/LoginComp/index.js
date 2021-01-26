import { Button, Divider, Grid, Paper, TextField, Typography, withStyles } from '@material-ui/core'
import React, { Component } from 'react'

const styles = theme=>({
    root:{
        padding: "25px",
    },
    textFields:{
    },
    gridForm:{
        margin:'10px'
    },
    spacing:{
        margin: '10px 10px'
    },
})

class Login extends Component{
    render(){
        const {classes} = this.props
        return(
            <Paper className={classes.root}>
                <Grid container direction={'column'} spacing={2}>
                    <Grid item>
                        <Typography align={'center'}>
                            <h3>Welcome Boss</h3>
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Divider/>
                    </Grid>
                    
                    <Grid item>
                        
                        <TextField
                            className={classes.textFields}
                            placeholder="nombre"
                            type="text"
                            variant='outlined'
                        />
                    </Grid>

                    <Grid item>
                        <TextField
                            className={classes.textFields}
                            placeholder="contraseña"
                            type="password"
                            variant='outlined'
                        />
                        
                    </Grid>

                    <Grid item>
                        <a className={classes.spacing} href='/#'>Forgot Password?</a>
                    
                        <Button className={classes.spacing} href='/home'>Sign In</Button>
                    </Grid>

                </Grid>

                
            </Paper>
        )
    }
}

export default withStyles(styles)(Login)