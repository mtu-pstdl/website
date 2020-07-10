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
		name: "Test 1",
		url: "test1",
		image: "https://via.placeholder.com/300x200.png?text=Test%201",
		summary: "This is the summary for test 1.",
		component: <h2>Hello, world 1!</h2>
	},
	{
		name: "Test 2",
		url: "test2",
		image: "https://via.placeholder.com/300x200.png?text=Test%202",
		summary: "This is the summary for test 2.",
		component: <h2>Hello, world 2!</h2>
	},
	{
		name: "Test 3",
		url: "test3",
		image: "https://via.placeholder.com/300x200.png?text=Test%203",
		summary: "This is the summary for test 3.",
		component: <h2>Hello, world 3!</h2>
	},
	{
		name: "Test 4",
		url: "test4",
		image: "https://via.placeholder.com/300x200.png?text=Test%204",
		summary: "This is the summary for test 4.",
		component: <h2>Hello, world 4!</h2>
	},
	{
		name: "Test 5",
		url: "test5",
		image: "https://via.placeholder.com/300x200.png?text=Test%205",
		summary: "This is the summary for test 5.",
		component: <h2>Hello, world 5!</h2>
	}
];