/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import * as React from "react";
import "./PartnershipsPage.css";

export interface PartnershipsPageProps {

}

export interface PartnershipsPageState {

}

export class PartnershipsPage extends React.Component<PartnershipsPageProps, PartnershipsPageState> {

	public constructor(props: PartnershipsPageProps) {

		super(props);

		this.state = {};

	}

	public render(): React.ReactElement {
		return (<div className={"PartnershipsPage main"}>
			<h2>Industry Partners</h2>
			<div className={"grid"}>

			</div>
		</div>);
	}

}
