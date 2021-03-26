/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import React, {ReactElement} from "react";
import {AstraBackground} from "../astra/Astra";
import {useAsync} from "react-async-hook";
import {Firebase} from "../../data/Firebase";
import {LinearProgress} from "@material-ui/core";
import {ProjectRow} from "./ProjectRow";
import "./ProjectsPage.css";


export function ProjectsPage(): ReactElement {

	const req = useAsync(Firebase.fetchProjects, []);

	return (<div className={"ProjectsPage main"}>
		<AstraBackground/>
		<h2>Projects</h2>
		<div className={"projects"}>
			{req.loading && <LinearProgress/>}
			{req.error && <span>Error: {req.error.message}!</span>}
			{req.result && (
				req.result.map((p, i) => {
					return <ProjectRow project={p} key={i}/>
				})
			)}
		</div>
	</div>);

}
