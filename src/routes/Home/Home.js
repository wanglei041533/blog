import React,{ Component } from 'react';
import axios from 'axios';

export default class Home extends Component{
    constructor(props){
        super(props);
        axios.get("http://mock.eolinker.com/s2htiv6349dba0f1958472d8fb0a7b1c52857e833ca5343?uri=blog").then(function(res){
            console.log(res);
        })
    }
    render(){
        return(
            <div id="Home">
                Homes
            </div>
        )
    }
}