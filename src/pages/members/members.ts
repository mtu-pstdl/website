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
			}
		]
	}
];