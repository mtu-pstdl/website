/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import * as Parse from "parse";

export interface PublicationProps {
	authors: string[];
	title: string;
	publication: string;
	date: Date;
}

export class Publication extends Parse.Object<PublicationProps> {

	public constructor(props: PublicationProps) {
		super("Publication", props);
	}

}
