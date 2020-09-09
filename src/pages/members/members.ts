/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */
import {LoremIpsum} from "../../components/LoremIpsum";

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
				firstName: "Paul",
				lastName: "Van Susante",
				email: "pjvansus@mtu.edu",
				profile: "https://media-exp1.licdn.com/dms/image/C5103AQHLU_yQeqn9Eg/profile-displayphoto-shrink_800_800/0?e=1605139200&v=beta&t=0A6znP3pWwONKQcaocvUzWQsT8lY0pEy3NTkBq6xdFg",
				bio: "Dr. van Susante grew up in The Netherlands, received a Master of Science from Delft University of Technology in 2001 in Civil Engineering with an emphasis on Building Engineering. He then went to the Colorado School of Mines (CSM) to participate in NASA research and received a Master of Science in Engineering Systems from CSM in 2004 followed by a Ph.D in Engineering Systems from CSM in 2011. Dr. van Susante taught Freshman, Sophomore and Senior Design as well as Mechanics of Materials for five years at CSM before coming to Michigan Technological University in 2012. He was a NASA Faculty Fellow in 2010 and consulted for a variety of companies on SBIR or STTR projects such as University of Arizona, Sysrand Corporation, Energid, HoneyBee Robotics and others. He has been involved in research projects for many customers including Lockheed Martin, DARPA, NASA KSC, JPL, Bechtel, Caterpillar, NCHRP, NSF and others.",
				linkedIn: "https://www.linkedin.com/in/paul-van-susante-ph-d-6612271/",
				key: 1000000
			}
		]
	},
	{
		title: "PhD Students",
		detail: true,
		members: [
			{
				firstName: "Marcello",
				lastName: "Guadagno",
				email: "mcguadag@mtu.edu",
				profile: "./marcello.jpg",
				bio: "Marcello Guadagno (Chell) has a Bachelor's in Mechanical Engineering with minors in Aerospace Engineering, Electrical Engineering, and International Leadership (MTU 2019). He has 5 years of end-to-end spacecraft engineering and program management experience. Marcello began his work in the PSTDL in the Spring of 2020. His graduate work focuses on developing In-Situ Lunar robotic mining missions. ",
				linkedIn: "https://www.linkedin.com/in/marcelloguadagno/",
				key: 100
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
		detail: true,
		members: [
			{
				firstName: "Travis",
				lastName: "Wavrunek",
				email: "tawavrun@mtu.edu",
				profile: "https://media-exp1.licdn.com/dms/image/C4E03AQF64hrFwQ-35A/profile-displayphoto-shrink_400_400/0?e=1604534400&v=beta&t=t3YAACvw_BB8ML1lS3YFfM239BxZx8TIhqZmrZl-UXc",
				bio: "Travis Wavrunek completed his B.S. in Mechanical Engineering at Michigan Tech in Spring 2020 and joined the PSTDL lab the following summer. His work focuses on creating a gravity offloading system for rover testing in the lunar sandbox as well as thermal modeling of the L-SABRE.",
				linkedIn: "https://www.linkedin.com/in/travis-wavrunek/"
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
				profile: "./elijah.jpg",
				link: "https://elijahcobb.com",
				linkedIn: "https://www.linkedin.com/in/elijahjcobb/"
			},
			{
				firstName: "Collin",
				lastName: "Miller",
				email: "collinmi@mtu.edu",
				profile: "./collin.jpg",
				linkedIn: "https://www.linkedin.com/in/collin-miller-543a641a3/"
			},
			{
				firstName: "Hunter",
				lastName: "McGillivray",
				email: "hjmcgill@mtu.edu",
				profile: "https://media-exp1.licdn.com/dms/image/C4D03AQFIkrCdsvgAGw/profile-displayphoto-shrink_400_400/0?e=1604534400&v=beta&t=k1oaA_p3yILbH_ARWug9KHFubtETWVEGf8pvwpVt1dk",
				linkedIn: "https://www.linkedin.com/in/hunter-mcgillivray-31ba051b4/"
			},
			{
				firstName: "Erik",
				lastName: "VanHorn",
				email: "eavanhor@mtu.edu",
				profile: "https://media-exp1.licdn.com/dms/image/C4E03AQEo3iEbirwsRg/profile-displayphoto-shrink_400_400/0?e=1604534400&v=beta&t=IyzpGQas49b1VSXhfRPvRf7BE24YrDiEMUIKxUJPaPA",
				linkedIn: "https://www.linkedin.com/in/erik-vanhorn-98aa66172/"
			},
			{
				firstName: "Ted",
				lastName: "Gronda",
				email: "tcgronda@mtu.edu",
				profile: "./ted.png",
				linkedIn: "https://www.linkedin.com/in/ted-gronda-04891015a/"
			},
			{
				firstName: "Austen",
				lastName: "Goddu",
				email: "ajgoddu@mtu.edu",
				profile: "https://media-exp1.licdn.com/dms/image/C4E03AQH2TQBsKhY-iQ/profile-displayphoto-shrink_400_400/0?e=1604534400&v=beta&t=HqToExPcP2KD8wO22Y7J7hwBq9-mdVViMLyXsNpjI8w",
				linkedIn: "https://www.linkedin.com/in/austen-g-83a639bb/"
			},
			{
				firstName: "Eric",
				lastName: "Mosner",
				email: "emmossne@mtu.edu"
			},
			{
				firstName: "George",
				lastName: "Johnson",
				email: "georgejo@mtu.edu",
				profile: "https://media-exp1.licdn.com/dms/image/C4E03AQH5sOJ9gtvecA/profile-displayphoto-shrink_400_400/0?e=1604534400&v=beta&t=gcpOPcLq2qAjq-_KLuRvwyzrLc9j_quZuRvD_7wtgqA",
				linkedIn: "https://www.linkedin.com/in/george-johnson-a05328195/"
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
				firstName: "Nicholas",
				lastName: "Zamora",
				email: "nzamora@mtu.edu",
				profile: "https://media-exp1.licdn.com/dms/image/C5603AQEkESFnE-cNiw/profile-displayphoto-shrink_400_400/0?e=1604534400&v=beta&t=YYMCtt1gX3gC70YAvjopmWFLxg5GTOR4HhGG7LGRgCg",
				linkedIn: "https://www.linkedin.com/in/nicholas-zamora-3473aa178/"
			},
			{
				firstName: "Wyatt",
				lastName: "Wagoner",
				email: "wtwagone@mtu.edu",
				profile: "https://media-exp1.licdn.com/dms/image/C4E03AQFh_oYQcg_gsg/profile-displayphoto-shrink_400_400/0?e=1604534400&v=beta&t=TTXrCoVs7HD8it1C5mStWI9kPdDQQijPlAHSspJMugs",
				linkedIn: "https://www.linkedin.com/in/wyatt-wagoner/"
			}
		]
	}
];
