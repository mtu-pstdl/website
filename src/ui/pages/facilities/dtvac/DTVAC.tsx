/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import * as React from "react";

export interface DTVACProps {

}

export interface DTVACState {

}

export class DTVAC extends React.Component<DTVACProps, DTVACState> {

	public constructor(props: DTVACProps) {

		super(props);

		this.state = {};

	}

	public render(): React.ReactElement {
		return (<div className={"DTVAC"}>
			<h2>Dusty Thermal Vacuum Chamber (DTVAC)</h2>
			<img alt={"dtvac"} src={"../fac/dtvac-real2.jpg"}/>
			<p>The Dusty Thermal Vacuum Chamber (DTVAC) is a new environmental facility whose purpose is to perform rapid testing of lunar surface systems and science instruments. This facility consists of a thermal vacuum chamber, removable regolith beds, and supporting equipment.</p>
			<h3>Specifications</h3>
			<ul>
				<li>The chamber has an internal volume of 127x127x178 cm and is loaded from the side for ease of access. A 22in flange on top of the chamber enables future expansions to support large-scale drilling tests.</li>
				<li>This facility is cooled by a 3125 gallon LN2 tank and warmed by internal heaters to produce operating temperatures between -196°C and 150°C. This range is able to simulate temperatures found in most illuminated and shaded areas of the Moon.</li>
				<li>Rough vacuum is reached with a roughing pump and is then taken to 5x10^-6 Torr using a turbopump with no simulant present and 5x10^-4 with simulant.</li>
				<li>The DTVAC has 2 light sources and 6 mounting points internally placed on the chamber ceiling.</li>
				<li>The facility is currently configured to support power lines rated for 700A, a 25pin data connection, and 2X 5-pair thermocouple feedthroughs.</li>
				<li>
					<span>16 total viewports and feedthroughs are available for configuration:</span>
					<table>
						<tr>
							<th>Name</th>
							<th>Qty</th>
						</tr>
						<tr>
							<td>ISO-LF DN160 (NW160)</td>
							<td>2</td>
						</tr>
						<tr>
							<td>ISO-LF DN63 (NW63)</td>
							<td>4</td>
						</tr>
						<tr>
							<td>KF/QF40-100-LF (NW40)</td>
							<td>4</td>
						</tr>
						<tr>
							<td>KF/QF25-100-LF (NW25)</td>
							<td>2</td>
						</tr>
						<tr>
							<td>KF/QF16-100-LF (NW16)</td>
							<td>4</td>
						</tr>
					</table>
				</li>
			</ul>
			<h3>Regolith Cart</h3>
			<ul>
				<li>2X rectangular metal carts that roll into the vacuum facility from an enclosed loading area.</li>
				<li>Each cart has an Internal volume of 60x116x167 cm.</li>
				<li>Carts are capable of holding up to 60 cm of dry and or icy regolith mixtures.</li>
				<li>MTU-LHT-1A simulant for the regolith carts is produced in house.</li>
				<li>80/20 rails line all sides of the cart lip for equipment mounting.</li>
			</ul>
			<div className={"img-container"}>
				<img alt={"dtvac"} src={"../fac/dtvac2.png"}/>
				<img alt={"dtvac"} src={"../fac/dtvac3.png"}/>
				<img alt={"dtvac"} src={"../fac/dtvac4.png"}/>
				<img alt={"dtvac"} src={"../fac/dtvac5.png"}/>
			</div>
		</div>);
	}

}
