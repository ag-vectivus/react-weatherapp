import React, { useContext, useState, useEffect } from "react";
import { WeatherContext } from "../contexts/WeatherContext";

const Forecast = () => {
	const { forecast } = useContext(WeatherContext);
	const [display, setDisplay] = useState(false);

	useEffect(() => {
		if (forecast.weather && forecast.cityDets) {
			setDisplay(true);
			console.log(forecast);
		}
	}, [forecast]);

	return display ? (
		<div className='card shadow-lg rounded'>
			<img
				src={
					forecast.weather.IsDayTime
						? process.env.PUBLIC_URL + "/assets/img/day.svg"
						: process.env.PUBLIC_URL + "/assets/img/night.svg"
				}
				className='card-img-top time'
			/>
			<div className='bg-light mx-auto text-center icon'>
				<img
					src={
						process.env.PUBLIC_URL +
						`/assets/img/icons/${forecast.weather.WeatherIcon}.svg`
					}
					alt=''
				/>
			</div>
			<div className='text-muted text-uppercase text-center details'>
				<h5 className='my-3'>{forecast.cityDets.EnglishName}</h5>
				<div className='my-3'>{forecast.weather.WeatherText}</div>
				<div className='display-4 my-4'>
					<span>{forecast.weather.Temperature.Metric.Value}</span>
					<span>&deg;C</span>
				</div>
			</div>
		</div>
	) : (
		<div className='d-none' data-testid='d-none' />
	);
};

export default Forecast;
