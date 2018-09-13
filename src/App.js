import React, { Component } from 'react';
import HeaderNav from './common/HeadNav';
import Article from './containers/ArticleList';
import Aside from './containers/Aside';
import Web from './containers/Web';
import Php from "./containers/Php";
import ScrollTop from './components/ScrollTop';
import { Row, Col } from 'antd';
import { BrowserRouter, Route} from 'react-router-dom';
import './App.css';

class App extends Component {
	render(){
		return (
			<BrowserRouter>
				<div className="App">
					<HeaderNav/>
					<main>
						<Row>
						<Col span={18}>
							<Route exact path="/" component={Article}/>
							<Route path="/web" component={Web} />
							<Route path="/php" component={Php} />
						</Col>
						<Col span={6}>
							<Aside />
						</Col>
						</Row>
					</main>
					<ScrollTop />
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
