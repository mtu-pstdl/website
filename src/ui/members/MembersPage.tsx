/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import React, {ReactElement} from "react";
import {AstraBackground} from "../astra/Astra";
import {MemberView} from "./MemberView";
import {Firebase, MembersCleanedSubsection} from "../../data/Firebase";
import {useAsync} from "react-async-hook";
import "./MembersPage.css";
import {LinearProgress} from "@material-ui/core";

export function MemberSubsectionView(props: {value: MembersCleanedSubsection}): ReactElement {

	function getSubheader(): string {
		switch (props.value.subheader) {
			case "bs":
				return "Undergraduate Students"
			case "ms":
				return "Masters Students"
			case "phd":
				return "PhD Students"
			case "pi":
				return "Director"
			default:
				return ""
		}
	}

	if (props.value.members.length === 0) return <div/>;

	return <div>
		<h3>{getSubheader()}</h3>
		<div className={"members"}>
			{props.value.members
				.sort((a, b) => {
					return a.lastName.localeCompare(b.lastName)
				})
				.map((m, i) => {
				return <MemberView member={m} key={i}/>
			})}
		</div>
	</div>;
}

export function MemberSectionView(props: {value: {header: string, subsections: MembersCleanedSubsection[]}}): ReactElement {
	return (<div>
		<h2>{props.value.header}</h2>
		{props.value.subsections.map((x, i) => {
			return <MemberSubsectionView value={x} key={i}/>;
		})}
	</div>)
}

export function MembersPage(): ReactElement {

	const req = useAsync(Firebase.fetchMembersClean, []);

	return (<div className={"MembersPage main"}>
		<AstraBackground/>
		{req.loading && <LinearProgress />}
		{req.error && <span>Error: {req.error.message}!</span>}
		{req.result && (<div>
			{
				(req.result.map((x, i) => {
					return <MemberSectionView value={x} key={i}/>
				}))
			}
		</div>)}
	</div>);

}
