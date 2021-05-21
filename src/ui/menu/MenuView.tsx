/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import React, {ReactElement, PropsWithChildren} from "react";
import "./MenuView.css";
import {ArrowRight} from "@material-ui/icons";
import {links} from "./links";
import {NavLink} from "react-router-dom";

export interface MenuViewProps {
	open: boolean;
	handleClose: () => void;
}

export function MenuView(props: PropsWithChildren<MenuViewProps>): ReactElement {

	return (<div className={"MenuView" + (props.open ? " menuAnimate" : "")}>
		{
			(links.map((link, i) => {
				return (<MenuItemView handleClose={props.handleClose} key={i} name={link.name} url={link.url}/>)
			}))
		}
	</div>);

}


export interface MenuItemViewProps {
	name: string;
	url?: string;
	handleClose: () => void;
}

export function MenuItemView(props: MenuItemViewProps): ReactElement {
	return (<NavLink onClick={props.handleClose} exact={(props.url !== undefined)} to={"/" + (props.url !== undefined ? props.url : props.name)} className={"MenuItemView"}>
		<span className={"text"}>{props.name}</span>
		<ArrowRight className={"arrow"}/>
	</NavLink>)
}
