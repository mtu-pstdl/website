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
						return (<Route key={i} exact path={"/" + ((link.url !== undefined) ? link.url : link.name)}>
							<div className={"rootAppContainer"}>
								{link.element ? link.element : <div/>}
							</div>
						</Route>)
					}))
				}
			</Switch>
		</Router>
	</div>);

}
