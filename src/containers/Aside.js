import React, { Component} from 'react';
import NewArticle from './NewArticle';
import HotTag from './HotTag';
import Search from './Search';
import HotView from './HotView';
import NewComment from "./NewComment";

export default class AsideContainer extends Component{
    render(){
        return (
            <div style={{ paddingLeft: "20px" }}>
                <Search />
                <HotTag />
                <HotView />
                <NewArticle />
                <NewComment />
            </div>
        );
    }
}