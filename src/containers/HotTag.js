import React,{ Component } from 'react';
import HotTag from '../components/HotTag';
import axios from 'axios';

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
        return !this.state.success?'loading':<HotTag data={this.state.hotTag} title='热门标签'/>    
    }
}


