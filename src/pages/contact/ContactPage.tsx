/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import * as React from "react";
import "./ContactPage.css"

export interface ContactPageProps {

}

export interface ContactPageState {

}

export class ContactPage extends React.Component<ContactPageProps, ContactPageState> {

	public constructor(props: ContactPageProps) {

		super(props);

	}

	public render(): React.ReactElement {
		return (<div className={"ContactPage main"}>
			<h2>Contact</h2>
		</div>);
	}

}