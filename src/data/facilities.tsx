/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import * as React from "react";
import {DTVAC} from "../ui/pages/facilities/dtvac/DTVAC";
import {MTVAC} from "../ui/pages/facilities/mtvac/MTVAC";
import {GravityOffloading} from "../ui/pages/facilities/gravity-offloading/GravityOffloading";

export interface Facility {
	name: string;
	url: string;
	image: string;
	summary: string;
	external?: boolean;
	component?: React.Component | React.ReactElement
}

export const facilities: Facility[] = [
	{
		name: "Dusty Thermal Vacuum Chamber (DTVAC)",
		url: "dtvac",
		image: "fac/dtvac1.png",
		summary: "Perform rapid testing of lunar surface systems and science instruments. This facility consists of a thermal vacuum chamber, removable regolith beds, and supporting equipment.",
		component: <DTVAC/>
	},
	{
		name: "Gravity Offloading Lunar Simulant Sandbox",
		url: "sandbox",
		image: "fac/gravity-offload.png",
		summary: "'Airlocked' lunar simulant chamber with autonomous gravity offloading.",
		component: <GravityOffloading/>
	},
	{
		name: "Mini Thermal Vacuum Chamber (MTVAC)",
		url: "mtvac",
		image: "fac/mtvac1.jpg",
		summary: "A Martian pressure rated vacuum chamber featuring a LN2 feedthrough port to allow tests to be conducted at cryogenic temperatures.",
		component: <MTVAC/>
	},
	{
		name: "Industrial Robotic Arm",
		url: "arm",
		image: "fac/arm.jpg",
		summary: "Lunar Regolith Sandbox with Autonomous Gravity Offloading",
	}
];
