/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import React, {ReactElement, PropsWithChildren} from "react";
import {Project} from "../../data/Project";
import {AstraBackground} from "../astra/Astra";
import "./ProjectDetail.css";
import ReactMarkdown from "react-markdown"
import gfm from "remark-gfm";
import {Close} from "@material-ui/icons";

export interface ProjectDetailProps {
	project: Project;
	close: () => void;
}

export function ProjectDetail(props: PropsWithChildren<ProjectDetailProps>): ReactElement {

	const title = props.project.get("title");
	const content = props.project.get("content");

	return (<div className={"ProjectDetail main"}>
		<AstraBackground/>
		<Close className={"close"} onClick={props.close}/>
		<h2>{title}</h2>
		{content && <ReactMarkdown className={"md"} plugins={[gfm]} children={content.replaceAll("\\n", "\n")}/>}
	</div>);
}
