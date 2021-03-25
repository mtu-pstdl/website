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
import {NavLink} from "react-router-dom";
import {links} from "../menu/links";

export interface NavViewProps {

}

export function NavView(props: PropsWithChildren<NavViewProps>): ReactElement {

	const [open, setOpen] = useState(false);

	return (<div className={"NavView"}>
		<div className={"header"}>
			<img src={"/mtu.png"} alt={"mtu"}/>
			<img src={"/logo.png"} alt={"pstdl"}/>
			<h1>
				<span className={"P"}>P</span>
				<span className={"p"}>lanetary</span>
				<span className={"S"}>S</span>
				<span className={"s"}>urface</span>
				<span className={"T"}>T</span>
				<span className={"t"}>echnology</span>
				<span className={"D"}>D</span>
				<span className={"d"}>evelopment</span>
				<span className={"L"}>L</span>
				<span className={"l"}>ab</span>
			</h1>
		</div>
		<div className={"bar"}>
			{
				(links.map((link, a) => {
					return <NavLink key={a} activeClassName={"link-active"} className={"link"} exact={(link.url !== undefined)} to={"/" + (link.url !== undefined ? link.url : link.name)}>{link.name}</NavLink>
				}))
			}
		</div>
		<div className={"hamburger"}>
			<Hamburger toggled={open} toggle={setOpen} />
		</div>
		<MenuView handleClose={() => setOpen(false)} open={open}/>
	</div>);

}
