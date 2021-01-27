import { Button, Card, CardMedia, Typography, withStyles } from '@material-ui/core'
import React, {Component} from 'react'

const styles = theme=>({
    root:{
        width:'300px',
        heigth:'300px'
    },
    media:{
        width:'100%',
        height:'200px'
    },
    content:{
        margin:'5px'
    }
})

class CardView extends Component{
    render(){
        const {classes} = this.props
        return(
            <Card className={classes.root}>
                
                    <Typography className={classes.content} variant={"h6"}>{this.props.appname}</Typography>
        
                <CardMedia
                    className={classes.media}
                    image={this.props.image}
                    title='App'
                />
                
                    <Button className={classes.content} color={'secondary'}>Modificar</Button>
                    <Button className={classes.content} color={'secondary'}>Eliminar</Button>
               
            </Card>
        )
    }
}

export default withStyles(styles)(CardView)