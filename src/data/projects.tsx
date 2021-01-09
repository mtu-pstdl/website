/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import * as React from "react";
import {LSABRE} from "../ui/pages/projects/lsabre/LSABRE";
import "../ui/pages/projects/projects.css";
import {Lunabotics} from "../ui/pages/projects/lunabotics/Lunabotics";
import {RedWater} from "../ui/pages/projects/redwater/RedWater";
import {ESI} from "../ui/pages/projects/esi/ESI";

export interface Project {
	name: string;
	url: string;
	external?: boolean;
	image?: string;
	summary?: string;
	component?: React.Component | React.ReactElement
}

export const projects: { [key: string]: Project[] } = {
	"Funded Projects": [
		{
			name: "NASA BIG Idea Challenge 2020: T-REX (L-SABRE) Mission",
			url: "t-rex",
			image: "./render1.png",
			summary: "NASA BIG Idea Challenge - T-REX (L-SABRE) Robotic Infrastructure Mission",
			component: <LSABRE/>
		},
		{
			name: "NASA BAA ISRU: RedWater",
			url: "red-water",
			image: "./honeybee.jpg",
			summary: "Extraction of Water from Mars’ Ice Deposits through partnership with Honeybee robotics",
			component: <RedWater/>
		},
		{
			name: "NASA ESI Gypsum",
			url: "nasa-esi",
			summary: "NASA Early Stage Innovation: \"Low mass, low power, non-mechanical excavation of gypsum and other evaporites for water production on Mars\"",
			component: <ESI/>,
			image: "esi.png"
		},
		{
			name: "NASA Center for Lunar and Asteroid Surface Science (CLASS)",
			url: "nasa-class",
			summary: "A NASA Solar System Exploration Virtual Institute."
		},
		{
			name: "NASA NIAC Phase II",
			url: "nasa-niac-ii",
			summary: "Lunar Polar Mining Outpost through partnership with Transastronautica Corporation"
		},
		{
			name: "NASA GCD: In-Situ Construction",
			url: "https://www.nasa.gov/centers/ames/cct/technology/stp/gamechanging/in-situ_resource_utilization.html#backtoTop",
			external: true
		},
		{
			name: "NASA GCD: Molten Regolith Electrolysis",
			url: "nasa-gcd-molten-regolith"
		},

	],
	"Enterprise Projects": [
		{
			name: "Lunabotics",
			url: "lunabotics",
			image: "./lunabotics1.png",
			summary: "Autonomous Bucket Ladder Excavation Rover",
			component: <Lunabotics/>
		}
	]
};
