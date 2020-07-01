/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import * as React from "react";
import "./FacilitiesPage.css"

export interface FacilitiesPageProps {

}

export interface FacilitiesPageState {

}

export class FacilitiesPage extends React.Component<FacilitiesPageProps, FacilitiesPageState> {

	public constructor(props: FacilitiesPageProps) {

		super(props);

	}

	public render(): React.ReactElement {
		return (<div className={"FacilitiesPage main"}>
			<h2>Facilities</h2>
		</div>);
	}

}