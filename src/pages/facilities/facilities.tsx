/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import * as React from "react";

export interface Facility {
	name: string;
	url: string;
	image: string;
	summary: string;
	external?: boolean;
	component: React.Component | React.ReactElement
}

export const facilities: Facility[] = [
	{
		name: "DTVAC",
		url: "dtvac",
		image: "./render1.png",
		summary: "NASA BIG Idea Challenge - T-REX (L-SABRE) Robotic Infrastructure Mission",
		component: <p>HI</p>
	}
];
