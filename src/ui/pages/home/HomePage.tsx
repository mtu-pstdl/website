/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import * as React from "react";
import "./HomePage.css"
import {NewsClipView} from "../news/NewsClipView";
import {getSortedNews} from "../../../data/news";

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
			</div>
			<span className={"mission"}>Developing cutting edge technology solutions for planetary surface exploration of the Moon, Mars and beyond. Through research, education and hands-on projects, train the next generation of engineers that will bring humanity to other planetary surfaces again, this time to stay!</span>
		</div>);
	}

}
