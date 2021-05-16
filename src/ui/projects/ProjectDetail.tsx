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
import {useAsync} from "react-async-hook";
import {API} from "../../data/API";
import {LinearProgress} from "@material-ui/core";

export interface ProjectDetailProps {
	project: Project;
	close: () => void;
}

export function ProjectDetail(props: PropsWithChildren<ProjectDetailProps>): ReactElement {

	async function handleMarkdown(url: string | undefined): Promise<string> {
		if (!url) return "";
		return await API.fetchMarkdown(url);
	}

	const title = props.project.get("title");
	const content = props.project.get("content");
	const req = useAsync(handleMarkdown, [content]);

	return (<div className={"ProjectDetail main"}>
		<AstraBackground/>
		<Close className={"close"} onClick={props.close}/>
		<h2>{title}</h2>
		{req.loading && <LinearProgress/>}
		{req.error && <span>Error: {req.error.message}!</span>}
		{content && req.result && (
			<ReactMarkdown
				allowDangerousHtml={true}
				className={"md"}
				plugins={[gfm]}
				children={req.result}
				renderers={{link: props => <a href={props.href} target="_blank">{props.children}</a>}}
			/>
		)}
	</div>);
}
