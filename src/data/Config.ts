/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import {Object} from "parse";

export interface ConfigProps {
	mission: string;
	enterpriseApplyForm: string;
	labApplyForm: string;
}

export class Config extends Object<ConfigProps> {

	public constructor(props: ConfigProps) {
		super("Config", props);
	}

}
