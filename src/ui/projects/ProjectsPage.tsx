/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import React, {ReactElement, useState} from "react";
import {AstraBackground} from "../astra/Astra";
import {useAsync} from "react-async-hook";
import {LinearProgress} from "@material-ui/core";
import {ProjectRow} from "./ProjectRow";
import "./ProjectsPage.css";
import {ProjectDetail} from "./ProjectDetail";
import {Project} from "../../data/Project";
import {Facility} from "../../data/Facility";

export interface ProjectsPageProps {
	name: string;
	api: () => Promise<Project[] | Facility[]>
}

export function ProjectsPage(props: ProjectsPageProps): ReactElement {
	const [project, setProject] = useState<undefined | Project>(undefined);
	return project ? <ProjectDetail close={() => setProject(undefined)} project={project}/> : <ProjectsTable pageProps={props} onSelect={setProject}/>
}


export function ProjectsTable(props: {onSelect: (project: Project) => void, pageProps: ProjectsPageProps}): ReactElement {
	const req = useAsync(props.pageProps.api, []);
	return (<div className={"ProjectsPage main"}>
		<AstraBackground/>
		<h2>{props.pageProps.name}</h2>
		<div className={"projects"}>
			{req.loading && <LinearProgress/>}
			{req.error && <span>Error: {req.error.message}!</span>}
			{req.result && (
				req.result.map((p, i) => {
					return <ProjectRow project={p} key={i} onClick={() => props.onSelect(p)}/>
				})
			)}
		</div>
	</div>);
}