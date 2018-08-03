import React, {PureComponent} from 'react';
import {themeClass}           from 'emeth';

export default class SuperComponent extends PureComponent {


    render() {
        return (<div className={tc('container')}>
            <h2 className={tc('header')}>Super Component</h2>
            <span>To the rescue!</span>
        </div>)
    }
}
const tc = themeClass(SuperComponent);