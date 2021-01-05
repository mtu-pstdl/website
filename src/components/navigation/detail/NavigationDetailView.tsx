/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import * as React from "react";
import {Link} from "react-router-dom";
import {Close as CloseIcon} from "@material-ui/icons";
import "./NavigationDetailView.css";

export interface NavigationDetailViewProps {
	link: string;
}

export interface NavigationDetailViewState {

}

export class NavigationDetailView extends React.Component<NavigationDetailViewProps, NavigationDetailViewState> {

	public constructor(props: NavigationDetailViewProps) {

		super(props);

		this.state = {};

	}

	public render(): React.ReactElement {
		return (<div className={"NavigationDetailView main"}>
			<Link to={this.props.link} className={"link"}><CloseIcon className={"icon"}/></Link>
			{this.props.children}
		</div>);
	}

}
