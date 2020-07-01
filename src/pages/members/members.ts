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
			{
				firstName: "Paul",
				lastName: "Van Susante",
				email: "user@mtu.edu"
			}
		]
	},
	{
		title: "PhD Students",
		detail: true,
		members: [

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

		]
	}
];