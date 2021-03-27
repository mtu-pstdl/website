/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import React, {ReactElement, PropsWithChildren, useState} from "react";
import "./MemberView.css";
import {Member} from "../../data/Member";
import {Email, LibraryBooks, LinkedIn} from "@material-ui/icons";
import {Avatar, Backdrop} from "@material-ui/core";

export interface MemberViewProps {
	member: Member;
}

export function MemberView(props: PropsWithChildren<MemberViewProps>): ReactElement {

	function getType(): string {
		switch (props.member.get("type")) {
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
		if (props.member.get("type") === "pi" || !props.member.get("major")) return getType();
		return props.member.get("major")
	}

	const [showBio, setShowBio] = useState(false);
	const url: string | undefined = props.member.get("profile")?.url();

	return (<div className={"MemberView"}>
		<div className={"top"}>
			<div className={"profile-container"}>
				{url ?
					(
						<img className={"profile"} alt={"profile"} src={url}/>
						) : (
						<Avatar  className={"profile"}>{props.member.get("lastName").charAt(0).toUpperCase()}</Avatar>
					)}
			</div>
			<span className={"name"}>{props.member.get("firstName") + " " + props.member.get("lastName")}</span>
			<span className={"email"}>{props.member.get("email")}</span>
			<div className={"buttons"}>
				<a rel={"noopener noreferrer"} target={"_blank"} href={"mailto:" + props.member.get("email")}><Email className={"button"}/></a>
				{props.member.get("linkedIn") && <a rel={"noopener noreferrer"} target={"_blank"} href={props.member.get("linkedIn")}><LinkedIn className={"button"}/></a>}
				{props.member.get("bio") && <LibraryBooks className={"button"} onClick={() => setShowBio(true)}/>}
			</div>
			<Backdrop style={{zIndex: 200, background: "rgba(0,0,0,0.9)"}} open={showBio} onClick={() => setShowBio(false)}>
				<p className={"bio"}>
					{props.member.get("bio")}
				</p>
			</Backdrop>
		</div>
		<span className={"bottom"}>{getPosition()}</span>
	</div>)

}
