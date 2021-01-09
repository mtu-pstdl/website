/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import * as React from "react";

export interface RedWaterProps {

}

export interface RedWaterState {

}

export class RedWater extends React.Component<RedWaterProps, RedWaterState> {

	public constructor(props: RedWaterProps) {

		super(props);

		this.state = {};

	}

	public render(): React.ReactElement {
		return (<div className={"RedWater"}>
			<h2>REDWATER</h2>
			<p>RedWater is related to Martian exploration and water extraction from subterranean glaciers. The work being done in the PSTDL is centered around determining the amount of energy required to melt this ice at cryogenic temperatures. This project test setup will utilize the MTVAC in order to emulate a low pressure and cryogenic atmosphere for testing.</p>
			<a rel={"noopener noreferrer"} className={"button"} target={"_blank"} href={"https://jetportal.net/RedWater"} ref={"noreferrer noopener"}>Read More</a>
		</div>);
	}

}
