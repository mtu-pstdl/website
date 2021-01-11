/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import * as React from "react";

export interface LSABREProps {

}

export interface LSABREState {

}

export class LSABRE extends React.Component<LSABREProps, LSABREState> {

	public constructor(props: LSABREProps) {

		super(props);

		this.state = {};

	}

	public render(): React.ReactElement {
		return (<div className={"LSABRE"}>
			<h2>T-REX (L-SABRE)</h2>
			<img alt={"lsabre"} src={"../render1.png"}/>
			<h3>Mission Summary</h3>
			<p>The Lunar Superconducting Access Beacon and Relay T-REX (L-SABRE) is a mission that provides power and data to rovers within Permanently Shadowed Regions (PSRs) of the Moon, where conventional line-of-sight communications and solar power generation is limited.</p>
			<p>Development of technologies as precursors to / in support of future Artemis missions. These developments are to revolve around operation within Permanently Shadowed Regions (PSRs) at the lunar poles. As one of eight universities selected and funded, our goal is to develop and demonstrate technologies that can be used in future missions, and to achieve TRL 6 by the end of this project.</p>
			<h3>Objectives</h3>
			<ul>
				<li>Enable exploration of PSRs in the lunar polar regions.</li>
				<li>Support lunar in-situ resource utilization (ISRU) in a PSR.</li>
				<li>Demonstrate capabilities to explore and operate in PSRs.</li>
			</ul>
			<h3>Team Structure</h3>
			<p>The L-SABRE Engineering Team is split into seven subsystem Groups:</p>
			<ul>
				<li>Command and Data Handling (CDH)</li>
				<li>Communication (COM)</li>
				<li>Electrical Power System (EPS)</li>
				<li>Spool Assembly (SPA)</li>
				<li>Tether (TET)</li>
				<li>Vision and Mobility (VIM)</li>
				<li>System Engineering (SYS)</li>
			</ul>
			<img alt={"lsabre"} src={"../render2.png"}/>
			<h3>Presentation at NASA BIG IDEA 2020</h3>
			<iframe width="100%" height="360" src="https://www.youtube-nocookie.com/embed/mXg53kBUfXE" frameBorder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowFullScreen/>
		</div>);
	}

}
