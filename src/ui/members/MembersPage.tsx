/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import React, {ReactElement} from "react";
import {AstraBackground} from "../astra/Astra";
import {MemberView} from "./MemberView";
import {Firebase, Member} from "../../data/Firebase";
import {useAsync} from "react-async-hook";
import "./MembersPage.css";
import {LinearProgress} from "@material-ui/core";

export function MembersPage(): ReactElement {

	const paul: Member = {
		firstName: "Paul",
		lastName: "Van Susante",
		email: "pjvansus@mtu.edu",
		type: "pi",
		linkedIn: "https://www.linkedin.com/in/paul-van-susante-ph-d-6612271/",
		bio: "Dr. van Susante grew up in The Netherlands. He graduated with a MSc in Civil Engineering from Delft University of Technology in 2001 with a thesis topic of building large telescopes in the permanently shaded lunar polar craters. He did his internship at the European Space Agency in Noordwijk (ESTEC), The Netherlands, and led his award winning senior design team with a lunar base design for lunar He 3 surface mining. In 2002 he started at the Colorado School of Mines at the invitation of Mike Duke to continue lunar telescope work and received a MSc in Engineering Systems in 2004. Since 2003 he has been involved with in-situ Resource Utilization studies and hardware development and testing, he led the development of a first prototype of a lunar bucket ladder, backhoe and performed regolith simulant property testing for RESOLVE. He was faculty advisor for 5 student teams participating in the centennial excavation challenge and lunabotics mining competition from 2008-2012 and now a 6 th team at MTU. In 2010 he was a National Space Grant Faculty Fellow at NASA Kennedy Space Center working on lunar landing pad construction methods and testing. His PhD from CSM in 2011 included modeling of lunar regolith excavation forces. He has worked on numerous SBIR/STTR/NIAC and other grants with numerous aerospace companies and NASA centers on ISRU related research, Lunar and Martian economics and architecture studies. After 7 years as a senior lecturer, he is now an assistant professor at MTU and performs research in the areas of In-situ resource utilization (ISRU) for space exploration and surface operations on the Moon, Mars and Asteroids. His Planetary Surface Technology Development Lab includes simulation, prototype development and test facilities. His research group and Mining Innovation Enterprise perform research in collaboration with several companies for several funded multi-year NASA grants such as extracting water from gypsum rock and buried glaciers on Mars and water extraction from ice in permanently shadowed craters on the Moon. Other aspects of the research include study and prototyping and testing robotic systems for excavation and construction for infrastructure placement such as trenching, roads, landing pads, bulk material movement and beneficiation of source material.",
		profile: "https://pstdl.com/members/paul.jpg",
		major: "Computer Science"
	};

	function parseMembers(): React.ReactElement {

		if (!req.result) return <div/>;

		const sections = Object.keys(req.result);

		for (const section of sections) {

		}

		return <span>r</span>
	}

	const req = useAsync(Firebase.fetchMembers, []);

	return (<div className={"MembersPage main"}>
		<AstraBackground/>
		<h2>Members</h2>
		{req.loading && <LinearProgress />}
		{req.error && <span>Error: {req.error.message}!</span>}
		{req.result && parseMembers()}
	</div>);

}
