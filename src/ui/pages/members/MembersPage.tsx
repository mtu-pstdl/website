/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import React, {ReactElement, PropsWithChildren} from "react";
import {Firebase} from "../../../data/Firebase";
import {useAsync} from "react-async-hook";
import "./MembersPage.css";
import {MemberCollection} from "../../../data/members";
import {MemberSection} from "./MemberSection";
import firebase from "firebase";

export interface MembersPageProps {

}

async function getMembers(): Promise<{ members: MemberCollection[], alumni: MemberCollection[] }> {
	const collection = Firebase.firestore.collection("members");
	const all = (await collection.get()).docs;
	const members: MemberCollection[] = [];
	const alumni: MemberCollection[] = [];
	for (const member of all) {

	}
	return {};
}

export function MembersPage(props: PropsWithChildren<MembersPageProps>): ReactElement {

	const handler = useAsync(getMembers, []);

	return (<div>
		{handler.loading && <div/>}
		{handler.error && <p>Error: {handler.error.message}</p>}
		{handler.result && (
			<div className={"MembersPage main"}>
				<h2>Members</h2>
				{handler.result.members.map((memberCollection: MemberCollection) => {
					return <MemberSection collection={memberCollection}/>
				})}
				<h2>Alumni</h2>
				{handler.result.alumni.map((memberCollection: MemberCollection) => {
					return <MemberSection collection={memberCollection}/>
				})}
			</div>
		)}
	</div>);
}
