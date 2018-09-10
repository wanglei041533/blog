import React, { Component } from 'react';
import HeaderNav from './common/HeadNav/HeadNav';
import Article from './containers/ArticleList/ArticleList';
import Aside from './containers/Aside/Aside';
import ScrollTop from './components/ScrollTop/ScrollTop';
import { Row, Col } from 'antd';
import './App.css';

class App extends Component {
	render(){
		return(
			<div className="App">
				<HeaderNav/>
				<main>
					<Row>
						<Col span={18}>
							<Article/>
						</Col>
						<Col span={6}>
							<Aside/>
						</Col>
					</Row>
					
				</main>
				<ScrollTop/>
			</div>
		)
	}
}

export default App;
