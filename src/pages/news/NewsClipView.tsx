/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import * as React from "react";
import {News} from "./news";
import "./NewsClipView.css";
import {OpenInNew} from "@material-ui/icons";

export interface NewsClipViewProps {
	news: News;
}

export interface NewsClipViewState {

}

export class NewsClipView extends React.Component<NewsClipViewProps, NewsClipViewState> {

	public constructor(props: NewsClipViewProps) {

		super(props);

		this.state = {};
		this.getDateString = this.getDateString.bind(this);

	}

	private getDateString(): string {
		const contents: number[] = [];
		contents.push(this.props.news.date.month);
		if (this.props.news.date.day !== undefined) contents.push(this.props.news.date.day);
		contents.push(this.props.news.date.year);
		return contents.join("/")
	}

	public render(): React.ReactElement {
		return (<a className={"NewsClipView" + (this.props.news.link ? " NewsClipView-link" : "")} href={this.props.news.link || ""} target={"_blank"} rel={"noopener noreferrer"}>
			<div className={"top"}>
				<span className={"title"}>{this.props.news.title}</span>
				<span className={"date"}>{this.getDateString()}</span>
			</div>
			<div className={"container"}>
				<span className={"content"}>{this.props.news.content}</span>
				<OpenInNew className={"button"}/>
			</div>
		</a>);
	}

}
