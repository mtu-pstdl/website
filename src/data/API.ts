/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import * as Parse from "parse";
import {Query} from "parse";
import {Member} from "./Member";
import {News} from "./News";
import {Publication} from "./Publication";
import {Project} from "./Project";
import {Facility} from "./Facility";
import {Config} from "./Config";

export type MembersSubsection = {
	subheader: string,
	members: Member[]
};

export type Members = {
	header: string,
	subsections: MembersSubsection[]
}[];

export class API {

	public static init(): void {
		Parse.initialize("pstdlDEV", "c@qdY*9BioB&56aFUoCtM^6VSrLs8LVq");
		(Parse as { serverURL: string }).serverURL = "https://api.elijahcobb.com/pstdlDEV";
	}

	// private static async fetchAndPin<T extends Object>(q: Query<T>): Promise<T[]> {
	// 	q.fromLocalDatastore();
	// 	const countInLocalDatastore = await q.count();
	// 	console.log(`Found ${countInLocalDatastore} in local datastore.`);
	// 	if (countInLocalDatastore !== 0) return await q.find();
	// 	console.log("Need to go to network...");
	// 	q.fromNetwork();
	// 	const r = await q.find();
	// 	console.log(q.className);
	// 	await Object.unPinAllObjectsWithName(q.className)
	// 	await Object.pinAllWithName(q.className, r);
	// 	return r;
	// }

	public static async fetchConfig(): Promise<Config> {
		const c = await (new Query(Config)).first()
		if (!c) throw new Error("Could not find config!");
		return c;
	}

	public static async fetchMembers(): Promise<Members> {

		const members = await (new Query(Member)).find();

		function indexForType(major: string): number {
			switch (major) {
				case "pi":
					return 0;
				case "phd":
					return 1;
				case "ms":
					return 2;
				case "bs":
					return 3;
				default:
					return -1;
			}
		}

		const res: Members = [{header: "Members", subsections: [
				{subheader: "pi", members: []},
				{subheader: "phd", members: []},
				{subheader: "ms", members: []},
				{subheader: "bs", members: []}
			]}, {header: "Alumni", subsections: [
				{subheader: "pi", members: []},
				{subheader: "phd", members: []},
				{subheader: "ms", members: []},
				{subheader: "bs", members: []}
			]}];
		for (const m of members) {
			const p = res[(m.get("alumni") === true) ? 1 : 0].subsections[indexForType(m.get("type"))];
			p.members.push(m)
		}
		return res;

	}

	public static async fetchNews(): Promise<News[]> {
		return await (new Query(News)).find();
	}

	public static async fetchPublications(): Promise<Publication[]> {
		return await (new Query(Publication)).find();
	}

	public static async fetchProjects(): Promise<Project[]> {
		return await (new Query(Project)).find();
	}

	public static async fetchFacilities(): Promise<Facility[]> {
		return await (new Query(Facility)).find();
	}

}
