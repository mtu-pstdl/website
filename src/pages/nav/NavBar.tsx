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
			<NavLink exact activeClassName={"active"} to="/">home</NavLink>
			<NavLink activeClassName={"active"} to="/projects">projects</NavLink>
			<NavLink activeClassName={"active"} to="/members">members</NavLink>
			<NavLink activeClassName={"active"} to="/news">news</NavLink>
			<NavLink activeClassName={"active"} to="/publications">publications</NavLink>
			<NavLink activeClassName={"active"} to="/facilities">facilities</NavLink>
			<NavLink activeClassName={"active"} to="/partnerships">partnerships</NavLink>
			<NavLink activeClassName={"active"} to="/contact">contact</NavLink>
		</ul>);
	}

}
