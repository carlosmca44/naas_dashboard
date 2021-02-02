import { Card, CardMedia, Grid, Typography, withStyles } from '@material-ui/core'
import React, {Component} from 'react'
import CardButton from '../CardButton'

const styles = theme=>({
    root:{
        width:'100%',
        heigth:'300px',
        borderRadius:15
    },
    media:{
        width:'90%',
        height:'200px',
        margin:'auto auto',
        marginTop:5,
        marginBottom:5,
        borderRadius:10
    },
    content:{
        margin:'5px',
        padding:'10px',
        border:'1px black solid',
        borderRadius:15
    },
    buttons:{
        padding:'1%',
    }
})

class CardDispApp extends Component{
    render(){
        const {classes} = this.props
        return(
            <Card className={classes.root}>

                <Grid
                    container
                    direction='row'
                    spacing={0}
                    justify='center'
                    alignItems='center'
                >
                    <Grid item sm={12} md={2} lg={3}>
                        <CardMedia
                            className={classes.media}
                            image={this.props.image}
                            title='App'
                        />
                    </Grid>

                    <Grid item sm={12} md={8} lg={6}>
                        <Typography className={classes.content} align='justify'>{this.props.description}</Typography>
                    </Grid>

                    <Grid className={classes.buttons} container sm={12} md={2} lg={3} spacing={1}>
                        <Grid item lg={6} sm={12} xs={12}>
                            <CardButton text='Instalar'/>
                        </Grid>
                        <Grid item lg={6} sm={12} xs={12}>
                            <CardButton text='Info+'/>
                        </Grid>
                    </Grid>

                </Grid>
               
            </Card>
        )
    }
}

export default withStyles(styles)(CardDispApp)