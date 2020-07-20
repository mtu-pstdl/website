/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import * as React from "react";
import {Publication} from "./publications";
import {Link as LinkIcon} from "@material-ui/icons";

export interface PublicationRowProps {
	publication: Publication;
}

export interface PublicationRowState {

}

export class PublicationRow extends React.Component<PublicationRowProps, PublicationRowState> {

	public constructor(props: PublicationRowProps) {

		super(props);

		this.getDateString = this.getDateString.bind(this);

	}

	private getDateString(): string {
		return this.props.publication.date.toLocaleDateString("en-US", {
			month: "short",
			year: "numeric"
		});
	}

	public render(): React.ReactElement {
		return (<tr className={"PublicationRow"}>
			<td>{this.props.publication.title}</td>
			<td>{this.getDateString()}</td>
			<td>{this.props.publication.authors.join(", ")}</td>
			<td>{this.props.publication.publication}</td>
			<td>{this.props.publication.url ? <a href={this.props.publication.url} target={"_blank"} rel={"noopener noreferrer"}><LinkIcon className={"icon"}/></a> : <div/>}</td>
		</tr>);
	}

}