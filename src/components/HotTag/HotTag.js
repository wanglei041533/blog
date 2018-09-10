import React,{ Component } from 'react';
import { Tag } from "antd";

export default class HotTag extends Component{
    render(){
        return <Tag color={this.props.bg_color} style={{marginBottom:'10px',fontSize:'14px'}}>{this.props.tag_name}({this.props.count})</Tag>;
    }
}