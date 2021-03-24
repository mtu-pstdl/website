/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import React, {ReactElement, useState} from "react";
import {AstraBackground} from "../astra/Astra";
import {Firebase, Publication} from "../../data/Firebase";
import "./PublicationsPage.css";
import {useAsync} from "react-async-hook";
import {default as firebase} from 'firebase/app';
import 'firebase/firestore';
import {CircularProgress, LinearProgress} from "@material-ui/core";
import {ExpandMore} from "@material-ui/icons";

export function PublicationsPage(): ReactElement {


	const [publications, setPublications] = useState<Publication[]>([]);
	const [nextKey, setNextKey] = useState<firebase.firestore.QueryDocumentSnapshot | undefined>(undefined);
	const [isLoading, setIsLoading] = useState(false);

	async function handleFetch(): Promise<boolean> {
		setIsLoading(true);
		const set = await Firebase.fetchPublications(nextKey);
		setPublications(publications.concat(set.publications));
		setNextKey(set.key);
		setIsLoading(false);
		return true;
	}

	const req = useAsync(handleFetch, []);

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
						<th>Title</th>
						<th>Date</th>
						<th>Authors</th>
						<th>Publication</th>
					</tr>
					</thead>
					<tbody>
					{publications.map((publication, i) => {
						return (
							<tr className={"row"} key={i}>
								<td>{publication.title}</td>
								<td>{publication.date.toLocaleDateString()}</td>
								<td>{publication.authors.join(", ")}</td>
								<td>{publication.publication}</td>
							</tr>
						)
					})}
					</tbody>
				</table>
				{isLoading ? <CircularProgress/> : <ExpandMore className={"button"} onClick={handleFetch}/>}
			</div>
		)}
	</div>);

}
