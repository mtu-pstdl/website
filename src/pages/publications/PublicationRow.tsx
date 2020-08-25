/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import * as React from "react";
import {Publication} from "./publications";
import {Link as LinkIcon} from "@material-ui/icons";
import "./PublicationRow.css";

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
			<td className={"title"}>{this.props.publication.title}</td>
			<td className={"date"}>{this.getDateString()}</td>
			<td className={"authors"}>{this.props.publication.authors.join(", ")}</td>
			<td className={"publication"}>{this.props.publication.publication}</td>
			<td className={"link"}>{this.props.publication.url ? <a href={this.props.publication.url} target={"_blank"} rel={"noopener noreferrer"}><LinkIcon className={"icon"}/></a> : <div/>}</td>
		</tr>);
	}

}
