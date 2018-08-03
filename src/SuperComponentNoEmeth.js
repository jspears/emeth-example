import React, {PureComponent} from 'react';
import Style from './SuperComponent.cssm';
console.log(JSON.stringify(Style,null,2));
export default class SuperComponent extends PureComponent {


    render() {
        return (<div className={Style.container}>
            <h2 className={Style.header}>Super Component</h2>
            <span>To the rescue!</span>
        </div>)
    }
}