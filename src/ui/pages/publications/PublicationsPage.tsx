/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import * as React from "react";
import "./PublicationsPage.css"
import {Publication, getPublicationsSorted, publications} from "../../../data/publications";
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
			{
				Object.keys(publications).map(section => {
					const pubsInSection = publications[section];
					if (pubsInSection.length === 0) return undefined;
					const elements = getPublicationsSorted(pubsInSection).map((publication: Publication, index: number) => {
						return <PublicationRow publication={publication} key={index}/>
					})
					return (<section className={"publicationSection"}>
						<h2>{section}</h2>
						<table>
							<thead>
							<tr>
								<th className={"titleColumn"}>Title</th>
								<th className={"dateColumn"}>Date</th>
								<th className={"authorsColumn"}>Authors</th>
								<th className={"publicationColumn"}>Publication</th>
								<th className={"iconColumn"}/>
							</tr>
							</thead>
							<tbody>
							{elements}
							</tbody>
						</table>
					</section>)
				})
			}
		</div>);
	}

}
