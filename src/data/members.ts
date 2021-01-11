/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

export type Member = {
	firstName: string;
	lastName: string;
	email: string;
	linkedIn?: string;
	link?: string;
	profile?: string;
	bio?: string;
	key?: number;
}

export type MemberCollection = {
	title: string;
	detail: boolean;
	members: Member[];
}

export const members: MemberCollection[] = [
	{
		title: "Director",
		detail: true,
		members: [
			{
				firstName: "Dr. Paul",
				lastName: "Van Susante",
				email: "pjvansus@mtu.edu",
				profile: "paul.jpg",
				bio: "Dr. van Susante grew up in The Netherlands. He graduated with a MSc in Civil Engineering from Delft University of Technology in 2001 with a thesis topic of building large telescopes in the permanently shaded lunar polar craters. He did his internship at the European Space Agency in Noordwijk (ESTEC), The Netherlands, and led his award winning senior design team with a lunar base design for lunar He 3 surface mining. In 2002 he started at the Colorado School of Mines at the invitation of Mike Duke to continue lunar telescope work and received a MSc in Engineering Systems in 2004. Since 2003 he has been involved with in-situ Resource Utilization studies and hardware development and testing, he led the development of a first prototype of a lunar bucket ladder, backhoe and performed regolith simulant property testing for RESOLVE. He was faculty advisor for 5 student teams participating in the centennial excavation challenge and lunabotics mining competition from 2008-2012 and now a 6 th team at MTU. In 2010 he was a National Space Grant Faculty Fellow at NASA Kennedy Space Center working on lunar landing pad construction methods and testing. His PhD from CSM in 2011 included modeling of lunar regolith excavation forces. He has worked on numerous SBIR/STTR/NIAC and other grants with numerous aerospace companies and NASA centers on ISRU related research, Lunar and Martian economics and architecture studies. After 7 years as a senior lecturer, he is now an assistant professor at MTU and performs research in the areas of In-situ resource utilization (ISRU) for space exploration and surface operations on the Moon, Mars and Asteroids. His Planetary Surface Technology Development Lab includes simulation, prototype development and test facilities. His research group and Mining Innovation Enterprise perform research in collaboration with several companies for several funded multi-year NASA grants such as extracting water from gypsum rock and buried glaciers on Mars and water extraction from ice in permanently shadowed craters on the Moon. Other aspects of the research include study and prototyping and testing robotic systems for excavation and construction for infrastructure placement such as trenching, roads, landing pads, bulk material movement and beneficiation of source material.",
				linkedIn: "https://www.linkedin.com/in/paul-van-susante-ph-d-6612271/",
				key: 1000000
			}
		]
	},
	{
		title: "PhD Students",
		detail: false,
		members: [
			{
				firstName: "Marcello",
				lastName: "Guadagno",
				email: "mcguadag@mtu.edu",
				profile: "marcello.jpg",
				bio: "Marcello Guadagno (Chell) has a Bachelor's in Mechanical Engineering with minors in Aerospace Engineering, Electrical Engineering, and International Leadership (MTU 2019). He has 5 years of end-to-end space mission engineering and program management experience. During his undergrad, Marcello led the development of several smallsat missions while at Michigan Tech and worked on the OCULUS-ASR mission launched in 2019. He has previously worked at the Space Dynamics Laboratory and NASA as a Guidance, Navigation & Control systems engineer. Marcello began his work in the PSTDL in the Spring of 2020. His graduate work focuses on developing In-Situ Lunar robotic mining missions.",
				linkedIn: "https://www.linkedin.com/in/marcelloguadagno/"
			},
			{
				firstName: "Ben",
				lastName: "Chaffee",
				email: "brchaffe@mtu.edu",
				bio: "Ben Chaffee received a Bachelor's of Science in Mechanical Engineering from the University of Akron in 2014 and a Master’s in Robotic Systems Development from Carnegie Mellon in 2015. He is now a Senior Engineer at Wecall Inc. in Chardon, OH, a company that fabricates fasteners used on buildings and bridges throughout the US and Canada. At Wecall, Ben leads projects in designing and testing new fasteners to meet customer needs. He also works on developing new machines and processes to increase efficiency and throughput. Ben is now pursuing a ME-EM PhD at MTU and joined the PSTDL in the Fall of 2020. He is looking forward to bringing his collegiate and industry experience to the team to assist with the development of future lunar robots.",
				linkedIn: "https://www.linkedin.com/in/ben-chaffee-464453101/"
			}
		]
	},
	{
		title: "Masters Students",
		detail: false,
		members: [
			{
				firstName: "Travis",
				lastName: "Wavrunek",
				email: "tawavrun@mtu.edu",
				profile: "travis.jpeg",
				bio: "Travis Wavrunek completed his B.S. in Mechanical Engineering at Michigan Tech in Spring 2020 and joined the PSTDL lab the following summer. His work focuses on creating a gravity offloading system for rover testing in the lunar sandbox as well as thermal modeling of the L-SABRE.",
				linkedIn: "https://www.linkedin.com/in/travis-wavrunek/"
			},
			{
				firstName: "Ben",
				lastName: "Wiegand",
				email: "bdwiegan@mtu.edu",
				profile: "ben.jpg",
				linkedIn: "https://www.linkedin.com/in/benjamin-w-48378b175/",
				bio: "Ben Wiegand received his B.S. in mechanical engineering from Michigan Tech in the spring of 2020. He is currently pursuing his master’s degree at Michigan Tech and is expected to graduate in the fall of 2021. His past experiences include robotics and controls for 3D motion platforms, algorithms for plastics manufacturing, and 3D simulations for military vehicles. Ben joined the PSTDL lab in the fall of 2020, and is currently exploring the use of open-source spectrometers for lunar trenchers."
			},
			{
				firstName: "Dante",
				lastName: "Paglia",
				linkedIn: "https://www.linkedin.com/in/dante-paglia/",
				profile: "dante.jpeg",
				email: "dfpaglia@mtu.edu",
				bio: "Dante Paglia received his B.S. in computer science from Michigan Technological University in the spring of 2020. He is continuing on his education to pursue an accelerated M.S. in computer science at Michigan Tech and will be graduating in the spring of 2021. His experience comes from his past internship at Space Dynamics Laboratory and his time leading the software team of Michigan Tech’s Aerospace Enterprise. Dante joined the PSTDL in the fall of 2020 and is working on adding an augmented reality sandbox to the lab's facilities."
			}
		]
	},
	{
		title: "Undergraduate Students",
		detail: false,
		members: [
			{
				firstName: "Elijah",
				lastName: "Cobb",
				email: "ejcobb@mtu.edu",
				profile: "elijah.jpg",
				link: "https://elijahcobb.com",
				linkedIn: "https://www.linkedin.com/in/elijahjcobb/",
				bio: "Elijah Cobb is in his senior year of a B.S. in Computer Science from Michigan Technological University with plans to continue on with a PhD. the following year. Elijah got his start with software development working for a startup out of high school and joined the Planetary Surface Technology Development Lab at MTU the summer of 2020 to develop ground control software for the ongoing T-REX (L-SABRE) mission. Elijah has since developed control software for the PSTDL's Gravity Offloading system and continues to work on the T-REX mission working on COM, CDH, and Ground Control systems. Elijah is also a member of the MTU Aerospace Enterprise Software team and is doing original research as an Undergraduate Fellow through the College of Computing."
			},
			{
				firstName: "Robert",
				lastName: "Lawrence",
				bio: "Robert Lawrence is finishing up his Senior year B.S. in Chemical Engineering this Academic Year. With plans to graduate in the Spring of 2021. Past experience include rock crushing laboratories, benedict lab research, and a minor in mineral processing. Robert Joined the PSTDL during the summer of 2020, and is presently working on developing a low cost- high volume lunar highland simulant for the testing beds.",
				profile: "robert.jpeg",
				linkedIn: "https://www.linkedin.com/in/robert-lawrence-380bbb1a3/",
				email: "ralawren@mtu.edu"
			},
			{
				firstName: "Collin",
				lastName: "Miller",
				email: "collinmi@mtu.edu",
				profile: "collin.jpg",
				linkedIn: "https://www.linkedin.com/in/collin-miller-543a641a3/"
			},
			{
				firstName: "Hunter",
				lastName: "McGillivray",
				email: "hjmcgill@mtu.edu",
				profile: "hunter.jpeg",
				linkedIn: "https://www.linkedin.com/in/hunter-mcgillivray-31ba051b4/",
				bio: "I am an undergraduate student at Michigan Tech with research experience for the NASA BIG Ideas challenge where our team developed a tethered lunar rover capable of exploring and providing infrastructure to the moon's permanently shaded regions. I did the design and testing for a number of mechanical subsystems, most notably the system that managed the tension and deployment of our superconducting tether. I am also a FIRST robotics alumni with 2 world championship wins and an eagle scout."
			},
			{
				firstName: "Erik",
				lastName: "VanHorn",
				email: "eavanhor@mtu.edu",
				profile: "erik.jpeg",
				linkedIn: "https://www.linkedin.com/in/erik-vanhorn-98aa66172/"
			},
			{
				firstName: "Ted",
				lastName: "Gronda",
				email: "tcgronda@mtu.edu",
				profile: "ted.png",
				linkedIn: "https://www.linkedin.com/in/ted-gronda-04891015a/"
			},
			{
				firstName: "Austen",
				lastName: "Goddu",
				email: "ajgoddu@mtu.edu",
				profile: "austen.jpeg",
				linkedIn: "https://www.linkedin.com/in/austen-g-83a639bb/",
				bio: "Austen Goddu is a 5th year Computer Engineering student here at Michigan Tech. Austen joined the Planetary Surface Technology Development Lab after spending several years on the leadership team in Michigan Tech's Aerospace Enterprise. There, Austen gained experience in Systems Engineering and Flight Software Design. Working on the L-SABRE development team, Austen works to design and build L-SABRE's computer system and flight software, assists with the systems engineering and mission design, and performs testing of specific elements of customer hardware."
			},
			{
				firstName: "George",
				lastName: "Johnson",
				email: "georgejo@mtu.edu",
				profile: "george.jpeg",
				linkedIn: "https://www.linkedin.com/in/george-johnson-a05328195/",
				bio: "George Johnson is finishing his senior year B.S. in Mechanical Engineering and Minoring in Manufacturing. Planning to graduate in the Spring of 2021, George is also considering enrolling in graduate school to obtain his M.S. in Mechanical Engineering. His past experience comes from a summer internship at Woodward Inc, Managing the MTU Lunabotics Competition Team, conducting undergraduate research for the PSTDL and Honeybee robotics on the RedWater project. George joined the PSTDL in the summer of 2020 and is continuing research on the RedWater project as well as completing a Lunar Trenching project for his Senior Capstone project."
			},
			{
				firstName: "Nicholas",
				lastName: "Zamora",
				email: "nzamora@mtu.edu",
				profile: "nick.jpeg",
				linkedIn: "https://www.linkedin.com/in/nicholas-zamora-3473aa178/"
			}
		]
	}
];

export const alumni: MemberCollection[] = [
	{
		title: "Undergraduate Students",
		detail: false,
		members: [
			{
				firstName: "Wyatt",
				lastName: "Wagoner",
				email: "wtwagone@mtu.edu",
				profile: "wyatt.jpeg",
				linkedIn: "https://www.linkedin.com/in/wyatt-wagoner/"
			},
			{
				firstName: "Eric",
				lastName: "Mosner",
				email: "emmossne@mtu.edu"
			}
		]
	}
];
