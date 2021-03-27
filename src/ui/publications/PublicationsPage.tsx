/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import React, {ReactElement} from "react";
import {AstraBackground} from "../astra/Astra";
import "./PublicationsPage.css";
import {useAsync} from "react-async-hook";
import 'firebase/firestore';
import {LinearProgress} from "@material-ui/core";
import {API} from "../../data/API";

export function PublicationsPage(): ReactElement {

	const req = useAsync(API.fetchPublications, []);

	return (<div className={"PublicationsPage"}>
		<AstraBackground/>
		<h2>Publications</h2>
		{req.loading && <LinearProgress />}
		{req.error && <span>Error: {req.error.message}!</span>}
		{req.result && (
			<div className={"content"}>
				<table className={"publications"}>
					<thead>
					<tr className={"header"}>
						<th className={"title"}>Title</th>
						<th className={"date"}>Date</th>
						<th className={"authors"}>Authors</th>
						<th className={"publications"}>Publication</th>
					</tr>
					</thead>
					<tbody>
					{req.result.map((publication, i) => {
						return (
							<tr className={"row"} key={i}>
								<td className={"titleRow"}>{publication.get("title")}</td>
								<td className={"dateRow"}>{publication.get("date").toLocaleDateString()}</td>
								<td>{publication.get("authors").join(", ")}</td>
								<td>{publication.get("publication")}</td>
							</tr>
						)
					})}
					</tbody>
				</table>
			</div>
		)}
	</div>);

}
