/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import * as React from "react";
import {Member, MemberCollection} from "../../../data/members";
import {MemberViewLead} from "./MemberViewLead";
import {MemberView} from "./MemberView";

export interface MemberSectionProps {
	collection: MemberCollection;
}

export interface MemberSectionState {

}

export class MemberSection extends React.Component<MemberSectionProps, MemberSectionState> {

	public constructor(props: MemberSectionProps) {

		super(props);

	}

	public render(): React.ReactElement {
		return (<div className={"MemberSection"}>
			<h3>{this.props.collection.title}</h3>
			<div className={"members"}>
				{this.props.collection.members.sort((a: Member, b: Member) => {
					if (a.key !== undefined || b.key !== undefined) return (a.key ?? 0) > (b.key ?? 0) ? -1 : 1;
					return (a.lastName < b.lastName) ? -1 : 1;
				}).map((member: Member) => {
					return this.props.collection.detail ? <MemberViewLead member={member}/> : <MemberView member={member}/>;
				})}
			</div>
		</div>);
	}

}
