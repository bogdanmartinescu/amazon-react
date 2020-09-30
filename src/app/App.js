import React, { useEffect } from "react";
// import router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import firebase auth
import { auth } from "../firebase";
// import state
import { useStateValue } from "../provider";
import { types } from "../reducer";
// import pages
import Home from "../pages/home";
import Checkout from "../pages/checkout";
import Orders from "../pages/orders";
import Prime from "../pages/prime";
import SignIn from "../pages/sign-in";
// import layout
import DefaultLayout from "../layouts/default";
import AuthLayout from "../layouts/auth";

function App() {
	const [{ user }, dispatch] = useStateValue();

	useEffect(() => {
		auth.onAuthStateChanged((authUser) => {
			if (authUser) {
				dispatch({ type: types.SET_LOGGED_IN_USER, payload: authUser });
				console.log("logged in user", authUser, authUser.email.split("@")[0]);
			} else {
				dispatch({ type: types.SET_LOGGED_IN_USER, payload: null });
			}
		});
	}, []);

	return (
		<Router>
			<div className="app">
				<Switch>
					<Route path="/signin">
						<AuthLayout>
							<SignIn />
						</AuthLayout>
					</Route>

					<Route path="/orders">
						<DefaultLayout>
							<Orders />
						</DefaultLayout>
					</Route>

					<Route path="/prime">
						<DefaultLayout>
							<Prime />
						</DefaultLayout>
					</Route>

					<Route path="/cart">
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
