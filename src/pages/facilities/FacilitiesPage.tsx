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
			<p>TRL6 testing of the L-SABRE rover will be completed at state-of-the art facilities located here on the Michigan Technological University campus in the Planetary Surface Technology Development Lab (PSTDL), including a dusty thermal vacuum chamber that can simulate the lunar environment by reaching temperatures near 77 K in a vacuum, with a bed of lunar simulant. The DTVAC is designed to house a simulant bin with a bed depth of 15cm. There are two simulant bins to choose from for testing purposes. One bin contains a lunar Highlands simulant, and the other is filled with a lunar Maria simulant. Both simulants bins are precisely prepared before each test using a method of incremental filling and compaction to achieve a test bed that replicates the densely packed soil properties found on the moon. Additionally, for certain tests water may be added to the simulant in measured quantities before compaction. This is done to simulate certain soils on the moon where water ice is present such as in PSR craters.</p>
			<p>To accomplish the task of cryogenic cooling inside the DTVAC, an inner thermal shroud is used with liquid nitrogen cooling coils located on the bottom and sides of the shroud. In addition to cooling capabilities, the thermal shroud also has the ability to be heated to 473.15 K on both the sides and ceiling. There are 16 QF and ISO style vacuum ports located on the right side wall of the DTVAC. These ports can be configured in many ways and outfitted with different adapters to allow different test setups to be configured inside the DTVAC. The primary vacuum test ports that L-SABRE will use are the power feed through and data feed through ports. Using these ports we are able to pass 4 lines of power (700A max) and 25 lines of data communication into the chamber during thermal vacuum tests.</p>
			<div className={"img-container"}>
				<img src={"./dtvac-1.png"} alt={"dtvac"}/>
				<img src={"./dtvac-2.png"} alt={"dtvac"}/>
				<img src={"./dtvac-3.png"} alt={"dtvac"}/>
			</div>
			<h3>Industrial Robotic Arm</h3>
			<LoremIpsum/>
			<h3>Lunar Regolith Sandbox with Gravity Assist</h3>
			<LoremIpsum/>
			<img src={"./gravity-assist.png"} alt={"gravity-assist"}/>
			<h3>Mini Thermal Vacuum Chamber (MTVAC)</h3>
			<p>Further data collection for NASA’s RedWater project will utilize a Martian pressure rated vacuum chamber located in the Planetary Surface Technology Development Lab. The MTVAC has been designed to operate within a range of 7 Torr to 10-2 Torr, and features a LN2 feedthrough port to allow tests to be conducted at cryogenic temperatures. The internal dimensions of this chamber make up an 18” cube, and allows for smaller tests, with reduced pump downtime. This test setup specifically seeks to gather information about the energy required to melt through cryogenic ice within a lower pressure atmosphere. The MTVAC will likely also be used in preliminary testing and validation of vacuum and temperature rated hardware.</p>
			<img src={"./mtvac.png"} alt={"mtvac"}/>
			<h3>Outdoor Robotic Test Platform</h3>
			<LoremIpsum/>
		</div>);
	}

}
