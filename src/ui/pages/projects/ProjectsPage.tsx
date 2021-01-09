/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import * as React from "react";
import "./ProjectsPage.css";
import {Switch, Route} from "react-router-dom";
import {projects, Project} from "../../../data/projects";
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
					return section.map((project: Project, index: number) => {
						if (project.url.length === 0) throw new Error("URL cannot be empty.");
						return (<Route path={`/projects/${project.url}`} key={index}>
							<NavigationDetailView link={"/projects"}>
								{project.component === undefined ? <i>Detailed information coming soon!</i> : project.component}
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
								{section.map((project: Project, index: number) => {
									return (<FancyRowView baseUrl={"/projects"} value={project} key={index}/>);
								})}
							</div>);
						})
					}
				</Route>
			</Switch>
		</div>);
	}

}
