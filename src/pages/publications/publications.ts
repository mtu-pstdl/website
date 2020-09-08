/**
 * Elijah Cobb
 * elijah@elijahcobbcom
 * elijahcobbcom
 * githubcom/elijahjcobb
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

const PAUL = "van Susante P";
const MARCELLO = "Guadagno M";
export const labPublicationAuthors: string[] = [PAUL, MARCELLO];

export const publications: { [sectionTitle: string]: Publication[] } = {
	"Journal Papers": [
		{
			title: "Analytical models and laboratory measurements of the soil-tool interaction force to push a narrow tool through JSC-1a lunar simulant and Ottawa sand at different cutting depths",
			date: {year: 2010},
			authors: ["King, RH", PAUL, "Gefreh, M"],
			publication: "Journal of Terramechanics",
			url: "https://wwwsciencedirectcom/science/article/abs/pii/S0022489810000595?via%3Dihub"
		},
		{
			title: "Influence of Rocking Motion on Vibratory Roller-Based Measurement of Soil Stiffness",
			date: {year: 2010, month: 7},
			authors: ["Facas NW", PAUL, "Mooney, MA"],
			publication: "Journal of Engineering Mechanics",
			url: "https://ascelibraryorg/doi/abs/101061/%28ASCE%29EM1943-78890000132"
		},
		{
			title: "A Cryogenic, Liquid-mirror Telescope on the Moon, to Study the Early Universe",
			date: {year: 2008},
			authors: ["Angel RA", "Worden SP", "Borra EF", "Eisenstein DJ", "Foing B", "Hickson P", "Josset J-L", "Ma KB", "Seddiki O", "Sivanadam S", "Thibault S", PAUL],
			publication: "The Astrophysical Journal",
			url: "https://iopscienceioporg/article/101086/588034/meta"
		},
		{
			title: "Nonlinear Lumped Parameter Modeling of Vibratory Roller Compactor",
			date: {year: 2008, month: 8},
			authors: [PAUL, "Mooney MA"],
			publication: "Journal of Engineering Mechanics",
			url: "https://ascelibraryorg/doi/abs/101061/%28ASCE%290733-9399%282008%29134%3A8%28684%29"
		},
		{
			title: "A condominium of observatories on the Moon, considerations of an integrated approach",
			date: {year: 2005, month: 7},
			authors: [PAUL, "Heiss K"],
			publication: "Journal of the Washington Academy of Science",
			url: "https://wwwjstororg/stable/24531184"
		},
		{
			title: "Study towards construction and operations of large lunar telescopes",
			date: {year: 2003},
			authors: [PAUL],
			publication: "Advances in Space Research",
			url: "https://wwwsciencedirectcom/science/article/abs/pii/S0273117703005635"
		}
	],
	"Dissertations": [

	],
	"Theses": [

	],
	"Conference Proceedings & Other Publications": [
		{
			title: "Research results and prototype development and testing for water extraction from polyhydrated sulphate rock on Mars",
			date: {year: 2020, month: 11},
			authors: [PAUL, "Allen J"],
			publication: "AIAA ASCEND"
		},
		{
			title: "Commissioning and Testing of Dusty Thermal Vacuum Chamber Designed for Lunar Environment Simulation",
			date: {year: 2020, month: 11},
			authors: [MARCELLO, PAUL],
			publication: "AIAA ASCEND"
		},
		{
			title: "The Snow Badger Mission Concept: Trenching for Ice with Humans and Robots",
			date: {year: 2020, month: 4},
			authors: ["Cannon KM", "Mueller RP", "Deutsch AN", "Colaprete AC", "Sowers G", "Drever C", "Li S", "Secel J", PAUL, "Britt DT"],
			publication: "Lunar Surface Science Workshop"
		},
		{
			title: "Providing Wired Power and Data in Lunar Permanently Shadowed Regions with Rover-Deployed Superconducting Tether",
			date: {year: 2020, month: 4},
			authors: [MARCELLO, PAUL],
			publication: "ASCE"
		},
		{
			title: "NASA Lunabotics Robotic Mining Competition: 10th Anniversary (2010-2019): Taxonomy and Technology Review",
			date: {year: 2020, month: 4},
			authors: ["Mueller R", PAUL, "Reiners E", "Metzger PT"],
			publication: "ASCE"
		},
		{
			title: "LOON–An Integrated Development Vision for the pre-2100 Lunar Industrial Town",
			date: {year: 2020, month: 4},
			authors: ["Montes J", "Hudgins E", "Cohen L", "Schingler J", PAUL, "Lordos G", "Cannon K", "Barrett JP"],
			publication: "ASCE"
		},
		{
			title: "Water Extraction from Rock Gypsum on Mars",
			date: {year: 2020, month: 4},
			authors: [PAUL, "Allen J", "Eisele T", "Medici E", "Foetisch MS", "Fitzgerald Z,", "Zacny K"],
			publication: "ASCE"
		},
		{
			title: "Proper Sizing of Lunar and Mars ISRU Excavation Hardware",
			date: {year: 2020, month: 4},
			authors: [PAUL],
			publication: "ASCE"
		},
		{
			title: "RedWater: Approach for Mining Water from Mars' Ice Deposits Buried 10s of Meters Deep",
			date: {year: 2019, month: 7},
			authors: ["Zacny K", "Mank Z", "Buchbinder M", "Sabahi D", "Hecht M", "Putzig N", PAUL],
			publication: " Ninth International Conference on Mars"
		},
		{
			title: "Poly-hydrated sulfate mining and water extraction on Mars; experimental results and system requirements",
			date: {year: 2019, month: 6},
			authors: [PAUL, "Allen J", "Eisele T", "Medici E", "Foetisch MS", "Zacny K", "Fitzgerald Z"],
			publication: "Proceedings of the Space Resources Roundtable and Planetary and Terrestrial Mining Sciences Symposium"
		},
		{
			title: "Lunar ISRU and design and sizing of regolith excavation & handling hardware",
			date: {year: 2019, month: 6},
			authors: [PAUL],
			publication: "ISDC"
		},
		{
			title: "Water mining from rock gypsum on Mars",
			date: {year: 2019, month: 10},
			authors: [PAUL, "Allen J", "Eisele T", "Medici E", "Foetisch MS", "Fitzgerald Z", "Zacny K"],
			publication: "70th International Astronautical Congress"
		},
		{
			title: "Water mining methods for the Moon and Mars",
			date: {year: 2019, month: 10},
			authors: [PAUL, "Zacny K"],
			publication: "70th International Astronautical Congress"
		},
		{
			title: "Proposed New Testing Facility for Cold and Operational Long Duration Testing of Lunar and Mars ISRU and Mobility",
			date: {year: 2019, month: 7},
			authors: [PAUL, "Alger R"],
			publication: "Lunar ISRU Workshop: \"Developing a New Space Economy through Lunar Resources and their Utilization\""
		},
		{
			title: "Environmental Constraints of Non-Mechanical Excavation of Water from Gypsum on the Martian Surface",
			date: {year: 2019, month: 5},
			authors: ["Bayani-Ahanger S", "Medici EF", PAUL, "Eisele T", "Allen JS"],
			publication: "Interpore 11th Annual Meeting"
		},
		{
			title: "Gypsum and other evaporites as a potential source for water extraction on Mars: experimental update",
			date: {year: 2018, month: 9},
			authors: [PAUL, "Allen J", "Eisele T", "Medici E", "Zacny K"],
			publication: "AIAA Space Forum"
		},
		{
			title: "RedWater: Extraction of Water from Mars' Ice Deposits",
			date: {year: 2018, month: 6},
			authors: ["Zacny K", "Hecht M", "Putzig N", "Sabahi D", PAUL],
			publication: "Space Resources Roundtable and Planetary and Terrestrial Mining Sciences Symposium"
		},
		{
			title: "Hard rock water jet mining, a novel method to extract water from poly-hydrated sulphates on Mars",
			date: {year: 2018, month: 6},
			authors: [PAUL, "Allen J", "Eisele T", "Medici E", "Zacny K"],
			publication: "Space Resources Roundtable and Planetary and Terrestrial Mining Sciences Symposium"
		},
		{
			title: "Minerals from Space:  Terrestrial and Extra-terrestrial Perspectives",
			date: {year: 2018, month: 4},
			authors: [PAUL, "Gertsch LL"],
			publication: "ASCE"
		},
		{
			title: "Robotic Mars and Lunar Landing Pad Construction Using In-Situ Rocks",
			date: {year: 2018, month: 4},
			authors: [PAUL, "Zacny K", "Hedlund M", "Atkinson J", "Gelino N", "Mueller R"],
			publication: "ASCE"
		},
		{
			title: "Earth & Space 2016 Conference Proceedings",
			date: {year: 2016, month: 4},
			authors: ["Malla R", "Agui J", PAUL],
			publication: "ASCE"
		},
		{
			title: "Long Term Environmental Monitoring: Necessary Strategy and Integrated Technologies to Ensure Successful Science, Resource Utilization, and Planetary Protection during Human Exploration",
			date: {year: 2017, month: 3},
			authors: ["Bleacher JE", "Conrad PG", "Domagal-Goldman SD", "Evans CA", "Glavin GP", "Glotch TD", "Graff TG", "Guzewich SD", "Lewis R", "Lupisella ML", "McAdam A", "Niles PB", "Petro NE", "Rogers AD", "Skinner J", "Stern JC", PAUL, "Trainer MG", "Young KE", "Bell MS", "Hoffman SJ", "Needham DH", "Hays LE", "Hurowitz JA"],
			publication: "Planetary Science Vision 2050 workshop"
		},
		{
			title: "The Possible Strategic Significance of Mid-Latitude Ice Deposits to a Potential Future Human Mission to Mars",
			date: {year: 2017, month: 9},
			authors: ["Beaty DW", "Hays LE", "Davis R", "Bussey B", "Abbud-Madrid A", "Boucher D", "Gertsch L", "Hoffman SJ", "Kleinhenz J", "Mueller R,", PAUL, "Whetsel C", "Zbinden E"],
			publication: "Sixth International Conference on Mars Polar Science and Exploration"
		},
		{
			title: "Engineering Sensitivities to Ore Characteristics for Water Resources on Mars and Implications for Resource Exploration Approaches: M-WIP Study, Part 3",
			date: {year: 2016, month: 6},
			authors: ["Whetsel C", "Abbud-Madrid A", "Beaty DW", "Boucher D", "Bussey B", "Davis R", "Gertsch L", "Hays L", "Kleinhenz J", "Meyer M", "Moats M", "Mueller R", "Paz A", "Suzuki N", PAUL, "Zbinden E"],
			publication: "Space Resources Roundtable and Planetary and Terrestrial Mining Sciences Symposium"
		},
		{
			title: "Engineering Analysis of Candidate Ore Cases for ISRU Water Production on Mars: The M-WIP Study, Part 2",
			date: {year: 2016, month: 6},
			authors: [PAUL, "Abbud-Madrid A", "Beaty D", "Boucher D", "Bussey B", "Davis R", "Gertsch L", "Hays L", "Kleinhenz J", "Meyer M", "Moats M", "Mueller R", "Paz A", "Suzuki N", "Whetsel C", "Zbinden E"],
			publication: "Space Resources Roundtable and Planetary and Terrestrial Mining Sciences Symposium"
		},
		{
			title: "Description of Water Resources on Mars that have the Potential to Become Reserves as Part of a Human Exploration Zone, The M-WIP Study, Part 1",
			date: {year: 2016, month: 6},
			authors: ["Beaty D", "Abbud-Madrid A", "Boucher D", "Bussey B", "Davis R", "Gertsch L", "Hays L", "Kleinhenz J", "Meyer M", "Moats M", "Mueller R", "Paz A", "Suzuki N", PAUL, "Whetsel C", "Zbinden E"],
			publication: "Space Resources Roundtable and Planetary and Terrestrial Mining Sciences Symposium"
		},
		{
			title: "Report of the Mars Water In-Situ Resource Utilization (ISRU) Planning (M-WIP) Study",
			date: {year: 2016, month: 4},
			authors: ["Abbud-Madrid A", "Beaty DW", "Boucher D", "Bussey B", "Davis R", "Gertsch L", "Hays LE", "Kleinhenz J", "Meyer MA", "Moats M", "Mueller RP", "Paz A", "Suzuki N", PAUL, "Whetsel C", "Zbinden EA"],
			publication: "NASA",
			url: "http://mepagnasagov/reportscfm"
		},
		{
			title: "Successes and Challenges in Implementation and Running of the First ME-Practice Class in the 2nd Undergraduate Year as Part of a Curriculum Revision",
			date: {year: 2016, month: 6},
			authors: [PAUL, "Barr NB", "Blough J", "De Clerck JP", "Miller M", "Miskioglu I", "Odegard GM"],
			publication: "ASEE"
		},
		{
			title: "Design, Test and Simulation of Lunar and Mars Landing Pad Soil Stabilization Built with In-Situ Rock Utilization",
			date: {year: 2016},
			authors: [PAUL, "Metzger PT"],
			publication: "Earth & Space 2016 Conference, ASCE"
		},
		{
			title: "Environmental Dynamics of the EZ: A Measurement Priority for Science and Resource Exploration",
			date: {year: 2015, month: 10},
			authors: ["Conrad PG", "Bleacher JE", PAUL],
			publication: "Landing Site/Exploration Zone Workshop for Human Missions to the surface of Mars"
		},
		{
			title: "Using Direct Information Literacy Assessment to Improve Mechanical Engineering Student Learning - A Report on Rubric Analysis of Student Research Assignments",
			date: {year: 2015, month: 6},
			authors: ["Phillips M", "Lucchesi S", PAUL],
			publication: "ASEE"
		},
		{
			title: "Curriculum Revision to Better Integrate Mechanical Engineering Science and Practice in the 2nd and 3rd Undergraduate Years",
			date: {year: 2014},
			authors: ["Miller M", PAUL],
			publication: "ASEE Annual Conference"
		},
		{
			title: "Parametric Optimization and Prediction Software for Excavation and Prospecting Tasks",
			date: {year: 2013},
			authors: ["Zacny K", "Chu P", "Paulsen G", "Spring J", "Hedlund M", "Craft J", PAUL, "Mueller R", "Galloway G", "Mantovani J"],
			publication: "AIAA Space 2013 Conference and Exposition"
		},
		{
			title: "Landing Pad Construction Rover Attachment Development",
			date: {year: 2012},
			authors: [PAUL],
			publication: "Earth & Space 2012 conference, ASCE"
		},
		{
			title: "A Review of Extra-Terrestrial Mining Robot Concepts",
			date: {year: 2012},
			authors: ["Mueller RP", PAUL],
			publication: "Earth & Space 2012 conference, ASCE"
		},
		{
			title: "A Review of Lunar Regolith Excavation Robotic Device Prototypes",
			date: {year: 2011},
			authors: ["Mueller RP", PAUL],
			publication: "AIAA Space 2011 conference"
		},
		{
			title: "Case Studies in Application of System Engineering Practices to Capstone Projects",
			date: {year: 2011},
			authors: ["Schmidt PL", "Morris T", "Zalewski J", "Carmen CL", PAUL],
			publication: "ASEE conference"
		},
		{
			title: "Lunar Landing Pad Construction Technologies Mounted on Rovers",
			date: {year: 2011},
			authors: [PAUL],
			publication: "2nd Workshop on Lunar and Martian Plume Effects and Mitigation"
		},
		{
			title: "Lunar Excavation Systems at the Colorado School of Mines",
			date: {year: 2010, month: 10},
			authors: ["Dreyer CB", PAUL],
			publication: "Workshop for the Lunar Applications of Mining and Mineral Beneficiation"
		},
		{
			title: "Lunar and Planetary Excavation Systems: Lessons Learned at the Colorado School of Mines",
			date: {year: 2010, month: 6},
			authors: [PAUL, "Dreyer CB"],
			publication: "First Joint Space Resources Roundtable and Planetary and Terrestrial Mining Sciences Symposium"
		},
		{
			title: "Comparing Blade/Soil Interaction Models in a Matlab Program to Measurements of Forces to Push Narrow Rods Through Sand and Simulant Materials for Design of Extraterrestrial Soil Handling Machines",
			date: {year: 2010, month: 6},
			authors: ["King RH", PAUL, "Gefreh M"],
			publication: "First Joint Space Resources Roundtable and Planetary and Terrestrial Mining Sciences Symposium"
		},
		{
			title: "Comparison of Lance Blade Data and Analytical Force Models",
			date: {year: 2010, month: 6},
			authors: ["King RH ", PAUL, "Mueller RP"],
			publication: "First Joint Space Resources Roundtable and Planetary and Terrestrial Mining Sciences Symposium"
		},
		{
			title: "Finite Element Method to Calculate Forces and Stresses on Blades Excavating Lunar Simulants",
			date: {year: 2010, month: 6},
			authors: [PAUL, "King RH"],
			publication: "First Joint Space Resources Roundtable and Planetary and Terrestrial Mining Sciences Symposium"
		},
		{
			title: "Lunar and Planetary Excavation Prototype Development and Testing at the Colorado School of Mines",
			date: {year: 2010},
			authors: [PAUL, "Dreyer CB"],
			publication: "Earth and Space 2010, Engineering, Science, Construction, and Operations in Challenging Environments"
		},
		{
			title: "Lunar Excavator Validation",
			date: {year: 2009},
			authors: [PAUL],
			publication: "Energid Technologies Corporation"
		},
		{
			title: "In-Situ Geotechnical Measurement Evaluation – RESOLVE year 2 final report",
			date: {year: 2008, month: 4},
			authors: ["King RH ", PAUL],
			publication: "NASA / CSM"
		},
		{
			title: "Geotechnical Properties of the JSC1-A Lunar Simulant",
			date: {year: 2007, month: 6},
			authors: ["King RH ", PAUL],
			publication: "PTMSS"
		},
		{
			title: "Final Report, NIAC Phase II, A Deepfield Infrared Observatory Near the Lunar Pole",
			date: {year: 2007, month: 8},
			authors: ["Angel RA", "Worden SP", PAUL],
			publication: "NASA NIAC"
		},
		{
			title: "MPED: An ISRU Bucket Ladder Excavator Demonstrator System",
			date: {year: 2007, month: 7},
			authors: ["Arbuckle D", "Rodriguez G", "Slane FA", "Johnson L", PAUL, "Rodriguez JG"],
			publication: "NASA JSC"
		},
		{
			title: "Lunar Frontier Transport System",
			date: {year: 2007, month: 6},
			authors: ["Pearson J", "Wykes H", "Levin E", "Oldson J", "Heiss K", PAUL],
			publication: "Rutgers Symposium on Lunar Settlements"
		},
		{
			title: "Intelligent Soil Compaction Systems, Interim Report",
			date: {year: 2007, month: 2},
			authors: ["Mooney MA", "White DJ", PAUL],
			publication: "NCHRP Transportation Research Board of The National Academies"
		},
		{
			title: "Excavation System Comparison: Bucket Wheel vs Bucket Ladder",
			date: {year: 2006},
			authors: ["Johnson LL", PAUL],
			publication: "Space Resources Roundtable VIII"
		},
		{
			title: "Development of a Lunar Water Astroparticle Observatory Using In Situ Resources",
			date: {year: 2006},
			authors: ["Heiss K", "Ignatiev A", PAUL],
			publication: "Space Resources Roundtable VIII"
		},
		{
			title: "A lunar liquid mirror telescope (LLMT) for deep-field infrared observations near the lunar pole",
			date: {year: 2006},
			authors: ["Angel R", "Eisenstein D", "Sivanandam S", "Worden SP", "Burge J", "Borra E", "Gosselin C", "Seddiki O", "Hickson P", "Ma KB", "Foing B", "Josset JL", "Thibault S", PAUL],
			publication: "SPIE"
		},
		{
			title: "ISRU-Based Development of a Lunar Water Astroparticle Observatory",
			date: {year: 2006, month: 10},
			authors: ["Ignatiev A", "Heiss K", PAUL],
			publication: "International Astronautical Conference"
		},
		{
			title: "ISRU-Based Development of a Lunar Water Astroparticle Observatory",
			date: {year: 2006},
			authors: ["Heiss K", "Ignatiev A", PAUL],
			publication: "PTMSS 2006"
		},
		{
			title: "Wave-propagation and lumped-mass modeling of a vibratory rigid drum on an elastic half-space",
			date: {year: 2006},
			authors: [PAUL, "Martin PA", "Mooney MA"],
			publication: "USNCTAM 2006"
		},
		{
			title: "The Influence of Heterogeneity on Vibratory Roller Response",
			date: {year: 2005},
			authors: ["Mooney MA", "Rinehart RV", PAUL],
			publication: "GeoCongress 2006"
		},
		{
			title: "Modeling Vibratory Roller Compaction of Soil Using a Two-DOF Nonlinear Lumped Parameter Model",
			date: {year: 2005},
			authors: ["Mooney MA", PAUL, "Chaghajerdi A"],
			publication: "McMath 2005, Section 4 of Session 98: \"Nonlinear Soil-Structure Interaction and Soil Dynamics: Testing and Simulation\""
		},
		{
			title: "Human aided construction of a large lunar telescope",
			date: {year: 2004},
			authors: [PAUL],
			publication: "CCACS, NASA"
		},
		{
			title: "Economic Rationale for Lunar Exploration",
			date: {year: 2003, month: 10},
			authors: ["Blair B", PAUL],
			publication: "Space Resources Roundtable V"
		},
		{
			title: "Large Lunar Telescope Construction, An Example",
			date: {year: 2003},
			authors: [PAUL],
			publication: " ILC2003 / ILEWG 5"
		},
		{
			title: "Lunar Propellants And \"Gateway\" Space Transportation Architectures",
			date: {year: 2003},
			authors: ["Blair BR", "Diaz J", PAUL],
			publication: "ILC2003 / ILEWG 5"
		},
		{
			title: "Moon base design concepts for lunar exploration and resource utilization",
			date: {year: 2003, month: 10},
			authors: ["Mohanty S", "Imhof B", PAUL],
			publication: "54th International Astronautical Congress of the International Astronautical Federation, the International Academy of Astronautics, and the International Institute of Space Law"
		},
		{
			title: "New Concepts for Permanently Manned Lunar Bases, Report of the Lunar Base Design Workshop, held in Noordwijk, The Netherlands from 10–21 June 2002",
			date: {year: 2003, month: 1},
			authors: ["Imhof B", "Mohanty S", "Jurgen H", PAUL, "Volp J"],
			publication: "AIP"
		},
		{
			title: "European Lunar Base Concepts",
			date: {year: 2003},
			authors: ["Mohanty S", "Imhof B", PAUL],
			publication: "International Conference On Environmental Systems - Aerospace Architecture II: Habitats, Hardware, and Philosophy"
		},
		{
			title: "Lunar South Pole Infrared Telescope Facility",
			date: {year: 2002, month: 10},
			authors: [PAUL],
			publication: "COSPAR Scientific Assembly, The Second World Space Congress"
		},
		{
			title: "Study towards construction and operations of large lunar telescopes",
			date: {year: 2002, month: 10},
			authors: [PAUL],
			publication: "34th COSPAR Scientific Assembly, The Second World Space Congress"
		},
		{
			title: "Design and Construction of a Lunar South Pole Infrared Telescope (LSPIRT)",
			date: {year: 2002, month: 10},
			authors: [PAUL],
			publication: "34th COSPAR Scientific Assembly, The Second World Space Congress"
		},
		{
			title: "Lunar Base Design and Operation Study (LB-DAOS 1)",
			date: {year: 2002, month: 6},
			authors: ["Imhof B", "Mohanty S", "Rombaut HJ", PAUL, "Volp J"],
			publication: "Earth-Like Planets and Moons, Proceedings of the 36th ESLAB Symposium"
		},
		{
			title: "Scenario description of the construction of a Lunar South Pole Infrared Telescope (LSPIRT)",
			date: {year: 2002, month: 6},
			authors: [PAUL],
			publication: "Earth-like planets and moons, Proceedings of the 36th ESLAB Symposium"
		},
		{
			title: "Study Towards Human Aided Construction of Large Lunar Telescopes",
			date: {year: 2002},
			authors: [PAUL],
			publication: "The Moon Beyond 2002: Next Steps in Lunar Science and Exploration"
		},
		{
			title: "Design and construction of a lunar south pole infrared telescope",
			date: {year: 2002},
			authors: [PAUL],
			publication: "ISDC 2002"
		},
		{
			title: "Scenario Description of the Construction of a Lunar South Pole Infrared Telescope (LSPIRT)",
			date: {year: 2002},
			authors: [PAUL],
			publication: "Space 2002 and Robotics 2002 conference"
		},
		{
			title: "Outreach and Education from ESA's SMART-1 Mission to the Moon",
			date: {year: 2001},
			authors: ["Heather DJ", "Foing BH", PAUL, "Almeida M"],
			publication: "32nd Annual Lunar and Planetary Science Conference"
		},
		{
			title: "Results and Recommendations from the International Conference on the Exploration and Utilisation of the Moon 4 (ICEUM4)",
			date: {year: 2001, month: 3},
			authors: ["Foing B H", "Heather D J", "Duke M", "Racca G", "Pieters C", "Mizutani H", "Galimov E", "Dunkin S K", PAUL, "Frischauf N", "Almeida M", "Participants of Iceum4"],
			publication: "32nd Annual Lunar and Planetary Science Conference"
		},
		{
			title: "Lunar Explorers Society: Goals And Activities",
			date: {year: 2001},
			authors: ["Foing B", PAUL, "Almeida M", "Heather D", "Duke M", "Dunkin S"],
			publication: "Earth, Moon, and Planets, Vol 85/86, p 533-538, KLUWER"
		},
		{
			title: "The Highlights from ICEUM4, the 4th International Conference on the Exploration and Utilisation of the Moon",
			date: {year: 2001},
			authors: ["Foing B H", "Duke M", "Galimov E", "Mizutani H", "Pieters C", "Racca G", "Heather D J", "Frischauf N", PAUL, "Almeida M"],
			publication: "Earth, Moon, and Planets, Vol 85/86, p 533-538, KLUWER"
		},
		{
			title: "Design and construction study of a Lunar South Pole Infrared Telescope (LSPIRT)",
			date: {year: 2001},
			authors: [PAUL],
			publication: "TU-Delft and the European Space Agency"
		},
		{
			title: "Earthrise 1, building a stripmining base on the moon",
			date: {year: 2000},
			authors: [PAUL],
			publication: "Space 2000 and Robotics 2000 Conference"
		},
		{
			title: "Earthrise I, Design of a stripmining base on the Moon",
			date: {year: 1999},
			authors: [PAUL],
			publication: "TU-Delft Civil Engineering Project Education final report"
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
