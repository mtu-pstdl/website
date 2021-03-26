/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import React, {ReactElement, PropsWithChildren} from "react";
import {Project} from "../../data/Firebase";
import "./ProjectRow.css";
import { NavLink } from "react-router-dom";

export interface ProjectRowProps {
	project: Project;
}

export function ProjectRow(props: PropsWithChildren<ProjectRowProps>): ReactElement {

	return (<NavLink to={"projects/"+ props.project.url} className={"ProjectRow"}>
		{props.project.image && <img className={"background"} src={props.project.image} alt={"logo background"}/>}
		{props.project.image && <div className={"dark"}/>}
		<img className={"logo"} src={props.project.image ?? "/swoosh.png"} alt={"logo"}/>
		<span className={"name"}>{props.project.name}</span>
		<span className={"summary"}>{props.project.summary}</span>
	</NavLink>);

}
