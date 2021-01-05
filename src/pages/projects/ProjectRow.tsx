/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import * as React from "react";
import "./ProjectRow.css"
import {Project} from "./projects";
import {Link} from "react-router-dom";
import {NavigationRowView} from "../../components/nav-row/NavigationRowView";

export interface ProjectRowProps {
	project: Project;
}

export interface ProjectRowState {

}

export class ProjectRow extends React.Component<ProjectRowProps, ProjectRowState> {

	public constructor(props: ProjectRowProps) {

		super(props);

	}

	public render(): React.ReactElement {
		return (<NavigationRowView className={"ProjectRow"} url={"/projects/" + this.props.project.url}>
			<img className={"image"} alt={"project"} src={this.props.project.image}/>
			<div className={"text"}>
				<h3>{this.props.project.name}</h3>
				<span>{this.props.project.summary}</span>
			</div>
		</NavigationRowView>);
	}

}
