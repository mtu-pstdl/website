/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import * as React from "react";
import "./FacilitiesPage.css"
import {LoremIpsum} from "../../components/LoremIpsum";

export interface FacilitiesPageProps {

}

export interface FacilitiesPageState {

}

export class FacilitiesPage extends React.Component<FacilitiesPageProps, FacilitiesPageState> {

	public constructor(props: FacilitiesPageProps) {

		super(props);

	}

	public render(): React.ReactElement {
		return (<div className={"FacilitiesPage main"}>
			<h2>Facilities</h2>
			<h3>Dusty Thermal Vacuum Chamber (DTVAC)</h3>
			<LoremIpsum/>
			<h3>Industrial Robotic Arm</h3>
			<LoremIpsum/>
			<h3>Lunar Regolith Sandbox with Gravity Assist</h3>
			<LoremIpsum/>
			<h3>Mini Thermal Vacuum Chamber (MTVAC)</h3>
			<LoremIpsum/>
			<h3>Outdoor Robotic Test Platform</h3>
			<LoremIpsum/>
		</div>);
	}

}