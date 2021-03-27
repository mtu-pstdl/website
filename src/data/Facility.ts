/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import * as Parse from "parse";

export interface FacilityProps {
	title: string;
	description?: string;
	content?: string;
	image?: Parse.File;
}

export class Facility extends Parse.Object<FacilityProps> {

	public constructor(props: FacilityProps) {
		super("Facility", props);
	}
}
