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
			<div className={"content"}>
				<img src={this.props.member.profile} alt={`${this.props.member.firstName} closeup`}/>
				<span className={"name"}>{this.props.member.firstName} {this.props.member.lastName}</span>
				<span className={"email"}>{this.props.member.email}</span>
			</div>
			<p className={"bio"}>{this.props.member.bio}</p>
		</div>);
	}

}