/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import * as React from "react";
import "./ProjectRow.css"
import {Project} from "./projects";

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
		return (<div className={"ProjectRow"}>
			<h3>{this.props.project.name}</h3>
			<span>{this.props.project.summary}</span>
		</div>);
	}

}