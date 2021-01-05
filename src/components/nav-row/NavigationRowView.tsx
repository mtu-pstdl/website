/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import * as React from "react";
import "./NavigationRowView.css";

export interface NavigationRowViewProps {

}

export interface NavigationRowViewState {

}

export class NavigationRowView extends React.Component<NavigationRowViewProps, NavigationRowViewState> {

	public constructor(props: NavigationRowViewProps) {

		super(props);

		this.state = {};

	}

	public render(): React.ReactElement {
		return (<div className={"NavigationRowView"}>
			<span>Hello, NavigationRowView!</span>
		</div>);
	}

}
