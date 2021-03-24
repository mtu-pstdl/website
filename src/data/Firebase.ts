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

export abstract class Firebase {

	public static firestore: firebase.firestore.Firestore;

	public static init(): void {
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

	public static async fetchMembers(): Promise<Members> {
		const collection = Firebase.firestore.collection("/members")
		const docs = (await collection.get()).docs;
		const members: Members = {
			members: {
				bs: [],
				ms: [],
				phd: [],
				pi: []
			},
			alumni: {
				bs: [],
				ms: [],
				phd: [],
				pi: []
			}
		};
		for (const d of docs) {
			const member = d.data() as Member;
			const key = member.alumni === true ? "alumni" : "members";
			const set = members[key][member.type]
			set.concat(member)
		}
		return members;
	}

	public static formatDate(date: {month?: number, day?: number, year?: number}): firebase.firestore.Timestamp {
		return firebase.firestore.Timestamp.fromDate(new Date(`${date.month ?? 1}/${date.day ?? 1}/${date.year ?? 2021}`))
	}

	public static toDate(timestamp: firebase.firestore.Timestamp | Date): Date {
		// @ts-ignore
		return timestamp.toDate();
	}
}
