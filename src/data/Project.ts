/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import * as Parse from "parse";

export interface ProjectProps {
	title: string;
	content?: string;
	description?: string;
	image?: Parse.File;
}

export class Project extends Parse.Object<ProjectProps> {

	public constructor(props: ProjectProps) {
		super("Project", props);
	}
}
