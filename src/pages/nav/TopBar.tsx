/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import {NavLink} from "react-router-dom";
import * as React from "react";
import "./TopBar.css"
import {NavBar} from "./NavBar";

export interface TopBarProps {

}

export interface TopBarState {

}

export class TopBar extends React.Component<TopBarProps, TopBarState> {

	public constructor(props: TopBarProps) {

		super(props);

	}

	public render(): React.ReactElement {
		return (<div className={"TopBar"}>
			<NavLink to={"/"} className={"title"}>
				<img className={"logo"} src={"./logo.png"} alt={"pstdl logo"}/>
				<div className={"labels"}>
					<h1>PSTDL</h1>
					<span>Planetary Surface Technology Development Lab</span>
					<span>Michigan Technological University</span>
				</div>
			</NavLink>
			<NavBar/>
		</div>);
	}

}
