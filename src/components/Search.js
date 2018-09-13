import React,{ Component } from 'react';
import { Input, Card } from 'antd';
const Search = Input.Search;

export default class SearchComponent extends Component{

    render(){
        return (
            <Card bordered={false} style={{margin:'20px 0'}}>
                <Search placeholder="输入内容进行搜索" onSearch={value => console.log(value)} enterButton />
            </Card>
        );
    }
}