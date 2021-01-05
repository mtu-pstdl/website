/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import * as React from "react";
import "./ProjectsPage.css";
import {Switch, Route} from "react-router-dom";
import {projects, Project} from "./projects";
import {NavigationDetailView} from "../../components/navigation/detail/NavigationDetailView";
import {FancyRowView} from "../../components/navigation/fancy-row/FancyRowView";

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
				{Object.keys(projects).map((key) => {
					const section = projects[key];
					return section.projects.map((project: Project, index: number) => {
						return (<Route path={`/projects/${section.url}/${project.url}`} key={index}>
							<NavigationDetailView link={"/projects"}>
								{project.component}
							</NavigationDetailView>
						</Route>);
					});
				})}
				<Route path={`/projects`}>
					{
						Object.keys(projects).map((key, index) => {
							const section = projects[key];
							return (<div className={"projects"} key={index}>
								<h2>{key}</h2>
								{section.projects.map((project: Project, index: number) => {
									return (<FancyRowView baseUrl={"/projects/" + section.url} value={project} key={index}/>);
								})}
							</div>);
						})
					}
				</Route>
			</Switch>
		</div>);
	}

}
