import React, {PureComponent}                  from 'react';
import {SuperComponent, SuperComponentNoEmeth} from '../src';
import './theme';

export default class App extends PureComponent {

    render() {
        return <div>
            <h2>This is an app</h2>
            <hr/>
            <h2>This is a component with emeth</h2>
            <SuperComponent/>
            <h2>This is the component without emeth</h2>
            <SuperComponentNoEmeth/>
        </div>
    }
}
