/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import * as React from "react";
import "./AstraBackground.css"

export interface AstraConfig {
	x: number,
	y: number,
	radius: number,
	alpha: number,
	decreasing: boolean,
	dRatio: number
}

export interface AstraBackgroundProps {
	renderResolution?: { width: number, height: number }
	starCount?: number;
}

export interface AstraBackgroundState {

}

export class AstraBackground extends React.Component<AstraBackgroundProps, AstraBackgroundState> {

	public constructor(props: AstraBackgroundProps) {

		super(props);

	}

	public componentDidMount() {

		const canvas = document.getElementById("AstraBackground") as (HTMLCanvasElement | null);
		if (!canvas) return;
		const context = canvas.getContext("2d");
		if (!context) return;

		const stars: AstraConfig[] = [];

		for (let i: number = 0; i < (this.props.starCount || 150); i++) {
			stars[i] = {
				x: Math.random() * canvas.width,
				y: Math.random() * canvas.height,
				radius: Math.sqrt(Math.random() * 2),
				alpha: 1.0,
				decreasing: Math.random() > 0.5,
				dRatio: Math.random() * 0.0125 + 0.005
			}
		}

		const drawStars = () => {

			context.save();
			context.fillStyle = "#000";
			context.fillRect(0, 0, canvas.width, canvas.height);

			for (let i = 0; i < stars.length; i++) {

				const star = stars[i];

				context.beginPath();
				context.arc(star.x, star.y, star.radius, 0, 2 * Math.PI);
				context.closePath();
				context.fillStyle = "rgba(255, 255, 255, " + star.alpha + ")";

				if (star.decreasing) {
					star.alpha -= star.dRatio;
					if (star.alpha < 0.6) star.decreasing = false;
				} else {
					star.alpha += star.dRatio;
					if (star.alpha >= 1) star.decreasing = true;
				}

				context.fill();

			}

			context.restore();
			requestAnimationFrame(drawStars)

		};

		drawStars();

	}

	public render(): React.ReactElement {
		const renderResolution = this.props.renderResolution || { width: 1920, height: 1080 }
		return <canvas id="AstraBackground" width={renderResolution.width} height={renderResolution.height}/>;
	}

}