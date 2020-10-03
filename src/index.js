import React from "react";
import ReactDOM from "react-dom";
import { StateProvider } from "./provider";
import { initialState, reducer } from "./reducer";
import "./index.scss";
import App from "./app/App";

ReactDOM.render(
	<React.StrictMode>
		<StateProvider initialState={initialState} reducer={reducer}>
			<App />
		</StateProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
