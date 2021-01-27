import { Button, Card, CardMedia, Grid, Typography, withStyles } from '@material-ui/core'
import React, {Component} from 'react'

const styles = theme=>({
    root:{
        width:'100%',
        heigth:'300px',
    },
    media:{
        width:'100%',
        height:'200px'
    },
    content:{
        margin:'5px',
        padding:'10px'
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
                    spacing={2}
                    justify='center'
                    alignItems='center'
                >
                    <Grid item sm={12} md={2} lg={1}>
                        <CardMedia
                            className={classes.media}
                            image={this.props.image}
                            title='App'
                        />
                    </Grid>

                    <Grid item sm={12} md={8} lg={8}>
                        <Typography className={classes.content} align='justify'>{this.props.description}</Typography>
                    </Grid>

                    <Grid item sm={12} md={2} lg={1}>
                        <Button className={classes.content} color={'secondary'}>Instalar</Button>
                        <Button className={classes.content} color={'secondary'}>Info+</Button>
                    </Grid>

                </Grid>
               
            </Card>
        )
    }
}

export default withStyles(styles)(CardDispApp)