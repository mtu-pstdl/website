/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

export type Publication = {
	title: string;
	date: Date;
	authors: string[];
	publication: string;
	url?: string;
}

const publications: Publication[] = [
	{
		title: "Analytical models and laboratory measurements of the soil-tool interaction force to push a narrow tool through JSC-1a lunar simulant and Ottawa sand at different cutting depths.",
		date: new Date("2010"),
		authors: ["Paul van Susante"],
		publication: "Journal of Terramechanics",
		url: "google.com"
	}
];

export function getPublicationsSorted(): Publication[] {
	return publications.sort((p1, p2) => {
		return p2.date.getTime() - p1.date.getTime();
	});
}
