import React, { Component } from 'react';
import AsideList from "../components/AsideList";
import axios from 'axios';

export default class NewArticleContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            success: false
        }
    }
    componentWillMount() {
        axios
            .get(
                "http://mock.eolinker.com/s2htiv6349dba0f1958472d8fb0a7b1c52857e833ca5343?uri=hotview"
            )
            .then(res => {
                this.setState({
                    hotView: res.data.data,
                    success: true
                });
            });
    }
    render() {
        return !this.state.success ? "loading" : <AsideList data={this.state.hotView} title="最新文章" />;
    }
}



