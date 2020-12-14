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
			<div className={"title"}>
				<img className={"logo"} src={"./logo.png"} alt={"pstdl logo"}/>
				<h1>PSTDL</h1>
			</div>
			<NavBar/>
		</div>);
	}

}
