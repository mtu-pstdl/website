/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import * as React from "react";
import "./ProjectsPage.css";
import {Link, Switch, Route} from "react-router-dom";

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
				<Route path={`/projects/test1`}>test1</Route>
				<Route path={`/projects/test2`}>test2</Route>
				<Route path={`/projects`}>
					<h2>Projects</h2>
					<ul>
						<li>
							<Link to={`/projects/test1`}>Test 1</Link>
						</li>
						<li>
							<Link to={`/projects/test2`}>Test 2</Link>
						</li>
					</ul>
				</Route>
			</Switch>
		</div>);
	}

}