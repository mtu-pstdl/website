/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import React, {ReactElement, PropsWithChildren} from "react";
import Markdown from "react-markdown"
import {News} from "../../data/News";
import {OpenInNew as Link} from "@material-ui/icons";
import "./NewsView.css";

export interface NewsViewProps {
	news: News;
}

export function NewsView(props: PropsWithChildren<NewsViewProps>): ReactElement {

	const content = props.news.get("content")
	const link = props.news.get("link");

	return (<a className={"NewsView" + (link ? " NewsViewClickable" : "")} href={link} target={"_blank"} rel={"noopener noreferrer"}>
		<div className={"left"}>
			<div className={"top"}>
				<span className={"title"}>{props.news.get("title")}</span>
				<span className={"date"}>{props.news.get("date").toLocaleDateString()}</span>
			</div>
			<div className={"bottom"}>
				{content && <Markdown>{content}</Markdown>}
			</div>
		</div>
		<Link style={{display: link ? "block" : "none"}} className={"link"}/>
	</a>);

}
