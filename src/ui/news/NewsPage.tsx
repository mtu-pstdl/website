/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import React, {ReactElement} from "react";
import {NewsView} from "./NewsView";
import "./NewsPage.css"
import {AstraBackground} from "../astra/Astra";
import {useAsync} from "react-async-hook"
import {Firebase} from "../../data/Firebase";
import {LinearProgress} from "@material-ui/core";

export function NewsPage(): ReactElement {

	const req = useAsync(Firebase.fetchNews, []);

	return (<div className={"NewsPage main"}>
		<AstraBackground/>
		<h2>News</h2>
		{req.loading && <LinearProgress />}
		{req.error && <div>Error: {req.error.message}!</div>}
		{req.result && (<div className={"elements"}>
			{
				req.result.map((n, i) => {
					return <NewsView key={i} news={n}/>
				})
			}
		</div>)}
	</div>);

}
