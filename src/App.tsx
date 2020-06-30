/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import * as React from "react";
import {TopBar} from "./components/nav/TopBar";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {HomePage} from "./pages/home/HomePage";
export interface AppProps {

}

export interface AppState {

}

export class App extends React.Component<AppProps, AppState> {

	public constructor(props: AppProps) {

		super(props);

	}

	public render(): React.ReactElement {
		return (<div className={"App"}>
			<Router>
				<TopBar/>
				<Switch>
					<Route path="/projects"><p>Projects</p></Route>
					<Route path="/members"><p>Members</p></Route>
					<Route path="/publications"><p>Publications</p></Route>
					<Route path="/facilities"><p>Facilities</p></Route>
					<Route path="/contact"><p>Contact</p></Route>
					<Route path="/"><HomePage/></Route>
				</Switch>
			</Router>
		</div>);
	}

}