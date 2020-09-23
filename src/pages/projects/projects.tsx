/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import * as React from "react";
import {LSABRE} from "./lsabre/LSABRE";
import "./projects.css";
import {Lunabotics} from "./lunabotics/Lunabotics";
import {RedWater} from "./redwater/RedWater";

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
		image: "./render1.png",
		summary: "NASA BIG Idea Challenge - T-REX (L-SABRE) Robotic Infrastructure Mission",
		component: <LSABRE/>
	},
	{
		name: "NASA: Lunabotics",
		url: "lunabotics",
		image: "./lunabotics1.png",
		summary: "Autonomous Bucket Ladder Excavation Rover",
		component: <Lunabotics/>
	},
	{
		name: "REDWATER",
		url: "red-water",
		image: "./honeybee.jpg",
		summary: "The RedWater mission is a partnership with Honeybee Robotics.",
		component: <RedWater/>
	}
	// {
	// 	name: "NASA: ESI",
	// 	url: "esi",
	// 	image: "https://via.placeholder.com/300x200.png?text=Project",
	// 	summary: "Water Mining Gypsum on Mars",
	// 	component: <div/>
	// },
	// {
	// 	name: "NASA: ISRU BAA",
	// 	url: "irsu-baa",
	// 	image: "https://via.placeholder.com/300x200.png?text=Project",
	// 	summary: "Mining Water from Buried Martian Glaciers",
	// 	component: <div/>
	// },
	// {
	// 	name: "NASA: Center for Lunar and Asteroid Surface Science",
	// 	url: "class",
	// 	image: "https://via.placeholder.com/300x200.png?text=Project",
	// 	summary: "Lunar Regolith Simulant Development",
	// 	component: <div/>
	// },
	// {
	// 	name: "NASA NIAC Phase II",
	// 	url: "niac-ii",
	// 	image: "https://via.placeholder.com/300x200.png?text=Project",
	// 	summary: "Lunar Polar Mining Outpost: Testing Microwave Heating of Lunar Polar Ice for Water Extraction",
	// 	component: <div/>
	// },
	// {
	// 	name: "UREP",
	// 	url: "urep",
	// 	image: "https://via.placeholder.com/300x200.png?text=Project",
	// 	summary: "Simulating Thermal Shielding of Structures on the Moon",
	// 	component: <div/>
	// },
];
