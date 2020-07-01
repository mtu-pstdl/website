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

	}

	public render(): React.ReactElement {
		return (<tr className={"PublicationRow"}>
			<td>{this.props.publication.title}</td>
			<td>{this.props.publication.year}</td>
			<td>{this.props.publication.authors.join(", ")}</td>
			<td>{this.props.publication.journal}</td>
			<td><a href={this.props.publication.url} target={"_blank"} rel={"noopener noreferrer"}><LinkIcon className={"icon"}/></a></td>
		</tr>);
	}

}