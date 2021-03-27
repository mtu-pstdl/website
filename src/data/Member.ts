/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import * as Parse from "parse";

export interface MemberProps {
	firstName: string;
	lastName: string;
	email: string;
	major: string;
	type: "bs" | "ms" | "phd" | "pi";
	alumni?: boolean;
	bio?: string;
	linkedIn?: string;
	profile?: Parse.File;
}

export class Member extends Parse.Object<MemberProps> {

	public constructor(props: MemberProps) {
		super("Member", props);
	}
}
