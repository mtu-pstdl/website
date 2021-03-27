/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import React, {ReactElement, PropsWithChildren} from "react";
import "./PartnershipsPage.css";
import {AstraBackground} from "../astra/Astra";

export interface PartnershipsPageProps {

}

export function PartnershipsPage(props: PropsWithChildren<PartnershipsPageProps>): ReactElement {

	return (<div className={"PartnershipsPage main"}>
		<AstraBackground/>
		<h2>Industry Partners</h2>
		<div className={"grid"}>
			<img src={"nasa.png"} alt={"nasa"}/>
			<img src={"honeybee.png"} alt={"honeybee"}/>
			<img src={"mtu.png"} alt={"mtu"}/>
		</div>
	</div>);

}
