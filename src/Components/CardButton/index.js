import { Fab, withStyles } from '@material-ui/core'
import React, {Component} from 'react'

const styles = theme=>({
    root:{
        color:'#FFFFFF',
        backgroundColor:theme.palette.secondary.main,
        border:'1px black solid',
        boxShadow:'none',
        height:'25px',
        width:'100%'
    }
})

class CardButton extends Component{
    render(){
        const {classes} = this.props
        return(
            <Fab className={classes.root} variant='extended'>
                {this.props.text}
            </Fab>
        )
    }
}

export default withStyles(styles)(CardButton)