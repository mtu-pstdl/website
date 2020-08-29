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

		const yearString = this.props.publication.date.year + "";
		let monthString: string | undefined;

		switch (this.props.publication.date.month) {
			case 1:
				monthString = "Jan";
				break;
			case 2:
				monthString = "Feb";
				break;
			case 3:
				monthString = "Mar";
				break;
			case 4:
				monthString = "Apr";
				break;
			case 5:
				monthString = "May";
				break;
			case 6:
				monthString = "Jun";
				break;
			case 7:
				monthString = "Jul";
				break;
			case 8:
				monthString = "Aug";
				break;
			case 9:
				monthString = "Sep";
				break;
			case 10:
				monthString = "Oct";
				break;
			case 11:
				monthString = "Nov";
				break;
			case 12:
				monthString = "Dec";
				break;
		}

		const parts: string[] = [];
		if (monthString) parts.push(monthString);
		parts.push(yearString);

		return parts.join(", ");

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
