import React,{ Component } from 'react';
import { Tag, Card } from "antd";

export default class HotTag extends Component{
    render(){
        return (
            <Card bordered={false} style={{ margin: "20px 0" }}>
                <h3 style={{ fontSize: "16px", fontWeight: "bold" }}>
                {this.props.title}
                </h3>
                {
                    this.props.data.map((item,index)=>{
                        return (
                            <Tag 
                                key={index} 
                                color={item.bg_color} 
                                style={{ marginBottom: "10px", fontSize: "14px" }}
                            >
                                {item.tag_name}({item.count})
                            </Tag>
                    )})
                }
            </Card>
        );
    }
}