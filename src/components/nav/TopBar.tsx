/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

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
			<img className={"logo"} src={"https://via.placeholder.com/720x360.png?text=New%20Logo"} alt={"pstdl logo"}/>
			<NavBar/>
		</div>);
	}

}
