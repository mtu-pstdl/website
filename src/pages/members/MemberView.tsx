/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import * as React from "react";
import {Member} from "./members";

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
			<p>Hello, world!</p>
		</div>);
	}

}