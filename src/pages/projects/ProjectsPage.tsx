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
						return (<Route path={`/projects/${project.url}`} key={index}>{project.component}</Route>);
					})
				}
				<Route path={`/projects`}>
					<h2>Projects</h2>
					<div className={"projects"}>
						{
							projects.map((project: Project, index: number) => {
								return (<Link to={"/projects/" + project.url} key={index}>
									<ProjectRow project={project}/>
								</Link>);
							})
						}
					</div>
				</Route>
			</Switch>
		</div>);
	}

}