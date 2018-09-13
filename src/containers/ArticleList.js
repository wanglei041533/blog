import React, { Component } from 'react';
import axios from 'axios';
import ArticleList from '../components/ArticleList';

export default class Article extends Component{
    constructor(props){
        super(props);
        this.state = {
            arr:[1,2,3,4]
        };
    }
    componentWillMount() {
        axios.get("http://mock.eolinker.com/s2htiv6349dba0f1958472d8fb0a7b1c52857e833ca5343?uri=article").then((res) => {
            this.setState({
                article:res.data.article
            })
        });
    }
    render(){
        console.log(this.state.article);
        return !this.state.article ? "" : <div>
            {this.state.article.map((item, index) => {
                return <ArticleList key={index} title={item.title} time={item.time} author={item.author} brief={item.brief} tag={item.tag} img={item.img} view={item.view} classify={item.classify} />;
            })}
          </div>;
    }
}