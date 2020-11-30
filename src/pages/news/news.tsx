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
		title: "Podcast: Humanity and Beyond",
		date: {month: 10, day: 30, year: 2020},
		content: <p>In this episode with special guest Paul van Susante, Assistant Professor at Michigan Tech University, we discussed many of the challenges that are unique to Mars for ISRU. Challenges such as...</p>,
		link: "https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkcy5idXp6c3Byb3V0LmNvbS8xNDI2NDcxLnJzcw/episode/QnV6enNwcm91dC02MTQ4MTI2"
	},
	{
		title: "Podcast: Cold Star Project",
		date: {month: 6, day: 4, year: 2020},
		content: <p>Dr. Paul van Susante comes with the heritage of the Colorado School of Mines, but is a professor at Michigan Technological University. He is well-known in the Lunar and Mars construction & ISRU field, contributing to CLASS and as co-Investigator on several experiments...</p>,
		link: "https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy81OGNlOTg0L3BvZGNhc3QvcnNz/episode/OThlOWE5NGYtMWNlYi00YmJmLWFiYTktNjA0ODAxYjdjOTc2"
	},
	{
		title: "Artemis Student Challenge: NASA Selects University Teams to Build Technologies for the Moon’s Darkest Areas",
		date: {month: 2, year: 2020, day: 14},
		content: <p>MTU was awarded a grand to develop a small rover to lay lightweight, superconducting cable that tethers to a lander as it traverses craters in permanently shadowed regions. Once in its final destination, the rover acts as a recharging hub and communication relay for other robots working in the area, providing continuous power without requiring direct sunlight.</p>,
		link: "https://www.nasa.gov/feature/langley/artemis-student-challenge-nasa-selects-university-teams-to-build-technologies-for-the-moon-s/"
	},
	{
		title: "Breaking Rocks, Making Water: The Secret Formula for a Trip to Mars?",
		date: {month: 1, day: 31, year: 2018},
		content: <p>Michigan Tech researchers have been awarded a NASA grant to study ways to extract water from gypsum rock on Mars, bringing a human trip to the red planet closer to reality.</p>,
		link: "https://www.mtu.edu/news/stories/2018/january/breaking-rocks-making-water-the-secret-formula-for-a-trip-to-mars.html"
	}
];

function getDateStamp(news: News): number {
	return (news.date.year * 100) + ((news.date.month ?? 0) * 10) + (news.date.day ?? 0);
}

export function getSortedNews(): News[] {
	return news.sort((a, b) => {
		return getDateStamp(b) - getDateStamp(a);
	});
}
