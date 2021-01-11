/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import * as React from "react";

export interface GravityOffloadingProps {

}

export interface GravityOffloadingState {

}

export class GravityOffloading extends React.Component<GravityOffloadingProps, GravityOffloadingState> {

	public constructor(props: GravityOffloadingProps) {

		super(props);

		this.state = {};

	}

	public render(): React.ReactElement {
		return (<div className={"GravityOffloading"}>
			<h2>Gravity Offloading Lunar Simulant Sandbox</h2>
			<img src={"../fac/gravity-offload.png"} alt={"gravity-offloading"}/>
			<p>Another major piece of the lab is a 14ftx6ftx1ft regolith simulant filled sandbox that is enclosed, kept under slight negative pressure for dust control as well as an 'airlock' to mitigate dust, has an overhead rail system that has as a gravity off-loading system (up to 200 lbs total load) installed. Slopes up to 45 ̊ are possible to be built into the box.</p>
			<p>Mounted to the top of the simulant chamber is a 3-axis gravity offloading system currently being developed. Upon completion, the gravity offloading system will actively track an IR LED on the target device and continually position itself directly above the target device with a constant upward force.</p>
		</div>);
	}

}
