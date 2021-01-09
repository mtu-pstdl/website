/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import * as React from "react";
import "./FacilitiesPage.css";
import {Route, Switch} from "react-router-dom";
import {facilities, Facility} from "../../../data/facilities";
import {NavigationDetailView} from "../../components/navigation/detail/NavigationDetailView";
import {FancyRowView} from "../../components/navigation/fancy-row/FancyRowView";

export interface FacilitiesPageProps {

}

export interface FacilitiesPageState {

}

export class FacilitiesPage extends React.Component<FacilitiesPageProps, FacilitiesPageState> {

	public constructor(props: FacilitiesPageProps) {

		super(props);

	}

	public render(): React.ReactElement {
		return (<div className={"FacilitiesPage main"}>
			<Switch>
				{
					facilities.map((facility: Facility, index: number) => {
						return (<Route path={`/facilities/${facility.url}`} key={index}>
							<NavigationDetailView link={"/facilities"}>
								{facility.component === undefined ? <i>Detailed information coming soon!</i> : facility.component}
							</NavigationDetailView>
						</Route>);
					})
				}
				<Route path={`/facilities`}>
					<h2>Facilities</h2>
					<div className={"facilities"}>
						{
							facilities.map((facility: Facility, index: number) => {
								return (<FancyRowView baseUrl={"/facilities"} value={facility} key={index}/>);
							})
						}
					</div>
				</Route>
			</Switch>
		</div>);
	}

}
