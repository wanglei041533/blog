import React, { Component } from 'react';
import axios from 'axios';
import ArticleList from '../../components/ArticleList/ArticleList';

export default class Article extends Component{
    constructor(props){
        super(props);
        this.state = {};
    }
    componentWillMount() {
        axios.get("http://mock.eolinker.com/s2htiv6349dba0f1958472d8fb0a7b1c52857e833ca5343?uri=article").then((res) => {
            console.log(res.data.article);
            this.setState({
                article_list:res.data.article
            })
        });
    }
    render(){
        return (
            <div>
                <div>11</div>
            </div>
        )
    }
}