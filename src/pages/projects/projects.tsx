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

export const projects: { [key: string]: {url: string, projects: Project[]} } = {
	"Funded Projects": {
		url: "funded",
		projects: [
			{
				name: "NASA: T-REX (L-SABRE) Mission",
				url: "l-sabre",
				image: "./render1.png",
				summary: "NASA BIG Idea Challenge - T-REX (L-SABRE) Robotic Infrastructure Mission",
				component: <LSABRE/>
			},
			{
				name: "REDWATER",
				url: "red-water",
				image: "./honeybee.jpg",
				summary: "The RedWater mission is a partnership with Honeybee Robotics.",
				component: <RedWater/>
			}
		]
	},
	"Enterprise Projects": {
		url: "enterprise",
		projects: [
			{
				name: "NASA: Lunabotics",
				url: "lunabotics",
				image: "./lunabotics1.png",
				summary: "Autonomous Bucket Ladder Excavation Rover",
				component: <Lunabotics/>
			}
		]
	}
};
