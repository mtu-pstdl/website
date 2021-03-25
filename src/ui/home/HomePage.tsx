/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import React, {ReactElement} from "react";
import "./HomePage.css";
import {ModelView} from "../model/ModelView";
import {AstraBackground} from "../astra/Astra";


export function HomePage(): ReactElement {

	return (<div className={"HomePage"}>
		<AstraBackground/>
		<ModelView className={"moon"} src={"/moon.glb"}/>
		<div className={"right"}>
			<img className={"logo"} src={"/swoosh.png"} alt={"logo"}/>
			<span className={"mission"}>Developing cutting edge technology solutions for planetary surface exploration of the Moon, Mars and beyond. Training the next generation of engineers that will return humanity to other planetary surfaces - this time to stay.</span>
		</div>
		<ModelView src={"/earth.glb"} className={"earth"}/>
		<ModelView src={"/mars.glb"} className={"mars"}/>
	</div>);

}
