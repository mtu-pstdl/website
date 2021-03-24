/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import React, {ReactElement, PropsWithChildren} from "react";
import Markdown from "react-markdown"
import {News} from "../../data/Firebase";
import {OpenInNew as Link} from "@material-ui/icons";
import "./NewsView.css";

export interface NewsViewProps {
	news: News;
}

export function NewsView(props: PropsWithChildren<NewsViewProps>): ReactElement {

	return (<a className={"NewsView" + (props.news.link ? " NewsViewClickable" : "")} href={props.news.link} target={"_blank"} rel={"noopener noreferrer"}>
		<div className={"left"}>
			<div className={"top"}>
				<span className={"title"}>{props.news.title}</span>
				<span className={"date"}>{props.news.date.toLocaleDateString()}</span>
			</div>
			<div className={"bottom"}>
				<Markdown>{props.news.content}</Markdown>
			</div>
		</div>
		<Link style={{display: props.news.link ? "block" : "none"}} className={"link"}/>
	</a>);

}
