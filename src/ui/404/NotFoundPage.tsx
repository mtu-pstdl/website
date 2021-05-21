/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import React, {ReactElement} from "react";
import "./NotFoundPage.css";
import {AstraBackground} from "../astra/Astra";


export function NotFoundPage(): ReactElement {

	return (<div className={"NotFoundPage main"}>
		<AstraBackground/>
		<span className={"title"}>404</span>
	</div>);

}
