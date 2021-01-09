/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import * as React from "react";
import "./CardView.css";

export interface CardViewProps {
	className?: string;
}

export interface CardViewState {

}

export class CardView extends React.Component<CardViewProps, CardViewState> {

	public constructor(props: CardViewProps) {

		super(props);

		this.state = {};

	}

	public render(): React.ReactElement {
		return (<div className={"CardView" + (this.props.className === undefined ? ("") : (" " + this.props.className))}>
			{this.props.children}
		</div>);
	}

}
