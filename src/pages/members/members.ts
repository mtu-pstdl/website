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
				profile: "https://via.placeholder.com/480x480.png?text=Person",
				bio: LoremIpsum.generate(80)
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
				profile: "https://via.placeholder.com/480x480.png?text=Person",
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
				profile: "https://via.placeholder.com/480x480.png?text=Person"
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
				profile: "https://via.placeholder.com/480x480.png?text=Person"
			},
			{
				firstName: "Hunter",
				lastName: "McGillivray",
				email: "hjmcgill@mtu.edu",
				profile: "https://via.placeholder.com/480x480.png?text=Person"
			}
		]
	}
];
