/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

export type Publication = {
	title: string;
	date: {
		year: number;
		month?: number;
	};
	authors: string[];
	publication: string;
	url?: string;
}


export const publications: { [sectionTitle: string]: Publication[] } = {
	"Journal Articles": [
		{
			title: "Analytical models and laboratory measurements of the soil-tool interaction force to push a narrow tool through JSC-1a lunar simulant and Ottawa sand at different cutting depths.",
			date: {year: 2010},
			authors: ["Paul van Susante"],
			publication: "Journal of Terramechanics",
		},
		{
			title: "Influence of Rocking Motion on Vibratory Roller-Based Measurement of Soil Stiffness",
			date: {year: 2010, month: 7},
			authors: ["Paul van Susante"],
			publication: "Journal of Engineering Mechanics"
		},
		{
			title: "A Cryogenic, Liquid-mirror Telescope on the Moon, to Study the Early Universe",
			date: {year: 2008},
			authors: ["Paul van Susante"],
			publication: "The Astrophysical Journal"
		},
		{
			title: "Nonlinear Lumped Parameter Modeling of Vibratory Roller Compactor",
			date: {year: 2008, month: 8},
			authors: ["Paul van Susante"],
			publication: "Journal of Engineering Mechanics"
		},
		{
			title: "A condominium of observatories on the Moon, considerations of an integrated approach.",
			date: {year: 2005, month: 7},
			authors: ["Paul van Susante"],
			publication: "Journal of the Washington Academy of Science"
		},
		{
			title: "Study towards construction and operations of large lunar telescopes.",
			date: {year: 2003},
			authors: ["Paul van Susante"],
			publication: "Advances in Space Research"
		}
	],
	"Dissertations": [

	],
	"Theses": [

	],
	"Conference Proceedings": [

	]
};

function getStampForDate(date: {year: number, month?: number}): number {
	return date.year * 10 + (date.month ?? 0);
}

export function getPublicationsSorted(pubs: Publication[]): Publication[] {
	return pubs.sort((p1, p2) => {
		return getStampForDate(p2.date) - getStampForDate(p1.date);
	});
}
