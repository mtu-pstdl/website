/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import * as React from "react";

export interface MTVACProps {

}

export interface MTVACState {

}

export class MTVAC extends React.Component<MTVACProps, MTVACState> {

	public constructor(props: MTVACProps) {

		super(props);

		this.state = {};

	}

	public render(): React.ReactElement {
		return (<div className={"MTVAC"}>
			<h2>Mini Thermal Vacuum Chamber (MTVAC)</h2>
			<p>Further data collection for NASA’s RedWater project will utilize a Martian pressure rated vacuum chamber located in the Planetary Surface Technology Development Lab. The MTVAC has been designed to operate within a range of 7 Torr to 10-2 Torr, and features a LN2 feedthrough port to allow tests to be conducted at cryogenic temperatures. The internal dimensions of this chamber make up an 18” cube, and allows for smaller tests, with reduced pump downtime.</p>
			<p>This test setup specifically seeks to gather information about the energy required to melt through cryogenic ice within a lower pressure atmosphere. The MTVAC will likely also be used in preliminary testing   and validation of vacuum and temperature rated hardware.</p>
			<img alt={"mtvac"} ref={"norefferrer noopener"} src={"../fac/mtvac1.jpg"}/>
			<img alt={"mtvac"} ref={"norefferrer noopener"} src={"../fac/mtvac2.jpg"}/>
			<img alt={"mtvac"} ref={"norefferrer noopener"} src={"../fac/mtvac3.jpg"}/>
		</div>);
	}

}
