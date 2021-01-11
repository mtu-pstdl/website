/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import * as React from "react";
import "./ESI.css";

export interface ESIProps {

}

export interface ESIState {

}

export class ESI extends React.Component<ESIProps, ESIState> {

	public constructor(props: ESIProps) {

		super(props);

		this.state = {};

	}

	public render(): React.ReactElement {
		return (<div className={"ESI"}>
			<h2>NASA Early Stage Innovation: No Wear Extraterrestrial Hydrate Mining</h2>
			<p>Development of a mining system with no wear for extraterrestrial mining of hydrated minerals, like gypsum, and ice-cemented soils. The end goal of which is to be sent to Mars or the Moon to begin extraction of water hydrated soil or gypsum hydrate for rocket propellant. The system has gone through multiple iterations to its current design at 34MPa. This pressure was designed to exceed the unconfined compressive strength of the hardest form of gypsum.</p>
			<img src={"../esi.png"} alt={"esi"}/>
			<h3>Supporters</h3>
			<div className={"supporters"}>
				<img src={"../nasa.png"} alt={'nasa'}/>
				<img src={"../honeybee.png"} alt={'honeybee'}/>
			</div>
		</div>);
	}

}
