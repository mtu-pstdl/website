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
		name: "Project 1",
		url: "project1",
		image: "https://via.placeholder.com/300x200.png?text=Project%201",
		summary: "This is the summary for project 1.",
		component: <h2>Project 1</h2>
	},
	{
		name: "Project 2",
		url: "project2",
		image: "https://via.placeholder.com/300x200.png?text=Project%202",
		summary: "This is the summary for project 2.",
		component: <h2>Project 2</h2>
	},
	{
		name: "Project 3",
		url: "project3",
		image: "https://via.placeholder.com/300x200.png?text=Project%203",
		summary: "This is the summary for project 3.",
		component: <h2>Project 3</h2>
	},
	{
		name: "Project 4",
		url: "project4",
		image: "https://via.placeholder.com/300x200.png?text=Project%204",
		summary: "This is the summary for project 4.",
		component: <h2>Project 4</h2>
	},
	{
		name: "Project 5",
		url: "project5",
		image: "https://via.placeholder.com/300x200.png?text=Project%205",
		summary: "This is the summary for project 5.",
		component: <h2>Project 5</h2>
	}
];