/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import React, {ReactElement, PropsWithChildren} from "react";
import "./MenuView.css";
import {ArrowRight} from "@material-ui/icons";

export interface MenuViewProps {
	open: boolean;
	handleClose: () => void;
}

export function MenuView(props: PropsWithChildren<MenuViewProps>): ReactElement {

	return (<div className={"MenuView" + (props.open ? " menuAnimate" : "")}>
		<MenuItemView name={"home"} url={""}/>
		<MenuItemView name={"projects"}/>
		<MenuItemView name={"members"}/>
		<MenuItemView name={"news"}/>
		<MenuItemView name={"publications"}/>
		<MenuItemView name={"facilities"}/>
		<MenuItemView name={"partnerships"}/>
		<MenuItemView name={"contact"}/>
	</div>);

}


export interface MenuItemViewProps {
	name: string;
	url?: string;
}

export function MenuItemView(props: MenuItemViewProps): ReactElement {
	return (<a className={"MenuItemView"}>
		<span className={"text"}>{props.name}</span>
		<ArrowRight className={"arrow"}/>
	</a>)
}
