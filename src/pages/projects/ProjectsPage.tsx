/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import * as React from "react";
import "./ProjectsPage.css";
import {Link, Switch, Route} from "react-router-dom";
import {projects, Project} from "./projects";
import {ProjectRow} from "./ProjectRow";
import {ProjectDetail} from "./ProjectDetail";

export interface ProjectsPageProps {

}

export interface ProjectsPageState {

}

export class ProjectsPage extends React.Component<ProjectsPageProps, ProjectsPageState> {

	public constructor(props: ProjectsPageProps) {

		super(props);

	}

	public render(): React.ReactElement {
		return (<div className={"ProjectsPage main"}>
			<Switch>
				{
					projects.map((project: Project, index: number) => {
						return (<Route path={`/projects/${project.url}`} key={index}>
							<ProjectDetail>
								{project.component}
							</ProjectDetail>
						</Route>);
					})
				}
				<Route path={`/projects`}>
					<h2>Projects</h2>
					<div className={"projects"}>
						{
							projects.map((project: Project, index: number) => {
								return (<ProjectRow project={project} key={index}/>);
							})
						}
					</div>
				</Route>
			</Switch>
		</div>);
	}

}