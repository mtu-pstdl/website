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
			<img alt={"mtvac"} ref={"norefferrer noopener"} src={"../fac/mtvac1.jpg"}/>
			<p>Further data collection for NASA’s RedWater project will utilize a Martian pressure rated vacuum chamber located in the Planetary Surface Technology Development Lab.</p>
			<p>This test setup specifically seeks to gather information about the energy required to melt through cryogenic ice within a lower pressure atmosphere. The MTVAC will likely also be used in preliminary testing and validation of vacuum and temperature rated hardware.</p>
			<h3>Specification</h3>
			<p>Our brand new 18 inch cube vacuum chamber (10-2 torr) with LN2 feedthrough for cooling of iceblocks and regolith/ice/volatile mixtures plus various other ports for thermocouples, etc. currently used for determining cryo-ice melting energies and probe designs. The LN2 feed and N2 exhaust will be tied into the same system as the large DTVAC.</p>
			<img alt={"mtvac"} ref={"norefferrer noopener"} src={"../fac/mtvac2.jpg"}/>
			<img alt={"mtvac"} ref={"norefferrer noopener"} src={"../fac/mtvac3.jpg"}/>
		</div>);
	}

}
