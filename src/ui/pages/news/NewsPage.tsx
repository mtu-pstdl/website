/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import * as React from "react";
import "./NewsPage.css";
import {getSortedNews} from "../../../data/news";
import {NewsClipView} from "./NewsClipView";

export interface NewsPageProps {

}

export interface NewsPageState {

}

export class NewsPage extends React.Component<NewsPageProps, NewsPageState> {

	public constructor(props: NewsPageProps) {

		super(props);

		this.state = {};

	}

	public render(): React.ReactElement {
		return (<div className={"NewsPage main"}>
			<h2>News</h2>
			<div className={"container"}>
				{getSortedNews().map(news => {
					return <NewsClipView news={news}/>;
				})}
			</div>
		</div>);
	}

}
