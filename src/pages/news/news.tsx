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
		title: "Artemis Student Challenge: NASA Selects University Teams to Build Technologies for the Moon’s Darkest Areas",
		date: {month: 2, year: 2020, day: 14},
		content: "Almost a quarter of a million miles away from home, the Moon’s permanently shadowed regions are the closest extraterrestrial water source. These craters have remained dark for billions of years, but student-developed technologies can help shine light on all they have to offer.",
		link: "https://www.nasa.gov/feature/langley/artemis-student-challenge-nasa-selects-university-teams-to-build-technologies-for-the-moon-s/"
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
