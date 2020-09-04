/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import * as React from "react";
import {MemberCollection, members} from "../members/members";
import {MemberSection} from "../members/MemberSection";

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
		</div>);
	}

}
