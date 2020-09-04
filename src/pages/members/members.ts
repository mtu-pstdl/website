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
				profile: "https://via.placeholder.com/480x480.png?text=Person",
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
				firstName: "Nicholas",
				lastName: "Zamora",
				email: "nzamora@mtu.edu",
				profile: "https://via.placeholder.com/480x480.png?text=Person"
			},
			{
				firstName: "Wyatt",
				lastName: "Wagoner",
				email: "wtwagone@mtu.edu",
				profile: "https://via.placeholder.com/480x480.png?text=Person"
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
				profile: "https://via.placeholder.com/480x480.png?text=Person"
			},
			{
				firstName: "Erik",
				lastName: "VanHorn",
				email: "user@mtu.edu",
				profile: "https://via.placeholder.com/480x480.png?text=Person"
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
				profile: "https://via.placeholder.com/480x480.png?text=Person"
			},
			{
				firstName: "Eric",
				lastName: "Mosner",
				email: "user@mtu.edu",
				profile: "https://via.placeholder.com/480x480.png?text=Person"
			},
			{
				firstName: "George",
				lastName: "Johnson",
				email: "user@mtu.edu",
				profile: "https://via.placeholder.com/480x480.png?text=Person"
			}
		]
	}
];
