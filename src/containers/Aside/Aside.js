import React, { Component} from 'react';
import Search from '../Search/Search';
import HotTag from '../HotTag/HotTag';

export default class AsideContainer extends Component{
    render(){
        return (
            <div style={{paddingLeft:'20px'}}>
                <Search/>
                <HotTag/>
            </div>
        );
    }
}