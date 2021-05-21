/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import React, {ReactElement, PropsWithChildren} from "react";
import "./ModelView.css";

export interface ModelViewProps {
	src: string;
	className?: string
	disableInteraction?: boolean;
}

export function ModelView(props: PropsWithChildren<ModelViewProps>): ReactElement {

	// camera-controls

	//@ts-ignore
	return (<model-viewer class={"ModelView" + (props.className ? (" " + props.className) : "")} loading="eager" auto-rotate src={props.src} alt="a 3d-model"></model-viewer>);

}
