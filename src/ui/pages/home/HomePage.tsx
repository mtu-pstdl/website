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
				<img src={"./swoosh.png"} alt={"logo"} className={"logo"}/>
				<div className={"titleContainer"}>
					{/*<span className={"title"}>Husky Works</span>*/}
					{/*<span className={"subtitle"}>Planetary Surface Technology Development Lab</span>*/}
					{/*<span className={"mtu"}>Michigan Technological University</span>*/}
				</div>
			</div>
			<span className={"mission"}>Develop cutting edge technology solutions for planetary surface exploration of the Moon, Mars and other destinations. Through research, education and hands-on projects, train the next generation of engineers that will bring humanity to other planetary surfaces again, this time to stay!</span>
		</div>);
	}

}
