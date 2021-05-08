import React, { useContext, useState } from "react";
import { WeatherContext } from "../contexts/WeatherContext";

const LocationForm = () => {
	const { updateForecast } = useContext(WeatherContext);
	const [city, setCity] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		updateForecast(city);
		setCity("");
	};

	return (
		<form
			className='text-center text-muted my-4'
			onSubmit={handleSubmit}
			data-testid='cityForm'
		>
			<label htmlFor='city'>Enter a location to get weather information</label>
			<input
				type='text'
				name='city'
				id='city'
				className='form-control p-4'
				value={city}
				onChange={(e) => setCity(e.target.value.trim())}
				autoComplete='off'
			/>
		</form>
	);
};

export default LocationForm;
