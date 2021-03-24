/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import React, {ReactElement, PropsWithChildren} from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {NavView} from "./nav/NavView";
import {links} from "./menu/links";

export interface AppProps {

}

export function App(props: PropsWithChildren<AppProps>): ReactElement {

	return (<div className={"App"}>
		<Router>
			<NavView/>
			<Switch>
				{
					(links.map((link, i) => {
						return (<Route key={i} path={"/" + (link.url ? link.url : link.name)}>
							<div className={"rootAppContainer"}>
								{link.name}
							</div>
						</Route>)
					}))
				}
			</Switch>
		</Router>
	</div>);

}
