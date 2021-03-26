/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import {default as firebase} from 'firebase/app';
import 'firebase/firestore';

export interface News {
	title: string;
	content: string;
	date: Date;
	link?: string;
}

export interface Publication {
	title: string;
	date: Date;
	authors: string[];
	publication: string;
}

export interface PublicationSet {
	publications: Publication[];
	key?: firebase.firestore.QueryDocumentSnapshot;
}

export interface Member {
	bio?: string;
	email: string;
	firstName: string;
	lastName: string;
	linkedIn?: string;
	profile?: string;
	type: "bs" | "ms" | "phd" | "pi";
	major?: string;
	alumni?: boolean;
}

export interface MemberSet {
	bs: Member[];
	ms: Member[];
	phd: Member[];
	pi: Member[];
}

export interface Members {
	members: MemberSet
	alumni: MemberSet
}

export type MembersCleanedSubsection = {
	subheader: string,
	members: Member[]
};

export type MembersCleaned = {
	header: string,
	subsections: MembersCleanedSubsection[]
}[];

export interface Project {
	name: string;
	summary: string;
	url: string;
	image?: string;
	content?: string;
}

type CollectionData = {id: string, doc: object}[];

export abstract class Firebase {

	public static firestore: firebase.firestore.Firestore;

	public static init(debug: boolean = false): void {
		firebase.initializeApp({
			apiKey: "AIzaSyC_OFyi1PeI2v9JTGGW8jRWHkOf2r3-TvM",
			authDomain: "pstdl-website.firebaseapp.com",
			projectId: "pstdl-website",
			storageBucket: "pstdl-website.appspot.com",
			messagingSenderId: "471664923871",
			appId: "1:471664923871:web:a4a75e3732c1f2d73d856a",
			measurementId: "G-XX0V1R08PM"
		});
		this.firestore = firebase.firestore();
		if (debug) this.firestore.useEmulator("localhost", 8080);
	}

	public static async fetchNews(): Promise<News[]> {
		const collection = Firebase.firestore
			.collection("/news")
			.orderBy("date", "desc")
			.orderBy("title", "asc")
			.limit(100);
		const res = await collection.get();
		return res.docs.map(doc => {
			const n = doc.data() as News;
			n.date = Firebase.toDate(n.date)
			return n;
		})
	}

	public static async fetchPublications(key?: firebase.firestore.QueryDocumentSnapshot): Promise<PublicationSet> {
		let collection = Firebase.firestore
			.collection("/publications")
			.orderBy("date", "desc")
			.orderBy("title", "asc")
			.limit(10);
		if (key) collection = collection.startAfter(key);
		const res = await collection.get();
		return {
			publications: res.docs.map(doc => {
				const n = doc.data() as Publication;
				n.date = Firebase.toDate(n.date)
				return n;
			}),
			key: res.docs[res.docs.length - 1]
		}
	}

	public static async fetchMembers(): Promise<Member[]> {
		const collection = Firebase.firestore.collection("/members")
		const docs = (await collection.get()).docs;
		return docs.map(d => {
			return d.data() as Member;
		})
	}

	public static async fetchMembersClean(): Promise<MembersCleaned> {

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

		const members = await Firebase.fetchMembers();
		const res: MembersCleaned = [{header: "Members", subsections: [
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
			const p = res[(m.alumni === true) ? 1 : 0].subsections[indexForType(m.type)];
			p.members.push(m)
		}
		return res;
	}

	public static async fetchProjects(): Promise<Project[]> {
		const collection = Firebase.firestore.collection("/projects")
		const res = await collection.get();
		return res.docs.map(doc => doc.data() as Project);
	}

	public static formatDate(date: {month?: number, day?: number, year?: number}): firebase.firestore.Timestamp {
		return firebase.firestore.Timestamp.fromDate(new Date(`${date.month ?? 1}/${date.day ?? 1}/${date.year ?? 2021}`))
	}

	public static toDate(timestamp: firebase.firestore.Timestamp | Date): Date {
		// @ts-ignore
		return timestamp.toDate();
	}
}
