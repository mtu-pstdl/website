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
	profile?: string;
	bio?: string;
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
				profile: "./paul.webp",
				bio: "Dr. van Susante grew up in The Netherlands, received a Master of Science from Delft University of Technology in 2001 in Civil Engineering with an emphasis on Building Engineering. He then went to the Colorado School of Mines (CSM) to participate in NASA research and received a Master of Science in Engineering Systems from CSM in 2004 followed by a Ph.D in Engineering Systems from CSM in 2011. Dr. van Susante taught Freshman, Sophomore and Senior Design as well as Mechanics of Materials for five years at CSM before coming to Michigan Technological University in 2012. He was a NASA Faculty Fellow in 2010 and consulted for a variety of companies on SBIR or STTR projects such as University of Arizona, Sysrand Corporation, Energid, HoneyBee Robotics and others. He has been involved in research projects for many customers including Lockheed Martin, DARPA, NASA KSC, JPL, Bechtel, Caterpillar, NCHRP, NSF and others."
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
				bio: "Marcello Guadagno (Chell) has a Bachelor's in Mechanical Engineering with minors in Aerospace Engineering, Electrical Engineering, and International Leadership (MTU 2019). He has 5 years of end-to-end spacecraft engineering and program management experience. Marcello began his work in the PSTDL in the Spring of 2020. His graduate work focuses on developing In-Situ Lunar robotic mining missions. "
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
				bio: "Travis Wavrunek completed his B.S. in Mechanical Engineering at Michigan Tech in Spring 2020 and joined the PSTDL lab the following summer. His work focuses on creating a gravity offloading system for rover testing in the lunar sandbox as well as thermal modeling of the L-SABRE."
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
				profile: "./elijah.jpg"
			},
			{
				firstName: "Collin",
				lastName: "Miller",
				email: "collinmi@mtu.edu",
				profile: "./collin.jpg"
			},
			{
				firstName: "Hunter",
				lastName: "McGillivray",
				email: "hjmcgill@mtu.edu",
				profile: "https://media-exp1.licdn.com/dms/image/C4D03AQFIkrCdsvgAGw/profile-displayphoto-shrink_400_400/0?e=1604534400&v=beta&t=k1oaA_p3yILbH_ARWug9KHFubtETWVEGf8pvwpVt1dk"
			},
			{
				firstName: "Erik",
				lastName: "VanHorn",
				email: "eavanhor@mtu.edu",
				profile: "https://media-exp1.licdn.com/dms/image/C4E03AQEo3iEbirwsRg/profile-displayphoto-shrink_400_400/0?e=1604534400&v=beta&t=IyzpGQas49b1VSXhfRPvRf7BE24YrDiEMUIKxUJPaPA"
			},
			{
				firstName: "Ted",
				lastName: "Gronda",
				email: "user@mtu.edu",
				profile: "./ted.png"
			},
			{
				firstName: "Austen",
				lastName: "Goddu",
				email: "user@mtu.edu",
				profile: "https://media-exp1.licdn.com/dms/image/C4E03AQH2TQBsKhY-iQ/profile-displayphoto-shrink_400_400/0?e=1604534400&v=beta&t=HqToExPcP2KD8wO22Y7J7hwBq9-mdVViMLyXsNpjI8w"
			},
			{
				firstName: "Eric",
				lastName: "Mosner",
				email: "user@mtu.edu",
				profile: "https://wiki.kerbalspaceprogram.com/images/thumb/e/ee/Happy_kerbal.jpg/300px-Happy_kerbal.jpg"
			},
			{
				firstName: "George",
				lastName: "Johnson",
				email: "user@mtu.edu",
				profile: "https://media-exp1.licdn.com/dms/image/C4E03AQH5sOJ9gtvecA/profile-displayphoto-shrink_400_400/0?e=1604534400&v=beta&t=gcpOPcLq2qAjq-_KLuRvwyzrLc9j_quZuRvD_7wtgqA"
			}
		]
	},
	{
		title: "Alumni",
		detail: false,
		members: [
			{
				firstName: "Nicholas",
				lastName: "Zamora",
				email: "nzamora@mtu.edu",
				profile: "https://media-exp1.licdn.com/dms/image/C5603AQEkESFnE-cNiw/profile-displayphoto-shrink_400_400/0?e=1604534400&v=beta&t=YYMCtt1gX3gC70YAvjopmWFLxg5GTOR4HhGG7LGRgCg"
			},
			{
				firstName: "Wyatt",
				lastName: "Wagoner",
				email: "wtwagone@mtu.edu",
				profile: "https://media-exp1.licdn.com/dms/image/C4E03AQFh_oYQcg_gsg/profile-displayphoto-shrink_400_400/0?e=1604534400&v=beta&t=TTXrCoVs7HD8it1C5mStWI9kPdDQQijPlAHSspJMugs"
			}
		]
	}
];
