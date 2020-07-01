/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import * as React from "react";
import {Member} from "./members";

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
			<span>{this.props.member.firstName} <b>{this.props.member.lastName}</b></span>
		</div>);
	}

}