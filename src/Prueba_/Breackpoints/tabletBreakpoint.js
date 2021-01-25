import React from 'react';
import Breakpoints from './index'

export default function TabletBreakpoint(props) {
    return (
        <Breakpoints name='tablet'>
            {props.children}
        </Breakpoints>
    );
}