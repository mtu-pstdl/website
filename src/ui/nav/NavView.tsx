/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import "./NavView.css";
import React, {ReactElement, PropsWithChildren, useState} from "react";
import {MenuView} from "../menu/MenuView";
import { Twirl as Hamburger } from "hamburger-react";

export interface NavViewProps {

}

export function NavView(props: PropsWithChildren<NavViewProps>): ReactElement {

	const [open, setOpen] = useState(false);

	return (<div className={"NavView"}>
		<div className={"header"}>
			<img src={"./mtu.png"} alt={"mtu"}/>
			<img src={"./logo.png"} alt={"pstdl"}/>
			<h1>PSTDL</h1>
		</div>
		<Hamburger toggled={open} toggle={setOpen} />
		<MenuView handleClose={() => setOpen(false)} open={open}/>
	</div>);

}
