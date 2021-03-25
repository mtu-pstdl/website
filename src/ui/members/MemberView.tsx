/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import React, {ReactElement, PropsWithChildren, useState} from "react";
import "./MemberView.css";
import {Member} from "../../data/Firebase";
import {Email, LibraryBooks, LinkedIn} from "@material-ui/icons";
import {Avatar, Backdrop} from "@material-ui/core";

export interface MemberViewProps {
	member: Member;
}

export function MemberView(props: PropsWithChildren<MemberViewProps>): ReactElement {

	function getType(): string {
		switch (props.member.type) {
			case "bs":
				return "Bachelor's"
			case "ms":
				return "Master's"
			case "phd":
				return "PhD"
			case "pi":
				return "Principal Investigator"
			default:
				return ""
		}
	}

	function getPosition(): string {
		if (props.member.type === "pi" || !props.member.major) return getType();
		return props.member.major
	}

	const [showBio, setShowBio] = useState(false);

	return (<div className={"MemberView"}>
		<div className={"top"}>
			<div className={"profile-container"}>
				{props.member.profile ?
					(
						<img className={"profile"} alt={"profile"} src={"/members/" + props.member.profile}/>
						) : (
						<Avatar  className={"profile"}>{props.member.lastName.charAt(0).toUpperCase()}</Avatar>
					)}
			</div>
			<span className={"name"}>{props.member.firstName + " " + props.member.lastName}</span>
			<span className={"email"}>{props.member.email}</span>
			<div className={"buttons"}>
				<a rel={"noopener noreferrer"} target={"_blank"} href={"mailto:" + props.member.email}><Email className={"button"}/></a>
				{props.member.linkedIn && <a rel={"noopener noreferrer"} target={"_blank"} href={props.member.linkedIn}><LinkedIn className={"button"}/></a>}
				{props.member.bio && <LibraryBooks className={"button"} onClick={() => setShowBio(true)}/>}
			</div>
			<Backdrop style={{zIndex: 200, background: "rgba(0,0,0,0.9)"}} open={showBio} onClick={() => setShowBio(false)}>
				<p className={"bio"}>
					{props.member.bio}
				</p>
			</Backdrop>
		</div>
		<span className={"bottom"}>{getPosition()}</span>
	</div>)

}
