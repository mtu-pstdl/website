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
			<div className={"header"}>
				<span className={"title"}>Planetary Surface Technology Development Lab</span>
				<span className={"subtitle"}>Michigan Technological University</span>
				<img src={"./rocket.svg"} className={"rocket"} alt={"rocket"}/>
			</div>
		</div>);
	}

}
