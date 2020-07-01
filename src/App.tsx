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
import {MembersPage} from "./pages/members/MembersPage";
import {ProjectsPage} from "./pages/projects/ProjectsPage";
import {PublicationsPage} from "./pages/publications/PublicationsPage";
import {FacilitiesPage} from "./pages/facilities/FacilitiesPage";
import {ContactPage} from "./pages/contact/ContactPage";

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
				<div className={"rootAppContainer"}>
					<Switch>
						<Route path="/projects"><ProjectsPage/></Route>
						<Route path="/members"><MembersPage/></Route>
						<Route path="/publications"><PublicationsPage/></Route>
						<Route path="/facilities"><FacilitiesPage/></Route>
						<Route path="/contact"><ContactPage/></Route>
						<Route path="/"><HomePage/></Route>
					</Switch>
				</div>
			</Router>
		</div>);
	}

}