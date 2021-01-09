/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import * as React from "react";
import {NavigationRowView} from "../row/NavigationRowView";
import {Project} from "../../../../data/projects";
import {Facility} from "../../../../data/facilities";
import "./FancyRowView.css";

export interface FancyRowViewProps {
	value: Project | Facility;
	baseUrl: string;
}

export interface FancyRowViewState {

}

export class FancyRowView extends React.Component<FancyRowViewProps, FancyRowViewState> {

	public constructor(props: FancyRowViewProps) {

		super(props);

		this.state = {};

	}

	public render(): React.ReactElement {
		return (<NavigationRowView className={"FancyRowView"} url={this.props.value.external ? (this.props.value.url) : (this.props.baseUrl + "/" + this.props.value.url)} newTab={this.props.value.external} isExternal={this.props.value.external}>
			{this.props.value.image !== undefined ? (<img className={"image"} alt={"value"} src={this.props.value.image}/>) : <div/>}
			<div className={"text"}>
				<h3>{this.props.value.name}</h3>
				<span>{this.props.value.summary}</span>
			</div>
		</NavigationRowView>);
	}

}
