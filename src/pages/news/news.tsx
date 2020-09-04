/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */
import {LoremIpsum} from "../../components/LoremIpsum";

export interface News {
	title: string;
	date: {
		month: number;
		day?: number;
		year: number;
	};
	link?: string;
	content?: string;
}

const news: News[] = [
	{
		title: "Lorem Ipsum",
		content: LoremIpsum.generate(20),
		date: {year: 2020, month: 9},
		link: "https://google.com"
	}
];

function getDateStamp(news: News): number {
	return (news.date.year * 100) + ((news.date.month ?? 0) * 10) + (news.date.day ?? 0);
}

export function getSortedNews(): News[] {
	return news.sort((a, b) => {
		return getDateStamp(a) - getDateStamp(b);
	});
}
