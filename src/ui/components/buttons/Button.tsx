/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import * as React from "react";
import "./Button.css";

export interface ButtonProps {
	link?: string;
	external?: boolean;
	text?: string;
}

export interface ButtonState {

}

export class Button extends React.Component<ButtonProps, ButtonState> {

	public constructor(props: ButtonProps) {

		super(props);

		this.state = {};

	}

	public render(): React.ReactElement {
		return (<a className={"Button"} href={this.props.link} target={this.props.external ? "_blank" : "_self"}>
			{this.props.text || "See More"}
		</a>);
	}

}
