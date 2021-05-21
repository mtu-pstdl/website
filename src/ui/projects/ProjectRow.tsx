/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import React, {ReactElement, PropsWithChildren} from "react";
import "./ProjectRow.css";
import {Project} from "../../data/Project";

export interface ProjectRowProps {
	project: Project;
	onClick: () => void;
}

export function ProjectRow(props: PropsWithChildren<ProjectRowProps>): ReactElement {

	const image = props.project.get("image");
	const url: string | undefined = image?.url();
	const title = props.project.get("title");
	const description = props.project.get("description");

	return (<div className={"ProjectRow"} onClick={props.onClick}>
		{image && <img className={"background"} src={url} alt={"logo background"}/>}
		{image && <div className={"dark"}/>}
		<img className={"logo"} src={url ?? "/swoosh.png"} alt={"logo"}/>
		<span className={"name"}>{title}</span>
		<span className={"summary"}>{description}</span>
	</div>);

}
