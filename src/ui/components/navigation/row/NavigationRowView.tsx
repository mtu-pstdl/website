/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import * as React from "react";
import "./NavigationRowView.css";
import {Link} from "react-router-dom";
import {OpenInNew} from "@material-ui/icons";

export interface NavigationRowViewProps {
	url: string;
	newTab?: boolean;
	isExternal?: boolean;
	className?: string;
}

export interface NavigationRowViewState {

}

export class NavigationRowView extends React.Component<NavigationRowViewProps, NavigationRowViewState> {

	public constructor(props: NavigationRowViewProps) {

		super(props);

		this.state = {};

	}

	private externalElement(): React.ReactElement {
		return (<a rel={"noopener noreferrer"} href={this.props.url} target={(this.props.newTab === true) ? "_blank" : "_self"} className={"NavigationRowView"}>
			<div className={"child-container" + (this.props.className ? (" " + this.props.className) : "")}>{this.props.children}</div>
			<OpenInNew className={"button"}/>
		</a>);
	}

	private internalElement(): React.ReactElement {
		return (<Link to={this.props.url} className={"NavigationRowView"}>
			<div className={"child-container" + (this.props.className ? (" " + this.props.className) : "")}>{this.props.children}</div>
			<OpenInNew className={"button"}/>
		</Link>);
	}

	public render(): React.ReactElement {
		return (this.props.isExternal === true ? this.externalElement() : this.internalElement());
	}

}
