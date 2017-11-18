import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Header from './Header';
import Landing from './Landing';

class App extends Component {
	componentDidMount() {
		this.props.fetchUser();
	}
	render() {
		return (
			<div>
				<BrowserRouter>
					<div>
						<Header />
						<div className="container">
							<Switch>
								<Route
									path="/surveys"
									component={() => {
										return <h2>Dashboard</h2>;
									}}
								/>
								<Route path="/" component={Landing} />
							</Switch>
						</div>
					</div>
				</BrowserRouter>
			</div>
		);
	}
}

export default connect(null, actions)(App);
