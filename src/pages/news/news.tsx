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
		title: "Never Gonna",
		content: LoremIpsum.generate(20),
		date: {year: 2020, month: 9},
		link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstleyVEVO"
	},
	{
		title: "Flight of the Parrot",
		content: LoremIpsum.generate(20),
		date: {year: 2020, month: 9},
		link: "https://youtu.be/v2SL5_9yxYQ?t=56"
	},
	{
		title: "Zebediah",
		content: LoremIpsum.generate(20),
		date: {year: 2020, month: 9},
		link: "https://www.youtube.com/watch?v=lOfZLb33uCg&amp;ab_channel=alyankovicVEVO"
	},
	{
		title: "Nice",
		content: LoremIpsum.generate(20),
		date: {year: 2020, month: 9},
		link: "https://www.youtube.com/watch?v=IJNR2EpS0jw&amp;ab_channel=DumbWays2Die&ab_channel=DumbWays2Die"
	},
];

function getDateStamp(news: News): number {
	return (news.date.year * 100) + ((news.date.month ?? 0) * 10) + (news.date.day ?? 0);
}

export function getSortedNews(): News[] {
	return news.sort((a, b) => {
		return getDateStamp(a) - getDateStamp(b);
	});
}
