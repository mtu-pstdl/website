/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import * as React from "react";
import {Member} from "./members";
import "./MemberViewLead.css"

export interface MemberViewLeadProps {
	member: Member;
}

export interface MemberViewLeadState {

}

export class MemberViewLead extends React.Component<MemberViewLeadProps, MemberViewLeadState> {

	public constructor(props: MemberViewLeadProps) {

		super(props);

	}

	public render(): React.ReactElement {
		return (<div className={"MemberViewLead"}>
			<img src={this.props.member.profile} alt={`${this.props.member.firstName} closeup`}/>
			<div className={"content"}>
				<span className={"name"}>{this.props.member.firstName} {this.props.member.lastName}</span>
				<span className={"email"}>{this.props.member.email}</span>
				<p className={"bio"}>{this.props.member.bio}</p>
			</div>
		</div>);
	}

}