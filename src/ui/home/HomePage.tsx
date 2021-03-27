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
import {useAsync} from "react-async-hook";
import {API} from "../../data/API";
import {LinearProgress} from "@material-ui/core";
import {Config} from "../../data/Config";


export function HomePage(): ReactElement {

	const load = new Promise<void>((resolve, reject) => {
		setTimeout(() => {
			resolve();
		}, 0)
	})

	async function loader(): Promise<Config> {
		await load;
		return API.fetchConfig();
	}

	const req = useAsync(loader, []);

	return (<div>
		<AstraBackground/>
		{req.loading && (<div className={"HomePage"}>
			<LinearProgress/>
		</div>)}
		{req.error && <span>Error!</span>}
		{req.result && (<div className={"HomePage"}>
			<ModelView className={"moon"} src={"/moon.glb"}/>
			<div className={"right"}>
				<img className={"logo"} src={"/header.png"} alt={"logo"}/>
				<span className={"mission"}>{req.result.get("mission")}</span>
			</div>
			<ModelView src={"/earth.glb"} className={"earth"}/>
			<ModelView src={"/mars.glb"} className={"mars"}/>
		</div>)}
	</div>);

}
