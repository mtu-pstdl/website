/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import * as React from "react";
import "./PublicationsPage.css"

export interface PublicationsPageProps {

}

export interface PublicationsPageState {

}

export class PublicationsPage extends React.Component<PublicationsPageProps, PublicationsPageState> {

	public constructor(props: PublicationsPageProps) {

		super(props);

	}

	public render(): React.ReactElement {
		return (<div className={"PublicationsPage main"}>
			<h2>Publications</h2>
		</div>);
	}

}