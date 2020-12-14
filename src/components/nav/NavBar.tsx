/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import * as React from "react";
import {NavLink} from "react-router-dom";
import "./NavBar.css"

export interface NavBarProps {

}

export interface NavBarState {

}

export class NavBar extends React.Component<NavBarProps, NavBarState> {

	public constructor(props: NavBarProps) {

		super(props);

	}

	public render(): React.ReactElement {
		return (<ul className={"NavBar"}>
			<li><NavLink exact activeClassName={"active"} to="/">home</NavLink></li>
			<li><NavLink activeClassName={"active"} to="/projects">projects</NavLink></li>
			<li><NavLink activeClassName={"active"} to="/members">members</NavLink></li>
			<li><NavLink activeClassName={"active"} to="/news">news</NavLink></li>
			<li><NavLink activeClassName={"active"} to="/publications">publications</NavLink></li>
			<li><NavLink activeClassName={"active"} to="/facilities">facilities</NavLink></li>
			<li><NavLink activeClassName={"active"} to="/contact">contact</NavLink></li>
			<li><NavLink activeClassName={"active"} to="/t">t</NavLink></li>
		</ul>);
	}

}
