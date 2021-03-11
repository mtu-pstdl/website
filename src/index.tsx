import React from "react";
import ReactDOM from "react-dom";
import "./ui/index.css";
import "./ui/global.css";
import {App} from "./ui/App";
import {Firebase} from "./data/Firebase";
import {members} from "./data/members";
import {publications} from "./data/publications";
import {projects} from "./data/projects";
import {facilities} from "./data/facilities";


Firebase.init();

// async function saveMembers(): Promise<void> {
//     for (const member of members) {
//         const newMember =  Firebase.firestore.collection("members").doc();
//         await newMember.set(member);
//         console.log(newMember.id);
//     }
// }
//
// async function savePublications(): Promise<void> {
//     const batch = Firebase.firestore.batch();
//     const collection = Firebase.firestore.collection("publications")
//     for (const publication of publications["Publications"]) {
//         const pub = {...publication};
//         // @ts-ignore
//         pub["date"] = Firebase.formatDate(publication.date);
//         batch.set(collection.doc(), pub);
//     }
//     console.log("Will batch");
//     batch.commit().then(() => console.log("done")).catch(console.error)
// }
//
// async function saveProjects(): Promise<void> {
//     const batch = Firebase.firestore.batch();
//     const collection = Firebase.firestore.collection("projects");
//     for (const project of projects["Funded Projects"]) {
//         const proj = {...project};
//         delete proj.component;
//         // @ts-ignore
//         proj["content"] = null;
//         batch.set(collection.doc(), proj);
//     }
//     batch.commit().then(() => console.log("done")).catch(console.error)
//     /*
//     {
// 	name: string;
// 	url: string;
// 	image: string;
// 	summary: string;
// 	external?: boolean;
// 	component?: React.Component | React.ReactElement
// }*/
// }
//
// async function saveFacilities(): Promise<void> {
//     const batch = Firebase.firestore.batch();
//     const collection = Firebase.firestore.collection("facilities");
//     for (const facility of facilities) {
//         const fac = {...facility};
//         delete fac.component;
//         // @ts-ignore
//         fac["content"] = null;
//         batch.set(collection.doc(), fac);
//     }
//     batch.commit().then(() => console.log("done")).catch(console.error)
//     /*
//     {
// 	name: string;
// 	url: string;
// 	image: string;
// 	summary: string;
// 	external?: boolean;
// 	component?: React.Component | React.ReactElement
// }*/
// }
//
// async function resetUsers(): Promise<void> {
//     const collection = Firebase.firestore.collection("members");
//     const batch = Firebase.firestore.batch();
//     for (const user of (await collection.get()).docs) {
//         const ref = collection.doc(user.get("email").replace("@mtu.edu", ""))
//         batch.set(ref, user.data())
//         batch.delete(user.ref)
//     }
//     await batch.commit();
// }
//
// function Handler(): React.ReactElement {
//
//     return (<div>
//         <button onClick={resetUsers}>save</button>
//     </div>);
// }


ReactDOM.render(
  <React.StrictMode>
      <App/>
  </React.StrictMode>,
  document.getElementById('root')
);
