/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import * as React from "react";

export interface PagePickerProps {
	title: string;
}

export interface PagePickerState {

}

export class PagePicker extends React.Component<PagePickerProps, PagePickerState> {

	public constructor(props: PagePickerProps) {

		super(props);

		this.state = {};

	}

	public render(): React.ReactElement {
		return (<div className={"PagePicker main"}>
			<h2>{this.props.title}</h2>
		</div>);
	}

}
