/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import * as React from "react";

export interface LunaboticsProps {

}

export interface LunaboticsState {

}

export class Lunabotics extends React.Component<LunaboticsProps, LunaboticsState> {

	public constructor(props: LunaboticsProps) {

		super(props);

		this.state = {};

	}

	public render(): React.ReactElement {
		return (<div className={"Lunabotics"}>
			<h2>Lunabotics</h2>
			<p>AstroHuskies - Michigan Technological Universities NASA Lunabotics Team</p>
			<p>A project within MTU’s Mining Innovation Enterprise, NASA’s Lunabotics Competition is a competition for 50 colleges and universities to participate in designing, building, and testing innovative lunar based mining robots. In preparation for the Spring 2020 competition, the Lunabotics team at Michigan Tech walked through the design, engineering, and manufacturing of a bucket ladder excavation robot. Due to the cancellation of the 2020 competition, the team is working to finish fabrication and assembly of the competition robot as well as conduct several tests and optimizations to the current design.</p>
			<img alt={"lunabotics"} src={"../lunabotics1.png"}/>
			<img alt={"lunabotics"} src={"../lunabotics2.png"}/>
		</div>);
	}

}
