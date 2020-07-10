/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import * as React from "react";
import "./ProjectDetail.css"
import {Link} from "react-router-dom";
import {Close as CloseIcon} from "@material-ui/icons";

export interface ProjectDetailProps {

}

export interface ProjectDetailState {

}

export class ProjectDetail extends React.Component<ProjectDetailProps, ProjectDetailState> {

	public constructor(props: ProjectDetailProps) {

		super(props);

	}

	public render(): React.ReactElement {
		return (<div className={"ProjectDetail"}>
			<Link to={"/projects"} className={"link"}><CloseIcon className={"icon"}/></Link>
			{this.props.children}
		</div>);
	}

}