import React from 'react';
import Breakpoints from './index'

export default function PhoneBreakpoint(props) {
    return (
        <Breakpoints name='phone'>
            {props.children}
        </Breakpoints>
    );
}