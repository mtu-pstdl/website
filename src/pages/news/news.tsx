/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import * as React from "react";

export interface News {
	title: string;
	date: {
		month: number;
		day?: number;
		year: number;
	};
	link?: string;
	content?: React.ReactElement;
}

const news: News[] = [
	{
		title: "Artemis Student Challenge: NASA Selects University Teams to Build Technologies for the Moon’s Darkest Areas",
		date: {month: 2, year: 2020, day: 14},
		content: <p>MTU was awarded a grand to develop a small rover to lay lightweight, superconducting cable that tethers to a lander as it traverses craters in permanently shadowed regions. Once in its final destination, the rover acts as a recharging hub and communication relay for other robots working in the area, providing continuous power without requiring direct sunlight.</p>,
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
