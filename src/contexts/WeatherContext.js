import React, { useContext, createContext, useState } from "react";
import { getForecast } from "../api/AccuWeather";

export const WeatherContext = createContext();

const WeatherContextProvider = (props) => {
	const [forecast, setForecast] = useState([]);

	const forecastSetter = (data) => {
		setForecast(data);
	};

	const updateForecast = (cityInput) => {
		getForecast(cityInput)
			.then((res) => {
				forecastSetter(res);
			})
			.catch((err) => console.log(err));
	};

	return (
		<WeatherContext.Provider value={{ forecast, updateForecast }}>
			{props.children}
		</WeatherContext.Provider>
	);
};

export default WeatherContextProvider;
