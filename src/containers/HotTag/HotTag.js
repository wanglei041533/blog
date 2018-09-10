import React,{ Component } from 'react';
import HotTag from '../../components/HotTag/HotTag';
import axios from 'axios';
import { Card } from 'antd';

export default class HotTagContainer extends Component{ 
    constructor(props){
        super(props)
        this.state = {
            success : false
        }
    }
    componentWillMount(){
        axios.get("http://mock.eolinker.com/s2htiv6349dba0f1958472d8fb0a7b1c52857e833ca5343?uri=hottag").then((res)=>{
            console.log(res)
            this.setState({
                hotTag:res.data.hot_tag,
                success:true
            })
        });
    }
    render(){
        return !this.state.success?'loading':
                <Card bordered={false} style={{ margin: '20px 0' }}>
                    <h3>热门标签</h3>
                    {this.state.hotTag.map((item,index)=>{
                        return <HotTag
                                    key = {index}
                                    bg_color = {item.bg_color}
                                    tag_name = {item.tag_name}
                                    count = {item.count}
                                />
                    })}
                </Card>
    }
}


