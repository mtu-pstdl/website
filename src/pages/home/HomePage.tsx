/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import * as React from "react";
import "./HomePage.css"

export interface HomePageProps {

}

export interface HomePageState {

}

export class HomePage extends React.Component<HomePageProps, HomePageState> {

	public constructor(props: HomePageProps) {

		super(props);

	}

	public render(): React.ReactElement {
		return (<div className={"HomePage"}>
			<div style={{backgroundImage: "url('moon-landscape.jpg')"}} className={"header"}>
				<span className={"title"}>Planetary Surface Technology Development Lab</span>
				<span className={"subtitle"}>Michigan Technological University</span>
			</div>
			<div style={{
				width: "100%",
				height: "100vh",
				background: "gray"
			}}></div>
		</div>);
	}

}