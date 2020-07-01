/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

export type Publication = {
	title: string;
	year: string;
	authors: string[];
	journal: string;
	url: string;
}

export const publications: Publication[] = [
	{
		title: "Lorem Ipsum",
		year: "2020",
		authors: ["Albert Einstein"],
		journal: "A Good Journal",
		url: "https://www.google.com"
	},
	{
		title: "Dolor Etea",
		year: "2018",
		authors: ["Albert Einstein"],
		journal: "An Ok Journal",
		url: "https://www.google.com"
	}
];