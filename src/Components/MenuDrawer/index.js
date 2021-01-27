import React, {Component} from "react";
import {AccountBox} from "@material-ui/icons";
import {withStyles, IconButton, Drawer, Tooltip, Button} from "@material-ui/core";
import blue from '@material-ui/core/colors/blue'
import { red } from "@material-ui/core/colors";

const styles = theme =>({
    links:{
        textDecoration:'none',
        color:'inherit',
        '&:hover':{
            textDecoration: 'none'
        }
    },
    menu:{
        backgroundColor:'transparent',
        marginLeft:'auto',
        marginRight:'1%',
        marginTop:'15px',
        marginBottom:'15px'
    },
});

class MenuDrawer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
        };

        this.toggleDrawerState = this.toggleDrawerState.bind(this);
    }

    toggleDrawerState(e) {
        this.setState({isOpen: !this.state.isOpen});
    }

    render() {
        const {classes}=this.props;
        return(
            <div>
                <Tooltip title={'Usuario'}>
                    <IconButton
                        onClick={this.toggleDrawerState}
                        aria-controls={"drawer"}
                        edge={"false"}
                    >
                        <AccountBox/>
                    </IconButton>
                </Tooltip>
                <Drawer
                    anchor={"top"}
                    open={this.state.isOpen}
                    id={"drawer"}
                    onClose={this.toggleDrawerState}>

                        <div className={classes.menu}>

                            <Button color='primary'>Usuario</Button>
                            <Button color={red[500]}>Salir</Button>

                        </div>

                </Drawer>
            </div>
        )
    }
}

export default withStyles(styles) (MenuDrawer);