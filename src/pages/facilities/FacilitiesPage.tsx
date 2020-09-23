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
			<section>
				<h3>Dusty Thermal Vacuum Chamber (DTVAC)</h3>
				<p>The Dusty Thermal Vacuum Chamber (DTVAC) is a new environmental facility whose purpose is to perform rapid testing of lunar surface systems and science instruments. This facility consists of a thermal vacuum chamber, removable regolith beds, and supporting equipment.</p>
				<h4>Specifications</h4>
				<ul>
					<li>The chamber has an internal volume of 127x127x178 cm and is loaded from the side for ease of access. A 22in flange on top of the chamber enables future expansions to support large-scale drilling tests.</li>
					<li>This facility is cooled by a 3125 gallon LN2 tank and warmed by internal heaters to produce operating temperatures between  -196°C and 200°C. This range is able to simulate temperatures found in most illuminated and shaded areas of the Moon.</li>
					<li>Rough vacuum is reached with a roughing pump and is then taken to 5x10^-5 Torr using a turbopump.</li>
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
				<h4>Regolith Cart</h4>
				<ul>
					<li>2X rectangular metal carts that roll into the vacuum facility from an enclosed loading area.</li>
					<li>Each cart has an Internal volume of 60x116x167 cm.</li>
					<li>Carts are capable of holding up to 60 cm of dry and or icy regolith mixtures.</li>
					<li>MTU-LHT-1A simulant for the regolith carts is produced in house.</li>
					<li>80/20 rails line all sides of the cart lip for equipment mounting.</li>
				</ul>
			</section>
			<section>
				<h3>Industrial Robotic Arm</h3>
				<LoremIpsum/>
			</section>
			<section>
				<h3>Lunar Regolith Sandbox with Gravity Assist</h3>
				<LoremIpsum/>
			</section>
			<section>
				<h3>MTVAC</h3>
				<p>Further data collection for NASA’s RedWater project will utilize a Martian pressure rated vacuum chamber located in the Planetary Surface Technology Development Lab. The MTVAC has been designed to operate within a range of 7 Torr to 10-2 Torr, and features a LN2 feedthrough port to allow tests to be conducted at cryogenic temperatures. The internal dimensions of this chamber make up an 18” cube, and allows for smaller tests, with reduced pump downtime.</p>
				<p>This test setup specifically seeks to gather information about the energy required to melt through cryogenic ice within a lower pressure atmosphere. The MTVAC will likely also be used in preliminary testing   and validation of vacuum and temperature rated hardware.</p>

			</section>
		</div>);
	}

}
