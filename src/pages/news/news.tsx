/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import * as React from "react";

export interface News {
	title: string;
	subtitle: string;
	date: {
		month?: number;
		day?: number;
		year: number;
	};
	link?: string;
	content?: React.ReactElement;
}

const news: News[] = [

];

function getDateStamp(news: News): number {
	return (news.date.year * 100) + ((news.date.month ?? 0) * 10) + (news.date.day ?? 0);
}

export function getSortedNews(): News[] {
	return news.sort((a, b) => {
		return getDateStamp(a) - getDateStamp(b);
	});
}
