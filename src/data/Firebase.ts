/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import {default as firebase} from 'firebase/app';
import 'firebase/firestore';

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

	public static formatDate(date: {month?: number, day?: number, year?: number}): firebase.firestore.Timestamp {
		return firebase.firestore.Timestamp.fromDate(new Date(`${date.month ?? 1}/${date.day ?? 1}/${date.year ?? 2021}`))
	}
}
