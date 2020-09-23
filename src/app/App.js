import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import pages
import Home from '../pages/home';
import Checkout from '../pages/checkout';
// import layout
import DefaultLayout from '../layouts/default';

function App() {
	return (
		<Router>
			<div className="app">
				<Switch>
					<Route path="/checkout">
						<DefaultLayout>
							<Checkout />
						</DefaultLayout>
					</Route>

					<Route path="/">
						<DefaultLayout>
							<Home />
						</DefaultLayout>
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
