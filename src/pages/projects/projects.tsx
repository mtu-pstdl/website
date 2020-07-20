/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import * as React from "react";

export interface Project {
	name: string;
	url: string;
	image: string;
	summary: string;
	component: React.Component | React.ReactElement
}

export type Projects = Project[];

export const projects: Projects = [
	{
		name: "NASA: T-REX (L-SABRE) Mission",
		url: "l-sabre",
		image: "https://via.placeholder.com/300x200.png?text=Project",
		summary: "NASA BIG Idea Challenge - T-REX (L-SABRE) Robotic Infrastructure Mission",
		component: <h2>Project Title</h2>
	},
	{
		name: "NASA: ESI",
		url: "esi",
		image: "https://via.placeholder.com/300x200.png?text=Project",
		summary: "Water Mining Gypsum on Mars",
		component: <h2>Project Title</h2>
	},
	{
		name: "NASA: ISRU BAA",
		url: "irsu-baa",
		image: "https://via.placeholder.com/300x200.png?text=Project",
		summary: "Mining Water from Buried Martian Glaciers",
		component: <h2>Project Title</h2>
	},
	{
		name: "NASA: Center for Lunar and Asteroid Surface Science",
		url: "class",
		image: "https://via.placeholder.com/300x200.png?text=Project",
		summary: "Lunar Regolith Simulant Development",
		component: <h2>Project Title</h2>
	},
	{
		name: "NASA NIAC Phase II",
		url: "niac-ii",
		image: "https://via.placeholder.com/300x200.png?text=Project",
		summary: "Lunar Polar Mining Outpost: Testing Microwave Heating of Lunar Polar Ice for Water Extraction",
		component: <h2>Project Title</h2>
	},
	{
		name: "UREP",
		url: "urep",
		image: "https://via.placeholder.com/300x200.png?text=Project",
		summary: "Simulating Thermal Shielding of Structures on the Moon",
		component: <h2>Project Title</h2>
	},
	{
		name: "NASA: Lunabotics",
		url: "lunabotics",
		image: "https://via.placeholder.com/300x200.png?text=Project",
		summary: "Autonomous Bucket Ladder Excavation Rover",
		component: <h2>Project Title</h2>
	}
];