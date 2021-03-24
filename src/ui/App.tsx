/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import React, {ReactElement, PropsWithChildren} from "react";
import {NavView} from "./nav/NavView";

export interface AppProps {

}

export function App(props: PropsWithChildren<AppProps>): ReactElement {

	return (<div className={"App"}>
		<NavView/>
	</div>);

}
