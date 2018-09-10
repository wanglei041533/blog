import React, { Component } from 'react';
import HeaderNav from './common/HeadNav/HeadNav';
import Article from './containers/ArticleList/ArticleList';
import './App.css';

class App extends Component {
	render(){
		return(
			<div className="App">
				<HeaderNav/>
				<main>
					<Article/>
				</main>
			</div>
		)
	}
}

export default App;
