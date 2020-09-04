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
		{
			title: "Research results and prototype development and testing for water extraction from polyhydrated sulphate rock on Mars",
			date: {year: 2020, month: 11},
			authors: ["Paul van Susante"],
			publication: "AIAA ASCEND"
		},
		{
			title: "Commissioning and Testing of Dusty Thermal Vacuum Chamber Designed for Lunar Environment Simulation",
			date: {year: 2020, month: 11},
			authors: ["Paul van Susante"],
			publication: "AIAA ASCEND"
		},
		{
			title: "The Snow Badger Mission Concept: Trenching for Ice with Humans and Robots",
			date: {year: 2020, month: 4},
			authors: ["Marcello Guadagno", "Paul van Susante"],
			publication: "Lunar Surface Science Workshop"
		},
		{
			title: "Providing Wired Power and Data in Lunar Permanently Shadowed Regions with Rover-Deployed Superconducting Tether",
			date: {year: 2020, month: 4},
			authors: ["Marcello Guadagno", "Paul van Susante"],
			publication: "ASCE"
		},
		{
			title: "NASA Lunabotics Robotic Mining Competition: 10th Anniversary (2010-2019): Taxonomy and Technology Review",
			date: {year: 2020, month: 4},
			authors: ["Paul van Susante"],
			publication: "ASCE"
		},
		{
			title: "LOON–An Integrated Development Vision for the pre-2100 Lunar Industrial Town",
			date: {year: 2020, month: 4},
			authors: ["Paul van Susante"],
			publication: "ASCE"
		},
		{
			title: "Water Extraction from Rock Gypsum on Mars",
			date: {year: 2020, month: 4},
			authors: ["Paul van Susante"],
			publication: "ASCE"
		},
		{
			title: "Proper Sizing of Lunar and Mars ISRU Excavation Hardware",
			date: {year: 2020, month: 4},
			authors: ["Paul van Susante"],
			publication: "ASCE"
		},
		{
			title: "RedWater: Approach for Mining Water from Mars' Ice Deposits Buried 10s of Meters Deep",
			date: {year: 2019, month: 7},
			authors: ["Paul van Susante"],
			publication: " Ninth International Conference on Mars"
		},
		{
			title: "Poly-hydrated sulfate mining and water extraction on Mars; experimental results and system requirements",
			date: {year: 2019, month: 6},
			authors: ["Paul van Susante"],
			publication: "Proceedings of the Space Resources Roundtable and Planetary and Terrestrial Mining Sciences Symposium"
		},
		{
			title: "Lunar ISRU and design and sizing of regolith excavation & handling hardware",
			date: {year: 2019, month: 6},
			authors: ["Paul van Susante"],
			publication: "ISDC"
		},
		{
			title: "Water mining from rock gypsum on Mars",
			date: {year: 2019, month: 10},
			authors: ["Paul van Susante"],
			publication: "70th International Astronautical Congress"
		},
		{
			title: "Water mining methods for the Moon and Mars",
			date: {year: 2019, month: 10},
			authors: ["Paul van Susante"],
			publication: "70th International Astronautical Congress"
		},
		{
			title: "Proposed New Testing Facility for Cold and Operational Long Duration Testing of Lunar and Mars ISRU and Mobility",
			date: {year: 2019, month: 7},
			authors: ["Paul van Susante"],
			publication: "Lunar ISRU Workshop: \"Developing a New Space Economy through Lunar Resources and their Utilization\""
		},
		{
			title: "Environmental Constraints of Non-Mechanical Excavation of Water from Gypsum on the Martian Surface",
			date: {year: 2019, month: 5},
			authors: ["Paul van Susante"],
			publication: "Interpore 11th Annual Meeting"
		},
		{
			title: "Gypsum and other evaporites as a potential source for water extraction on Mars: experimental update",
			date: {year: 2018, month: 9},
			authors: ["Paul van Susante"],
			publication: "AIAA Space Forum"
		},
		{
			title: "RedWater: Extraction of Water from Mars' Ice Deposits.",
			date: {year: 2018, month: 6},
			authors: ["Paul van Susante"],
			publication: "Space Resources Roundtable and Planetary and Terrestrial Mining Sciences Symposium"
		},
		{
			title: "Hard rock water jet mining, a novel method to extract water from poly-hydrated sulphates on Mars.",
			date: {year: 2018, month: 6},
			authors: ["Paul van Susante"],
			publication: "Space Resources Roundtable and Planetary and Terrestrial Mining Sciences Symposium"
		},
		{
			title: "Minerals from Space:  Terrestrial and Extra-terrestrial Perspectives",
			date: {year: 2018, month: 4},
			authors: ["Paul van Susante"],
			publication: "ASCE"
		},
		{
			title: "",
			date: {year: 0},
			authors: ["Paul van Susante"],
			publication: ""
		},
		{
			title: "",
			date: {year: 0},
			authors: ["Paul van Susante"],
			publication: ""
		},
		{
			title: "",
			date: {year: 0},
			authors: ["Paul van Susante"],
			publication: ""
		},
		{
			title: "",
			date: {year: 0},
			authors: ["Paul van Susante"],
			publication: ""
		},
		{
			title: "",
			date: {year: 0},
			authors: ["Paul van Susante"],
			publication: ""
		},
		{
			title: "",
			date: {year: 0},
			authors: ["Paul van Susante"],
			publication: ""
		},
		{
			title: "",
			date: {year: 0},
			authors: ["Paul van Susante"],
			publication: ""
		},
		{
			title: "",
			date: {year: 0},
			authors: ["Paul van Susante"],
			publication: ""
		},
		{
			title: "",
			date: {year: 0},
			authors: ["Paul van Susante"],
			publication: ""
		},
		{
			title: "",
			date: {year: 0},
			authors: ["Paul van Susante"],
			publication: ""
		},
		{
			title: "",
			date: {year: 0},
			authors: ["Paul van Susante"],
			publication: ""
		},
		{
			title: "",
			date: {year: 0},
			authors: ["Paul van Susante"],
			publication: ""
		},
		{
			title: "",
			date: {year: 0},
			authors: ["Paul van Susante"],
			publication: ""
		},
		{
			title: "",
			date: {year: 0},
			authors: ["Paul van Susante"],
			publication: ""
		},
		{
			title: "",
			date: {year: 0},
			authors: ["Paul van Susante"],
			publication: ""
		},
		{
			title: "",
			date: {year: 0},
			authors: ["Paul van Susante"],
			publication: ""
		},
		{
			title: "",
			date: {year: 0},
			authors: ["Paul van Susante"],
			publication: ""
		},
		{
			title: "",
			date: {year: 0},
			authors: ["Paul van Susante"],
			publication: ""
		},
		{
			title: "",
			date: {year: 0},
			authors: ["Paul van Susante"],
			publication: ""
		},
		{
			title: "",
			date: {year: 0},
			authors: ["Paul van Susante"],
			publication: ""
		},
		{
			title: "",
			date: {year: 0},
			authors: ["Paul van Susante"],
			publication: ""
		},
		{
			title: "",
			date: {year: 0},
			authors: ["Paul van Susante"],
			publication: ""
		},
		{
			title: "",
			date: {year: 0},
			authors: ["Paul van Susante"],
			publication: ""
		},
		{
			title: "",
			date: {year: 0},
			authors: ["Paul van Susante"],
			publication: ""
		},
		{
			title: "",
			date: {year: 0},
			authors: ["Paul van Susante"],
			publication: ""
		},
		{
			title: "",
			date: {year: 0},
			authors: ["Paul van Susante"],
			publication: ""
		},
		{
			title: "",
			date: {year: 0},
			authors: ["Paul van Susante"],
			publication: ""
		},
		{
			title: "",
			date: {year: 0},
			authors: ["Paul van Susante"],
			publication: ""
		},
		{
			title: "",
			date: {year: 0},
			authors: ["Paul van Susante"],
			publication: ""
		},
		{
			title: "",
			date: {year: 0},
			authors: ["Paul van Susante"],
			publication: ""
		},
		{
			title: "",
			date: {year: 0},
			authors: ["Paul van Susante"],
			publication: ""
		},
		{
			title: "",
			date: {year: 0},
			authors: ["Paul van Susante"],
			publication: ""
		},
		{
			title: "",
			date: {year: 0},
			authors: ["Paul van Susante"],
			publication: ""
		},
		{
			title: "",
			date: {year: 0},
			authors: ["Paul van Susante"],
			publication: ""
		},
		{
			title: "",
			date: {year: 0},
			authors: ["Paul van Susante"],
			publication: ""
		},
		{
			title: "",
			date: {year: 0},
			authors: ["Paul van Susante"],
			publication: ""
		},
		{
			title: "",
			date: {year: 0},
			authors: ["Paul van Susante"],
			publication: ""
		},
		{
			title: "",
			date: {year: 0},
			authors: ["Paul van Susante"],
			publication: ""
		},
		{
			title: "",
			date: {year: 0},
			authors: ["Paul van Susante"],
			publication: ""
		},
		{
			title: "",
			date: {year: 0},
			authors: ["Paul van Susante"],
			publication: ""
		}
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
