/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import * as React from "react";
import {Member} from "./members";
import "./MemberView.css";
import {LinkedIn, Link, Mail, LibraryBooks, Close} from "@material-ui/icons";

export interface MemberViewProps {
	member: Member;
}

export interface MemberViewState {
	showBio: boolean;
}

export class MemberView extends React.Component<MemberViewProps, MemberViewState> {

	public constructor(props: MemberViewProps) {

		super(props);
		this.showBioContainer = this.showBioContainer.bind(this);
		this.state = {showBio: false};

	}

	private showBioContainer(): void {
		this.setState({showBio: true});
	}

	public render(): React.ReactElement {
		return (<div className={"MemberView"}>
			<img src={this.props.member.profile ? ("../members/" + this.props.member.profile) : "https://via.placeholder.com/300x300.png?text=Profile"} alt={this.props.member.firstName + " profile"}/>
			<div className={"content"}>
				<span className={"name"}>{this.props.member.firstName + " " + this.props.member.lastName}</span>
				<span className={"email"}>{this.props.member.email}</span>
				<div className={"links"}>
					<a href={"mailto:" + this.props.member.email} target={"_blank"} ref={"norefferer noopener"}><Mail/></a>
					{this.props.member.linkedIn ? <a href={this.props.member.linkedIn} target={"_blank"} ref={"norefferer noopener"}><LinkedIn/></a> : <div/>}
					{this.props.member.link ? <a href={this.props.member.link} target={"_blank"} ref={"norefferer noopener"}><Link/></a> : <div/>}
				</div>
				{this.props.member.bio ? (
					<div onClick={this.showBioContainer} className={"bioButtonContainer"}>
						<LibraryBooks/>
						<span>Bio</span>
					</div>
				) : <div/>}
				<div className={"bioContainer"} style={{display: this.state.showBio ? "flex" : "none"}}>
					<div className={"modal"}>
						<div onClick={() => this.setState({showBio: false})} className={"closeContainer"}><Close className={"closeImage"}/></div>
						<span className={"bio"}>{this.props.member.bio}</span>
					</div>
				</div>
			</div>
		</div>);
	}

}
