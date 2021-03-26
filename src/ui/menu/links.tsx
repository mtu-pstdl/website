/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import React, {ReactElement} from "react";
import {NewsPage} from "../news/NewsPage";
import {PublicationsPage} from "../publications/PublicationsPage";
import {MembersPage} from "../members/MembersPage";
import {HomePage} from "../home/HomePage";
import {ProjectsPage} from "../projects/ProjectsPage";

export const links: {name: string, url?: string, element?: ReactElement}[] = [
	{name: "home", url: "", element: <HomePage/>},
	{name: "projects", element: <ProjectsPage/>},
	{name: "members", element: <MembersPage/>},
	{name: "news", element: <NewsPage/>},
	{name: "publications", element: <PublicationsPage/>},
	{name: "facilities"},
	{name: "partnerships"},
	{name: "contact"}
]
