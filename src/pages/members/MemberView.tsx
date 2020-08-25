/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import * as React from "react";
import {Member} from "./members";
import "./MemberView.css";

export interface MemberViewProps {
	member: Member;
}

export interface MemberViewState {

}

export class MemberView extends React.Component<MemberViewProps, MemberViewState> {

	public constructor(props: MemberViewProps) {

		super(props);

	}

	public render(): React.ReactElement {
		return (<div className={"MemberView"}>
			<img src={this.props.member.profile} alt={this.props.member.firstName + " profile"}/>
			<div className={"content"}>
				<span className={"name"}>{this.props.member.firstName + " " + this.props.member.lastName}</span>
				<a href={"mailto:" + this.props.member.email} className={"email"}>{this.props.member.email}</a>
			</div>
		</div>);
	}

}
