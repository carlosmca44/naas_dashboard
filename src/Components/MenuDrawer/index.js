import React, {Component} from "react";
import {AccountBox} from "@material-ui/icons";
import {withStyles, IconButton, Drawer, Tooltip, ButtonGroup, Button} from "@material-ui/core";

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
        margin:'auto auto',
        marginTop:'15px',
        marginBottom:'15px'
    }
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
            <div className="positionMenu">
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

                            <Button>Usuario</Button>
                            <Button>Salir</Button>

                        </div>

                </Drawer>
            </div>
        )
    }
}

export default withStyles(styles) (MenuDrawer);