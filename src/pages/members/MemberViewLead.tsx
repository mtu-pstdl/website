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
			<img className={"headshot"} src={this.props.member.profile} alt={`${this.props.member.firstName} closeup`}/>
			<div className={"bio-split"}>
				<div className={"name-split"}>
					<span className={"name"}>{this.props.member.firstName} {this.props.member.lastName}</span>
					<a className={"email"} href={"mailto:" + this.props.member.email}>{this.props.member.email}</a>
				</div>
				<p className={"bio"}>{this.props.member.bio}</p>
			</div>
		</div>);
	}

}
