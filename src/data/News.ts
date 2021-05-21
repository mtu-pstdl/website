/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import * as Parse from "parse";

export interface NewsProps {
	title: string;
	content?: string;
	date: Date;
	link?: string;
}

export class News extends Parse.Object<NewsProps> {

	public constructor(props: NewsProps) {
		super("News", props);
	}

}
