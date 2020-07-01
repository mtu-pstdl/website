/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import * as React from "react";
import "./PublicationsPage.css"
import {Publication, publications} from "./publications";
import {PublicationRow} from "./PublicationRow";

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
			<table>
				<tr>
					<th>Title</th>
					<th>Year</th>
					<th>Authors</th>
					<th>Journal</th>
					<th className={"iconColumn"}/>
				</tr>
				{publications.map((publication: Publication) => {
					return <PublicationRow publication={publication}/>
				})}
			</table>
		</div>);
	}

}