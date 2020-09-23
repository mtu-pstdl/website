/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import * as React from "react";
import {Member} from "./members";
import "./MemberViewLead.css"
import {Link, LinkedIn, Mail} from "@material-ui/icons";

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
			<div className={"img-split"}>
				<img className={"headshot"} src={this.props.member.profile || "https://via.placeholder.com/300x300.png?text=Profile"} alt={`${this.props.member.firstName} closeup`}/>
				<div className={"name-split"}>
					<span className={"name"}>{this.props.member.firstName} {this.props.member.lastName}</span>
					<span className={"email"}>{this.props.member.email}</span>
					<div className={"links"}>
						<a href={"mailto:" + this.props.member.email} target={"_blank"} ref={"norefferer noopener"}><Mail/></a>
						{this.props.member.linkedIn ? <a href={this.props.member.linkedIn} target={"_blank"} ref={"norefferer noopener"}><LinkedIn/></a> : <div/>}
						{this.props.member.link ? <a href={this.props.member.link} target={"_blank"} ref={"norefferer noopener"}><Link/></a> : <div/>}
					</div>
				</div>
			</div>
			<p className={"bio"}>{this.props.member.bio}</p>
		</div>);
	}

}
