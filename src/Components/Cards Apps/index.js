import { Box, Card, CardMedia, Grid, Typography, withStyles } from '@material-ui/core'
import React, {Component} from 'react'
import CardButton from '../CardButton'

const styles = theme=>({
    root:{
        maxWidth:400,
        borderRadius:15,
        marginTop:15,
        minWidth:270,
        padding:10
    },
    media:{
        width:'90%',
        height:280,
        borderRadius:20,
        marginTop:25,
        margin:'auto auto'
    },
    content:{
        margin:'5px'
    },
    appname:{
        backgroundColor:theme.palette.secondary.main,
        borderRadius:7,
        marginTop:'-20px',
        marginLeft:10,
        position:'absolute',
        color:'#fff'

    }
})

class CardView extends Component{
    render(){
        const {classes} = this.props
        return(
            <Card className={classes.root}>
                <Box className={classes.appname}>
                    <Typography className={classes.content} variant={"h6"}>{this.props.appname}</Typography>
                </Box>

                <Grid container spacing={1} direction='column' justify='center' >
                    
        
                    <Grid item>
                        <CardMedia
                            className={classes.media}
                            image={this.props.image}
                            title='App'
                        />
                    </Grid>

                    <Grid style={{margin:'auto auto'}} container direction='row' spacing={1} justify='center' alignItems='center' lg={12}>

                        <Grid item lg={6} md={6} sm={12} xs={12}>
                            <CardButton text='Modificar'/>
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12}>
                            <CardButton text='Eliminar'/>
                        </Grid>

                    </Grid>

                </Grid>
            </Card>
        )
    }
}

export default withStyles(styles)(CardView)