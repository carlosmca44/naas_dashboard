import React from 'react';
import Breakpoints from './index'

export default function DesktopBreakpoint(props) {
    return (
        <Breakpoints name='desktop'>
            {props.children}
        </Breakpoints>
    );
};